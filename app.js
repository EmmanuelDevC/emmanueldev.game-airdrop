let count = 0;
let decrease = 10000;
let click = document.getElementById('click');
let decrement = document.getElementById('decrease');
let actionButton = document.getElementById('actionButton');

function increase() {
    if (decrease > 0) {
        count += 1000;
        decrease -= 1000;
        click.innerText = count;
        decrement.innerText = decrease;

        if (decrease === 0) {
            actionButton.disabled = true;
            alert('Decreasing count reached 0. The button is now disabled.');
            startCountingUp();
        }
    }
}

function startCountingUp() {
    let interval = setInterval(function() {
        if (decrease < 10000) {
            decrease += 5;
            decrement.innerText = decrease;
        } else {
            clearInterval(interval);
            alert('Claim your taps now');
            actionButton.disabled = false;
        }
    }, 1000); // Increase by 5 every second
}

startCountingUp();

actionButton.addEventListener('click', increase);

// Initial setup
click.innerText = count;
decrement.innerText = decrease;

if (decrease > 0) {
    alert('Your TapBot has finished earning for you\nstart Tapping');
}
