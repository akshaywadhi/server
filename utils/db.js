import mongoose from 'mongoose'


export const connectDB = async () => {

  try{
let connect = await mongoose.connect(process.env.DATABASE_URL)
console.log(`Connected To Database ${connect.connection.host}`)

  }
  catch(err){
    console.log(err)
  }
}