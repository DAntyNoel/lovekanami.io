const images = [
    "res/images/backgrounds/Be-Shinning.png",
    "res/images/backgrounds/Soda.png",
];
  
document.addEventListener("DOMContentLoaded", () => {
    let index = 0;
    const bg = document.querySelector(".background");
  
    // 初始化背景
    bg.style.backgroundImage = `url(${images[0]})`;
    bg.style.opacity = 1;
  
    function changeBackground() {
      bg.style.opacity = 0; // 淡出当前
      setTimeout(() => {
        index = (index + 1) % images.length;
        bg.style.backgroundImage = `url(${images[index]})`;
        bg.style.opacity = 1; // 淡入新背景
      }, 1000); // 与 CSS transition 的时间保持一致
    }
  
    setInterval(changeBackground, 30000); // 每 30 秒切换一次
  });
  