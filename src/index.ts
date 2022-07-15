import  Store  from './store'


const main = async () => {
    try {
        await Store.initialize()
    } catch (error) {
        console.log(error)
        throw new Error("unable to connect to db")
    }
}

main()