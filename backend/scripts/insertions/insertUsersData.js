// backend/scripts/insertions/insertUsersData.js

/**
 * This script is used to insert the Users into the "User" collection in the database using the MongoDBManager class and the method insertMany from the MongoDBManager class.
 * @see MongoDBManager
 */

const MongoDBManager = require("../../src/utils/MongoDBManager");

/**
 * @constant mongoManager
 * @description Instantiate the MongoDBManager with the necessary parameters
 * @see MongoDBManager
 */

const mongoManager = new MongoDBManager(
  "SI_Database",
  "mongodb+srv://userAdmin1:u2TCnGu4ipaZ00Ob@clustersi.6znrvqy.mongodb.net/?retryWrites=true&w=majority"
);

/**
 * @method insertUsersData
 * @description Insert the Users into the "User" collection in the database using the MongoDBManager class and the method insertMany from the MongoDBManager class.
 * @see MongoDBManager
 * @returns {Promise<void>} A promise that resolves when the Users are inserted into the "User" collection
 * @example await insertUsersData();
 */

async function insertUsersData() {
  try {
    await mongoManager.connect();
    await mongoManager.insertMany("User", [
      {
        name: "John Doe",
        email: "john.doe@example.com",
        password: "password123",
        phone: "123-456-7890",
        address: "123 Main Street",
        postalCode: "12345",
        city: "Anytown",
        country: "Country1",
      },
      {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        password: "pass456",
        phone: "987-654-3210",
        address: "456 Oak Avenue",
        postalCode: "67890",
        city: "Another City",
        country: "Country2",
      },
      {
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        password: "securePass",
        phone: "555-123-4567",
        address: "789 Pine Lane",
        postalCode: "54321",
        city: "Cityville",
        country: "Country3",
      },
      {
        name: "Bob Anderson",
        email: "bob.anderson@example.com",
        password: "bobPass123",
        phone: "111-222-3333",
        address: "101 Elm Street",
        postalCode: "10101",
        city: "Townsville",
        country: "Country4",
      },
      {
        name: "Eva White",
        email: "eva.white@example.com",
        password: "evaPassword",
        phone: "777-888-9999",
        address: "505 Cedar Road",
        postalCode: "50505",
        city: "Villageville",
        country: "Country5",
      },
      {
        name: "Michael Brown",
        email: "michael.brown@example.com",
        password: "brownPass",
        phone: "333-444-5555",
        address: "303 Maple Boulevard",
        postalCode: "30303",
        city: "Maple City",
        country: "Country6",
      },
      {
        name: "Sophie Taylor",
        email: "sophie.taylor@example.com",
        password: "taylor123",
        phone: "999-000-1111",
        address: "909 Pine Street",
        postalCode: "90909",
        city: "Pineville",
        country: "Country7",
      },
      {
        name: "David Miller",
        email: "david.miller@example.com",
        password: "millerPass",
        phone: "444-555-6666",
        address: "606 Oak Lane",
        postalCode: "60606",
        city: "Oakland",
        country: "Country8",
      },
      {
        name: "Emma Clark",
        email: "emma.clark@example.com",
        password: "clarkPassword",
        phone: "666-777-8888",
        address: "707 Cedar Street",
        postalCode: "70707",
        city: "Cedarville",
        country: "Country9",
      },
      {
        name: "Ryan Turner",
        email: "ryan.turner@example.com",
        password: "turnerPass",
        phone: "222-333-4444",
        address: "404 Elm Road",
        postalCode: "40404",
        city: "Elm City",
        country: "Country10",
      },
    ]);
  } catch (error) {
    console.error("Error inserting Users into 'User' collection:", error);
  } finally {
    await mongoManager.close();
  }
}

/**
 * @constant insertUsersData
 * @description Export the insertUsersData function if this file is imported
 * @example import insertUsersData from "./scripts/insertions/insertUsersData";
 */

insertUsersData();
