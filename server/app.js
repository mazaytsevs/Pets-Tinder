require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
// const upload = require('./middlewares/middlewares');
const { User, Like } = require('./db/models');
const Bcrypt = require('./utils/bcrypt');
// const { checkSession } = require('./middlewares/middleware');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(process.env.PWD, 'public')));
// app.use(checkSession);

const sessionConfig = {
  name: 'cook',
  secret: process.env.SECRET || 'thisisnotsecure',
  store: new FileStore(),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
  },
  resave: true,
  saveUninitialized: false,
};

app.use(session(sessionConfig));

app.get('/checkauth', async (req, res) => {
  try {
    const result = await User.findOne({ where: { id: req.session.userId } });
    return res.json(result);
  } catch (error) {
    return res.json(error);
  }
});

app.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    console.log(req.body);
    const result = await User.create(
      {
        user_email: email,
        user_password: await Bcrypt.hash(password),
        user_name: name,
      },
    );
    if (result.id) {
      req.session.userName = result.user_name;
      req.session.userId = result.id;
      return res.json(result);
    }
    throw Error(result);
  } catch (error) {
    return res.json(error);
  }
});

app.post('/login', async (req, res) => {
  try {
    console.log('REQBODY', req.body);
    console.log('SESSION', req.session);
    const { email, password } = req.body;
    const result = await User.findOne({ where: { user_email: email } });
    if (await Bcrypt.compare(password, result.user_password)) {
      req.session.userName = result.user_name;
      req.session.userId = result.id;
      return res.json(result);
    }
    throw Error(result);
  } catch (error) {
    return res.json(error);
  }
});

app.get('/logout', async (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie('cook');
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

app.post('/likedog', async (req, res) => {
  try {
    console.log(req.body);
    await Like.create({
      user_id: req.session.userId,
      pet_pic_url: req.body.pic_url,
      pet_sex: req.body.pet_sex,
      pet_age: req.body.pet_age,
      type: req.body.type,
      like: true,
    });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

app.post('/dislikedog', async (req, res) => {
  try {
    console.log(req.body);
    console.log('ID ========>', req.session.userId);
    await Like.create({
      user_id: req.session.userId,
      pet_pic_url: req.body.pic_url,
      pet_sex: req.body.pet_sex,
      pet_age: req.body.pet_age,
      type: req.body.type,
      like: false,
    });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

app.get('/favouritepets', async (req, res) => {
  try {
    const favouritepets = await Like.findAll({
      where: { user_id: req.session.userId, like: true },
    });
    res.json(JSON.parse(JSON.stringify(favouritepets)));
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

app.put('/renamepet', async (req, res) => {
  const { pet_id, pet_name } = req.body;
  try {
    await Like.update(
      { pet_name },
      { where: { id: pet_id } },
    );
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

app.listen(process.env.PORT, () => {
  console.log('server start ', process.env.PORT);
});
