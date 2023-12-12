// backend/scripts/drops/dropUserCollection.js

/**
 * This script is used to drop the "User" collection in the database.
 * @see MongoDBManager
 */

const MongoDBManager = require("../../src/utils/MongoDBManager");

/**
 * @method dropUserCollection
 * @description Drop the "User" collection in the database using the MongoDBManager class and the method dropCollection from the MongoDBManager class.
 * @see MongoDBManager
 * @returns {Promise<void>} A promise that resolves when the "User" collection is dropped
 * @example await dropUserCollection();
 */

async function dropUserCollection() {
  // Instantiate the MongoDBManager with the necessary parameters
  const mongoManager = new MongoDBManager(
    "JCCGame",
    "mongodb+srv://userAdmin1:u2TCnGu4ipaZ00Ob@clustersi.6znrvqy.mongodb.net/?retryWrites=true&w=majority"
  );

  try {
    await mongoManager.connect();
    await mongoManager.dropCollection("User");
  } catch (error) {
    console.error("Error dropping 'User' collection:", error);
  } finally {
    await mongoManager.close();
  }
}

/**
 * @constant dropUserCollection
 * @description Export the dropUserCollection function if this file is imported
 * @example import dropUserCollection from "./scripts/drops/dropUserCollection";
 */

dropUserCollection();
