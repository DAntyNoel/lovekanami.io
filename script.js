const images = [
    "res/images/backgrounds/Be-Shinning.png",
    "res/images/backgrounds/Soda.png",
];
  
let index = 0;
const bg = document.querySelector('.background');

function changeBackground() {
bg.style.opacity = 0;
setTimeout(() => {
    bg.style.backgroundImage = `url(${images[index]})`;
    bg.style.opacity = 1;
    index = (index + 1) % images.length;
}, 1000);
}

// 初始设置
bg.style.backgroundImage = `url(${images[0]})`;
setInterval(changeBackground, 5000); // 每 5 秒切换一次
