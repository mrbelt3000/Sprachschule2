const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

// MongoDB-Verbindung
mongoose.connect('mongodb://localhost:27017/sprachenplattform', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Benutzer Schema
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    isActive: Boolean
});

const User = mongoose.model('User', userSchema);

// Registrierung API
app.post('/register', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const newUser = new User({ firstName, lastName, email, password, isActive: false });
    await newUser.save();
    // Hier wird die Bestätigungs-E-Mail versendet
    res.send('Registrierung erfolgreich! Bitte überprüfen Sie Ihre E-Mail.');
});

app.listen(3000, () => {
    console.log('Server läuft auf Port 3000');
});
