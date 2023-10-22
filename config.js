export const PORT = 5000;

export const mongoDBURL = 'mongodb+srv://lihle:12345@cluster0.rnceree.mongodb.net/books-collection?retryWrites=true&w=majority';

// import { MongoClient } from 'mongodb';

// export const PORT = 5000;
// export const mongoDBURL = 'mongodb+srv://lihle:12345@cluster0.rnceree.mongodb.net/books-collection?retryWrites=true&w=majority';

// async function connectToDatabase() {
//   try {
//     const client = new MongoClient(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true });
//     await client.connect();
//     console.log('Connected to MongoDB Atlas');
//     // You can perform your database operations here
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// }

// connectToDatabase().catch(console.error);

// // Your server setup and other code go here
