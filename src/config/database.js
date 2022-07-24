const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    dialect: process.env.MYDB,
    host: process.env.MYHOST,
    port: process.env.MYPORT,
    username: process.env.MYUSER,
    password: process.env.MYPASSWORD,
    database: process.env.MYDATABASE,
    define: {
        timestamps: false
    }
}


