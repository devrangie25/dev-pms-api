require('dotenv').config();

module.exports = {
    DB_DIALECT: process.env.DB_DIALECT || 'mysql',
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_PORT: process.env.DB_PORT || '3306',
    DB_NAME: process.env.DB_NAME || 'dev_pms',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || 'T1m34TT4ck!#',
    BASE_URL: process.env.BASE_URL || 'http://localhost:4000',
    PORT: process.env.PORT || '4000'
}
