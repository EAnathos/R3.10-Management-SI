// backendRemastered/src/utils/MongoDBManager.js

/**
 * This class is used to manage the connection to the database and the creation of collections.
 * It is used also to create collection, insert data into the collections and drop collections.
 */

const { MongoClient } = require("mongodb");

/**
 * @class MongoDBManager
 * @description This class is used to manage the connection to the database and the creation of collections.
 * It is used also to create collection, insert data into the collections and drop collections.
 * @param {string} databaseName The name of the database to connect to
 * @param {string} uri The URI of the database to connect to
 * @example const mongoManager = new MongoDBManager("SI_Database", "mongodb://localhost:27017");
 */

class MongoDBManager {
  constructor(databaseName, uri) {
    this.databaseName = databaseName;
    this.uri = uri;
    this.client = new MongoClient(this.uri);
  }

  /**
   * @method connect
   * @description Connect to the database
   * @returns {Promise<void>} A promise that resolves when the connection is established
   * @example await mongoManager.connect();
   */

  async connect() {
    try {
      await this.client.connect();
      console.log("Connected to the database");
    } catch (error) {
      console.error("Error connecting to the database:", error);
    }
  }

  /**
   * @method close
   * @description Close the connection to the database
   * @returns {Promise<void>} A promise that resolves when the connection is closed
   * @example await mongoManager.close();
   */

  async close() {
    try {
      await this.client.close();
      console.log("Closed database connection");
    } catch (error) {
      console.error("Error closing the database connection:", error);
    }
  }

  /**
   *
   * @param {string} collectionName
   * @param {JSON} schema
   * @param {boolean} uniqueName
   * @returns {Promise<void>} A promise that resolves when the collection is created
   * @example await mongoManager.createCollection("User", schema, true);
   */

  async createCollection(collectionName, schema, uniqueEmail = false) {
    const database = this.client.db(this.databaseName);

    await database.createCollection(collectionName, {
      validator: {
        $jsonSchema: schema,
      },
      validationAction: "error",
      validationLevel: "strict",
    });

    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(
      `Collection '${collectionName}' created successfully. Adding constraints...`
    );

    if (uniqueEmail) {
      await database
        .collection(collectionName)
        .createIndex({ email: 1 }, { unique: true });
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(
      `The '${collectionName}' collection has been successfully created.`
    );
  }

  /**
   *
   * @param {string} collectionName
   * @param {*} documents
   * @returns {Promise<void>} A promise that resolves when the documents are inserted into the collection
   * @example await mongoManager.insertMany("User", documents);
   */

  async insertMany(collectionName, documents) {
    const database = this.client.db(this.databaseName);
    const collection = database.collection(collectionName);

    try {
      await collection.insertMany(documents);
      console.log(
        `Inserted data into collection '${collectionName}' successfully.`
      );
    } catch (error) {
      console.error(
        `Error inserting data into collection '${collectionName}':`,
        error
      );
    }
  }

  /**
   *
   * @param {string} collectionName
   * @returns {Promise<void>} A promise that resolves when the collection is dropped
   * @example await mongoManager.dropCollection("User");
   */

  async dropCollection(collectionName) {
    const database = this.client.db(this.databaseName);

    await database.collection(collectionName).drop();

    console.log(`Collection '${collectionName}' dropped successfully.`);
  }
}

/**
 * @module MongoDBManager
 * @description This module exports the MongoDBManager class.
 * @example const MongoDBManager = require("./MongoDBManager");
 * @see MongoDBManager
 * @exports MongoDBManager
 * @version 1.0
 */

module.exports = MongoDBManager;
