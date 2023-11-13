import mongoose from 'mongoose';
import { app } from './app'

const start = async () => {
<<<<<<< HEAD
  console.log('Starting up...');
=======
  console.log('starting up...');
>>>>>>> 67e54141b0f0e41898f96f43f9f69f619219bf43
  
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined');
  }
  
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
} catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log('Listening on port 3000!')
  });
};

start();