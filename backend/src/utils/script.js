// server.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Connexion à la base de données
mongoose.connect(
  "mongodb+srv://userAdmin1:u2TCnGu4ipaZ00Ob@clustersi.6znrvqy.mongodb.net/SI_Database"
);

// Schéma du modèle utilisateur
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

app.use(bodyParser.json());

// Route pour l'inscription
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: "Inscription réussie" });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de l'inscription" });
  }
});

// Route pour la connexion
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).json({ message: "Connexion réussie" });
    } else {
      res.status(401).json({ error: "Identifiants incorrects" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la connexion" });
  }
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
