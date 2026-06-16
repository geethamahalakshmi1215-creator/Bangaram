document.addEventListener('DOMContentLoaded', () => {
  const revealButton = document.getElementById('revealButton');
  const revealNote = document.getElementById('revealNote');

  if (!revealButton || !revealNote) {
    console.error('Reveal elements not found');
    return;
  }

  revealButton.addEventListener('click', () => {
    const isCurrentlyHidden = revealNote.classList.contains('hidden');
    
    if (isCurrentlyHidden) {
      // Show the reveal note
      revealNote.classList.remove('hidden');
      revealButton.textContent = 'Hide the surprise';
      revealButton.style.backgroundColor = '#ff6b9d';
      revealNote.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      // Hide the reveal note
      revealNote.classList.add('hidden');
      revealButton.textContent = 'Reveal a special surprise';
      revealButton.style.backgroundColor = '';
    }
  });
});
