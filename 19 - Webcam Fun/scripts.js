const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

async function getVideo() {
  // The way Wes does this in the video is deprecated, this is how instead:
  // per: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject
  const mediastream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });
  try {
    video.srcObject = mediastream;
    video.play();
  } catch (err) {
    console.error(`error: ${err}`);
  }
}

function paintToCanvas() {
  // canvas must be same size as video
  const width = video.videoWidth;
  const height = video.videoHeight;
  //console.log(width, height);
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    // take pixels out
    let pixels = ctx.getImageData(0, 0, width, height);
    // mess with them
    //pixels = redEffect(pixels);
    //pixels = rgbSplit(pixels);
    // ctx.globalAlpha = 0.1;
    pixels = greenScreen(pixels);

    // put them pack
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function takePhoto() {
  // play the sound:
  snap.currentTime = 0;
  snap.play();

  // Take the data from the canvas
  const data = canvas.toDataURL('image/jpeg');
  // console.log(data);
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'handsome');
  link.innerHTML = `<img src="${data}" alt="My Image" />`;
  strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 100; //r
    pixels.data[i + 1] = pixels.data[i + 1] - 50; //g
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; //b
  }
  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0] + 100; //r
    pixels.data[i + 500] = pixels.data[i + 1] - 50; //g
    pixels.data[i - 550] = pixels.data[i + 2] * 0.5; //b
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  // work them sliders
  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  // console.log(levels);

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);
