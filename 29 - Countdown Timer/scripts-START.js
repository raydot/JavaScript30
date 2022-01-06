let countdown; // probably not best practice, but
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
    // clear any existing!
    clearInterval(countdown);
    // Can do it this way, but clunky
    // setInterval(function() {
    //     seconds--
    // }, 1000);
    const now = Date.now();
    // now is in milieconds
    const then = now + seconds * 1000;

    // Run display function immediately once:
    displayTimeLeft(seconds);
    //console.log(now, seconds, now + seconds);
    displayEndTime(then);

    // console.log({ now, then });
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // Check if we should stop
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        // display it
        //console.log(secondsLeft);
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    // console.log('hi:', seconds);
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    //console.log({ minutes, remainderSeconds });
    const display = `${minutes}:${
    remainderSeconds < 10 ? '0' : ''
  }${remainderSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
}

// Show ending time
function displayEndTime(timestamp) {
    console.log(timestamp);
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Please return by ${hour > 12 ? hour - 12 : hour}:${
    minutes < 10 ? '0' : ''
  }${minutes}`;
}

function startTimer() {
    //console.log(this);
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach((button) => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset();
});