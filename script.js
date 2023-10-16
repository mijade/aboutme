const body = document.body;
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('change', function() {
    if (this.checked) {
        body.style.backgroundImage = 'url("neon1.gif")'; // Set your alternate image path
    } else {
        body.style.backgroundImage = 'url("neon.gif")'; // Set your default image path
    }
});
