/* Get Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

//console.log(ranges);

/* Build Functions */
function togglePlay() {
  // if(video.paused) {
  //     video.play()
  // } else {
  //     video.paused
  // }
  // or:
  const method = video.paused ? 'play' : 'pause';
  video[method]();
  // or:
  // video[video.paused ? 'play' : 'pause']();
}

//const updateButton = (e) => {
function updateButton() {
  // 'this' is bound to the video, so this will work!
  //console.log(this.paused);
  // I did a lot of foolish tinkering to realize this really can't be done with
  // an arrow function, because there is no 'this' equivalent.
  // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

  toggle.textContent = this.paused ? '►' : '❚ ❚';
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  // Clever symbiosis between the way things are put together in HTML and this function:
  video[this.name] = this.value;
  console.log(this.value);
  console.log(this.name);
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
  // console.log(e);
}

/* Hook up event listeners.*/
video.addEventListener('click', togglePlay);
// if the video state changes, change the button
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach((button) => button.addEventListener('click', skip));
ranges.forEach((range) => range.addEventListener('change', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => (mousedown = true));
progress.addEventListener('mouseup', () => (mousedown = false));
