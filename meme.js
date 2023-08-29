let currentAudio = null;

function playSound(soundURL) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  const audio = new Audio(soundURL);
  audio.play();
  currentAudio = audio;
}
