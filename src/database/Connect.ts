import { Connection, createConnection } from 'typeorm'

async function connection () {
    await createConnection();
};
module.exports = connection;