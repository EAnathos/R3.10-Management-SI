// backend/scripts/creations/createUserCollection.js

/**
 * This script is used to create the "User" collection in the database.
 * It is used as an example to create other collections.
 */

const MongoDBManager = require("../../src/utils/MongoDBManager");

/**
 * @method createUserCollection
 * @description Create the "User" collection in the database
 * @returns {Promise<void>} A promise that resolves when the collection is created
 * @example await createUserCollection();
 */

async function createUserCollection() {
  // Define the schema for the "User" collection
  const schema = {
    bsonType: "object",
    required: ["name", "email", "password", "phone", "address", "postalCode", "city", "country"],
    properties: {
      name: { bsonType: "string" },
      email: { bsonType: "string" },
      password: { bsonType: "string" },
      phone: { bsonType: "string" },
      address: { bsonType: "string" },
      postalCode: { bsonType: "string" },
      city: { bsonType: "string" },
      country: { bsonType: "string" },
    },
  };

  // Define the MongoDBManager with the necessary parameters
  const mongoManager = new MongoDBManager(
    "JCCGame",
    "mongodb+srv://userAdmin1:u2TCnGu4ipaZ00Ob@clustersi.6znrvqy.mongodb.net/?retryWrites=true&w=majority"
  );

  try {
    // Connect to the database
    await mongoManager.connect();

    // Create the "User" collection with the schema defined above and the unique constraint on the "email" field
    await mongoManager.createCollection("User", schema, true);
  } catch (error) {
    console.error('Error creating "User" collection:', error);
  } finally {
    // Close the connection to the database
    await mongoManager.close();
  }
}

/**
 * @constant createUserCollection
 * @description Export the createUserCollection function if this file is imported
 * @example import createUserCollection from "./creations/createUserCollection";
 */

// Execute the script
createUserCollection();
