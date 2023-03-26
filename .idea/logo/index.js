const paths = document.querySelectorAll('"#visual>svg>g>path"');
let i = 0;

function animate() {
  if (i === paths.length) {
    return;
  }
  paths[i].classList.add('active');
  i++;
  setTimeout(animate, 100);
}

animate();