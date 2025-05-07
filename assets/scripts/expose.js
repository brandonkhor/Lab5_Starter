// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const audioElement = document.querySelector('audio');
  const hornImage = document.querySelector('#expose img');
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', (event) => {
    if (event.target.value == "air-horn") {
      hornImage.src = 'assets/images/air-horn.svg';
      audioElement.src = 'assets/audio/air-horn.mp3';
    }
    else if (event.target.value == "car-horn") {
      hornImage.src = 'assets/images/car-horn.svg';
      audioElement.src = 'assets/audio/car-horn.mp3';
    }
    else if (event.target.value == "party-horn") {
      hornImage.src = 'assets/images/party-horn.svg';
      audioElement.src = 'assets/audio/party-horn.mp3';
    }
  });

  volumeSlider.addEventListener('input', (event) => {
    const volume = event.target.value;
    
    if (volume == 0) {
        volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } 
    else if (volume < 33) {
        volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } 
    else if (volume < 67) {
        volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } 
    else {
        volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
    audioElement.volume = volume/100;
  });

  playButton.addEventListener('click', () => {
    audioElement.play();
    if (hornSelect.value === 'party-horn') {
        jsConfetti.addConfetti();
    }
  });
}