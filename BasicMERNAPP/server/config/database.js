import mongoose from 'mongoose'


const database= async()=>{
    try {

      // console.log(process.env.DATABASE_URL)
        
        await mongoose.connect(process.env.DATABASE_URL);
    console.log("connected to Database ")

        
    } catch (error) {
        console.log(`Error Connecting DB :- ${error}`)
        
    }
}

export default database;