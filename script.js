const revealButton = document.getElementById('revealButton');
const revealNote = document.getElementById('revealNote');

revealButton.addEventListener('click', () => {
  const isHidden = revealNote.classList.toggle('hidden');
  revealButton.textContent = isHidden
    ? 'Reveal a special surprise'
    : 'Hide the surprise';
  if (!isHidden) {
    revealNote.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});
