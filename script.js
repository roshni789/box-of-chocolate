// chocolate click logic
const chocolates = document.querySelectorAll('.chocolates img');

let currentAudio = null;

chocolates.forEach(choco => {
  choco.addEventListener('click', () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    const audioSrc = choco.getAttribute('data-audio');
    if (!audioSrc) return; // safety check

    const audio = new Audio(audioSrc);
    audio.play();

    currentAudio = audio;

    audio.addEventListener('ended', () => {
      currentAudio = null;
    });
  });
});

// lid animation logic
const lid = document.querySelector('.lid');

lid.addEventListener('click', () => {
  lid.classList.add('open');
});
