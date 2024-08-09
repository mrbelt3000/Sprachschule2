document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});

document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Hier würde die Registrierung an das Backend geschickt werden
    alert('Registrierung erfolgreich! Bitte überprüfen Sie Ihre E-Mail zur Bestätigung.');
});
