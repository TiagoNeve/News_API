import 'reflect-metadata'
import { createConnection } from 'typeorm'

async function connect() {
    await createConnection();
    console.log('Connection created')
}

export default connect;