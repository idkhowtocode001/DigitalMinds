document.addEventListener('DOMContentLoaded', () => {
  const commandElements = document.querySelectorAll('[command]');

  commandElements.forEach(element => {
    element.addEventListener('click', (e) => {
      const command = element.getAttribute('command');
      const commandFor = element.getAttribute('commandfor');

      if (command === 'show-modal' && commandFor) {
        const dialog = document.getElementById(commandFor);
        if (dialog) {
          dialog.showModal();
        }
      } else if (command === 'close' && commandFor) {
        const dialog = document.getElementById(commandFor);
        if (dialog) {
          dialog.close();
        }
      }
    });
  });
  const dialogs = document.querySelectorAll('dialog');
  dialogs.forEach(dialog => {
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) {
        dialog.close();
      }
    });
  });
  const mobileLinks = document.querySelectorAll('.mobile-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      const dialog = document.getElementById('mobile-menu');
      if (dialog) {
        dialog.close();
      }
    });
  });
});
