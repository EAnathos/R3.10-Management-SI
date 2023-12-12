// backend/src/config/database.js

/**
 * This file is used to connect to the database.
 */

const mongoose = require("mongoose");

/**
 * @method connectDatabase
 * @description Connect to the database using the mongoose.connect method
 * @returns {Promise<void>} A promise that resolves when the connection is established
 * @example await connectDatabase();
 */

async function connectDatabase() {
  try {
    await mongoose.connect(
      "mongodb+srv://userAdmin1:u2TCnGu4ipaZ00Ob@clustersi.6znrvqy.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to the database.");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
}

/**
 * @constant connectDatabase
 * @description Export the connectDatabase function if this file is imported
 * @example import connectDatabase from "./config/database";
 */

module.exports = connectDatabase;
