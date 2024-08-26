import mongoose from "mongoose";

export async function setupMongo() {

    try{

        if(mongoose.connection.readyState === 1){
            return;
    } 

    console.log('🎲Connecting to database...');
    await mongoose.connect('monogodb://localhost:27017/elitetracker-mongo', { 
       serverSelectionTimeoutMS:3000,
    });

    console.log('✔ Database connected!');
        
    } catch {
        throw new Error('❌ Database not connected.');}

}