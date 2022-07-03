const checkSession = (req, res, next) => {
  if (req.session.user) {
    res.locals.user = {
      userName: req.session.userName,
      id: req.session.userId,
    };
    next();
  }
  next();
};

const checkLogin = (req, res, next) => {
  // ПРОВЕРКА АВТОРИЗАЦИИ ЮЗЕРА
  if (req.session.userId) {
    res.redirect('/');
  }
  next();
};

module.exports = { checkSession, checkLogin };
