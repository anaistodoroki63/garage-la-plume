// Gestion des formulaires
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const recruitmentForm = document.getElementById('recruitement-form');

    // Formulaire de contact
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const nom = document.getElementById('nom').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            alert(`Merci ${nom}! Votre message a été envoyé.\nNous vous répondrons à ${email} très bientôt.`);
            contactForm.reset();
        });
    }

    // Formulaire de recrutement
    if (recruitmentForm) {
        recruitmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const nom = document.getElementById('nom-candidat').value;
            const prenom = document.getElementById('prenom').value;
            const poste = document.getElementById('poste').value;

            alert(`Bienvenue ${prenom} ${nom}!\nVotre candidature pour le poste de ${poste} a été reçue.\nNous vous contacterons bientôt.`);
            recruitmentForm.reset();
        });
    }
});
