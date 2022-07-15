import { DataSource } from 'typeorm'
import { User } from './entities/user'
const Store = new DataSource({
    type: "postgres",
    host: "192.168.50.50",
    port: 3214,
    username: "admin",
    password: "password",
    database: "typeorm",
    entities:[User],
    synchronize: true,
})

async function init(){
    try {
        await Store.initialize()
        console.log("Data Source has been initialized!")
    } catch (err) {
        console.error("Error during Data Source initialization", err)
    }
}
init()
export default Store



