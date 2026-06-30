const prisma = require('../lib/prisma');
const argon2 = require('argon2');

module.exports = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            return res.status(404).json({ error: 'Utilisateur non trouvé' });
        }

        const validPassword = await argon2.verify(user.password, password);

        if (!validPassword) {
            return res.status(401).json({ error: 'Mot de passe incorrect' });
        }

        return res.json({ message: 'Connexion réussie', user });

    } catch (error) {
        console.error('Erreur POST /login :', error);
        return res.status(500).json({ error: 'Erreur serveur' });
    }
};