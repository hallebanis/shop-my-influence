require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
});
const connect = async () => {
    client
        .connect()
        .then(() => console.log('database connected'))
        .catch((err) => console.error('database connection', err));
};
const getDbClient = () => {
    return client;
};

module.exports = { connect, getDbClient };
