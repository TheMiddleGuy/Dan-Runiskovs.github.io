// Flag links work without JavaScript. Enhance dismissal and preserve the section.
const languagePicker = document.querySelector('.language-picker');
if (languagePicker) {
  const summary = languagePicker.querySelector('summary');
  document.addEventListener('click', (event) => {
    if (!languagePicker.contains(event.target)) languagePicker.open = false;
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && languagePicker.open) {
      languagePicker.open = false;
      summary.focus();
    }
  });
  languagePicker.addEventListener('focusout', (event) => {
    if (!languagePicker.contains(event.relatedTarget)) languagePicker.open = false;
  });
  languagePicker.querySelectorAll('.language-options a').forEach((link) => {
    const destination = new URL(link.getAttribute('href'), window.location.href);
    destination.hash = window.location.hash;
    link.href = destination.href;
  });
  window.addEventListener('hashchange', () => {
    languagePicker.querySelectorAll('.language-options a').forEach((link) => {
      const destination = new URL(link.href);
      destination.hash = window.location.hash;
      link.href = destination.href;
    });
  });
}
