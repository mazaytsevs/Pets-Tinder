require('dotenv').config();
module.exports = {
"development": {
"username": process.env.DB_USER,
"password": process.env.DB_PASS,
"database": process.env.DB_NAME,
"host": process.env.DB_URL,
"dialect": "postgresql"
},
"test": {
"username": "admin",
"password": "123",
"database": "socker_site",
"host": "127.0.0.1",
"dialect": "postgresql"
},
"production": {
"username": "admin",
"password": "123",
"database": "socker_site",
"host": "127.0.0.1",
"dialect": "postgresql"
}
}
