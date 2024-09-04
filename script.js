const container = document.querySelector('.container');

const unsplashURL = 'https://picsum.photos/';
const rows = 10;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement('img');
  img.src = `${unsplashURL}${getRandomSize()}`;

  container.appendChild(img);
}

function getRandomSize() {
  return `${getRandomNum()}/${getRandomNum()}`;
}

function getRandomNum() {
  return Math.floor(Math.random() * 10) + 300;
}


