app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: "Inscription réussie" });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ error: "Erreur lors de l'inscription" });
  }
});

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
    console.error("Error during login:", error);
    res.status(500).json({ error: "Erreur lors de la connexion" });
  }
});
