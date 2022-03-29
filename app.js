const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require ('./routes/User')

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.post('/api/auth/signup', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'Utilisateur crée !'
  });
});

app.post('/api/auth/login', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'Utilisateur crée !'
  });
});

app.get("/api/auth/signup", (req, res , next) =>{
  console.log(req.body);
  res.status(200).json({
    message: "Utilisateur trouvé"
  });
})

app.use('/api/auth/signup', userRoutes)
module.exports = app;


mongoose.connect('mongodb+srv://Damien:ClusterDamien@cluster0.odzaj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

