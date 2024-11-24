// config/db.js
// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB connected");
//   } catch (err) {
//     console.error("MongoDB connection error:", err);
//     process.exit(1); // Exit the process with failure
//   }
// };

// module.exports = connectDB;






const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;






// config/db.js
// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     // Use the MONGO_URI environment variable (from Render or local .env)
//     const dbURI = process.env.MONGO_URI;

//     if (!dbURI) {
//       throw new Error('MONGO_URI is not defined in environment variables.');
//     }

//     // Connect to MongoDB
//     await mongoose.connect(dbURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//     process.exit(1); // Exit the process with failure
//   }
// };

// module.exports = connectDB;





// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

