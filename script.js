const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
const contactForm = document.querySelector('#contact-form');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get('name').trim();
  const senderEmail = formData.get('email').trim();
  const subject = formData.get('subject').trim() || `Portfolio message from ${name}`;
  const message = formData.get('message').trim();
  const body = `Name: ${name}\nEmail: ${senderEmail}\n\n${message}`;
  const gmailDraft = new URL('https://mail.google.com/mail/');
  gmailDraft.search = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: 'kevin.sarhane@gmail.com',
    su: subject,
    body,
  }).toString();
  window.open(gmailDraft.toString(), '_blank', 'noopener,noreferrer');
});

document.querySelector('#year').textContent = new Date().getFullYear();
