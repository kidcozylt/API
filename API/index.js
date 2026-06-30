const express = require('express')
const route = require('./routes/index')
const app = express()

// GET  Voir tout les avis 
// GET  Voir un avis 
// POST Ajouter un avis
// PUT  Autoriser un avis 
// DELETE Supprimer un avis
// POST Register 
// POST Login
// POST Changer de mot de passe
// POST Oublier mot de passe

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use('/', route)

const prisma = require('./lib/generated/prisma')

const server = app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000')
})

// Arrêt propre : on ferme la connexion Prisma avant de quitter.
const shutdown = async () => {
  await prisma.$disconnect()          // ferme la connexion à la base
  server.close(() => process.exit(0))
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)