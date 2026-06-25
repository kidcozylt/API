const express = require('express');
const router = express.Router();

const getController = require('../controllers/get.controllers');
const getControllerAvis = require('../controllers/get.controllers.reviews');
const getControllerAvisId = require('../controllers/get.controllers.reviews.id');
const postController = require('../controllers/post.controllers');
const postControllerRegister = require('../controllers/post.controllers.register');
const postControllerLogin = require('../controllers/post.controllers.login');
const postControllerForgotPassword = require('../controllers/post.controllers.forgot-password');
const postControllerResetPassword = require('../controllers/post.controllers.reset-password');
const putController = require('../controllers/put.controllers');
const deleteController = require('../controllers/delete.controllers');

const getMiddleware = require('../middleware/get.middleware');
const getMiddlewareReviews = require('../middleware/get.middleware.reviews');
const getMiddlewareReviewsId = require('../middleware/get.middleware.reviews.id');
const postMiddleware = require('../middleware/post.middleware');
const postMiddlewareRegister = require('../middleware/post.middleware.register');
const postMiddlewareLogin = require('../middleware/post.middleware.login');
const postMiddlewareForgotPassword = require('../middleware/post.middleware.forgot-password');
const postMiddlewareResetPassword = require('../middleware/post.middleware.reset-password');
const putMiddleware = require('../middleware/put.middleware');
const deleteMiddleware = require('../middleware/delete.middleware');

router.get('/', getMiddleware, getController)                                                    // accueil de l'API
router.get('/avis', getMiddlewareReviews, getControllerAvis)                                     // tous les avis (protégé par JWT)
router.get('/avis/:id', getMiddlewareReviewsId, getControllerAvisId)                             // un avis précis

// Création / modification / suppression d'un avis
router.post('/add/avis', postMiddleware, postController)                                         // ajouter un avis
router.put('/autoriser/avis/:id', putMiddleware, putController)                                  // autoriser (publier) un avis
router.delete('/avis/:id', deleteMiddleware, deleteController)                                   // supprimer un avis

// Authentification
router.post('/register', postMiddlewareRegister, postControllerRegister)                         // créer un compte
router.post('/login', postMiddlewareLogin, postControllerLogin)                                  // se connecter
router.post('/change-password', putMiddleware, putController)                                    // changer de mot de passe
router.post('/forgot-password', postMiddlewareForgotPassword, postControllerForgotPassword)      // demander une réinitialisation
router.post('/reset-password', postMiddlewareResetPassword, postControllerResetPassword)         // réinitialiser le mot de passe

module.exports = router;