import { Connection, createConnection } from 'typeorm'

async function connection () {
    await createConnection().catch(error => console.log(error));
};
module.exports = connection;