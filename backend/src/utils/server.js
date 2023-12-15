const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Connexion à MongoDB
mongoose.connect(
  "mongodb+srv://userAdmin1:u2TCnGu4ipaZ00Ob@clustersi.6znrvqy.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Définition du schéma utilisateur
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model("User", userSchema);

// Middleware pour parser le corps des requêtes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint pour la création d'utilisateur
app.post("/inscription", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Vérification de l'unicité de l'email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Cette adresse email est déjà utilisée." });
    }

    // Création de l'utilisateur
    const newUser = new User({ email, password });
    await newUser.save();

    res.status(201).json({ message: "Utilisateur créé avec succès." });
  } catch (error) {
    res.status(500).json({
      message: "Une erreur est survenue lors de la création de l'utilisateur.",
    });
  }
});

// Endpoint pour la connexion de l'utilisateur
app.post("/connexion", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Vérification des informations de connexion
    const user = await User.findOne({ email, password });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Adresse email ou mot de passe incorrect." });
    }

    res.status(200).json({ message: "Connexion réussie." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Une erreur est survenue lors de la connexion." });
  }
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
