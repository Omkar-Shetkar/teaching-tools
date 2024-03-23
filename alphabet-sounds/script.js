const letterContainer = document.getElementById('letter-container');
const audioElement = document.getElementById('audio-A');
const topLine = letterContainer.querySelector('.top-line');
const diagonalLine = letterContainer.querySelector('.diagonal-line');

function animateLetterA() {
  topLine.classList.add('show');
  diagonalLine.classList.add('show');
}

// Fix: Add event listener to the function execution (or another element)
window.addEventListener('load', animateLetterA);  // Trigger animation on page load

animateLetterA.addEventListener('start', () => {
  audioElement.play();
});
