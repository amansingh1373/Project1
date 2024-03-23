import {DB_NAME} from '../constants.js';
import mongoose from 'mongoose';

const connectDB = async () => { 
    try {
        await mongoose.connect(`${process.env.MOGODB_URI}/${DB_NAME}`);
        console.log('Connected to the database!');
    } catch (error) {
        console.error('Error connecting to the database: ', error);
    }
};

export default connectDB;
