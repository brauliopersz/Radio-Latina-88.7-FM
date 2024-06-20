// Get references to the play button and audio element
const playButton = document.getElementById('playButton');
const radioAudio = document.getElementById('radioAudio');
const volumeSlider = document.getElementById("volumeSlider");
const pausePath = document.getElementById("pausePath");

// Function to toggle audio playback
function toggleAudioPlay() {
  if (radioAudio.paused) {
    radioAudio.play();
    playButton.classList.add("playing"); // Add a class for styling changes (optional)
  } else {
    radioAudio.pause();
    playButton.classList.remove("playing"); // Remove the class if added
    playButton.style.display = "block";
        pausePath.style.display = "none";
  }
}

// Attach click event listener to the play button
playButton.addEventListener('click', toggleAudioPlay);

//Regulador de volumen
 volumeSlider.addEventListener("input", function() {
     radioAudio.volume = this.value;
   });