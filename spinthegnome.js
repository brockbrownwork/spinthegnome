let gnome = document.getElementById('gnome');
let grpmDisplay = document.getElementById('grpm');
let clicksDisplay = document.getElementById('clicks');
let fasterText = document.getElementById('faster-text');
let rpm = 0;
let rotation = 0;
let animation;
let clicks = localStorage.getItem('clicks') ? parseInt(localStorage.getItem('clicks')) : 0;

// Update clicks display
function updateClicksDisplay() {
    clicksDisplay.textContent = `${clicks} Clicks`;
}

function spinGnome() {
    rotation += (360 * rpm) / (60 * 1000) * 16.67;
    gnome.style.transform = `rotate(${rotation}deg)`;
    animation = requestAnimationFrame(spinGnome);
}

function increaseRpm() {
    // play bloop.wav at 0.25 volume when the gnome is clicked
    const bloop = new Audio('bloop.wav');
    bloop.volume = 0.25;
    bloop.playbackRate = 2;
    bloop.play();
    if (rpm === 0) {
        // start the loop of the birds chirping
        const audio = new Audio('birds-loop.wav');
        audio.loop = true;
        audio.volume = 0; // start with volume set to 0
        audio.play();

        // gradually increase volume over 5 seconds
        const fadeInInterval = setInterval(() => {
        audio.volume += 0.025 / 16;
        if (audio.volume >= 0.25) {
            clearInterval(fadeInInterval); // clear the interval when volume reaches 0.5
        }
        }, 500);
        
        // start the animation
        animation = requestAnimationFrame(spinGnome);
    }

    rpm += 1;
    // Update clicks and save to localStorage
    clicks++;
    console.log(clicks);
    localStorage.setItem('clicks', clicks);
    updateClicksDisplay();
    grpmDisplay.textContent = `${rpm} GRPM`;

    if ($('#grpm').css('display') === 'none') {
        $('#grpm').fadeIn(1000);
    }

    if (rpm >= 10) {
        $('#faster-text').show();
    }
}

// prevent zooming when click mashing on phones
  document.getElementById('gnome').addEventListener('dblclick', function (event) {
    event.preventDefault();
  });

// Initialize clicks display on page load
updateClicksDisplay();
gnome.addEventListener('click', increaseRpm);