const revealButton = document.getElementById('revealButton');
const revealNote = document.getElementById('revealNote');

revealButton.addEventListener('click', () => {
  revealNote.classList.toggle('hidden');
  revealButton.textContent = revealNote.classList.contains('hidden')
    ? 'Reveal a special surprise'
    : 'Hide the surprise';
});
