const text = 'spinthegno.me';
const container = document.getElementById('spinthegnome-header');

text.split('').forEach(char => {
  const span = document.createElement('span');
  span.className = 'letter';
  span.textContent = char;
  container.appendChild(span);
});

setInterval(() => {
  // count the number of .letter elements
    const letterCount = document.querySelectorAll('.letter').length;
    // generate a random number between 0 and the number of .letter elements
    const randomLetter = Math.floor(Math.random() * letterCount);
    // select the random letter
    const letter = document.querySelectorAll('.letter')[randomLetter];
    // change the color of the random letter
    letter.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
}, 100);