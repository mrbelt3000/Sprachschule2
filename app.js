document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});

document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Hier würde die Registrierung an das Backend geschickt werden
    alert('Registrierung erfolgreich! Bitte überprüfen Sie Ihre E-Mail zur Bestätigung.');
});

document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Verhindert das Standard-Formular-Submit-Verhalten

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            // Benutzerdaten in Firestore speichern
            return setDoc(doc(db, "users", user.uid), {
                firstName: firstName,
                lastName: lastName,
                email: email
            });
        })
        .then(() => {
            alert('Registrierung erfolgreich und Daten gespeichert!');
        })
        .catch((error) => {
            console.error("Fehler bei der Registrierung:", error);
            alert('Registrierung fehlgeschlagen: ' + error.message);
        });
});
