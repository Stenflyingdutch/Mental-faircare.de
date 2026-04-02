document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('newsletterForm');
  const msg = document.getElementById('newsletterMsg');

  if (!form || !msg) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();

    if (!email || !email.includes('@')) {
      msg.textContent = 'Bitte gib eine gültige E-Mail-Adresse ein.';
      return;
    }

    msg.textContent = 'Danke. Das Formular ist als Frontend vorbereitet. Die E-Mail-Integration kommt im nächsten Schritt.';
    form.reset();
  });
});
