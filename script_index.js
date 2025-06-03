window.addEventListener("DOMContentLoaded", () => {
  const navBar = document.querySelector(".nav-bar");
  const navItems = document.querySelectorAll(".nav-item");

  function randomizePositions() {
    const barWidth = navBar.clientWidth;
    const barHeight = navBar.clientHeight;
    const positions = [];

    navItems.forEach((item) => {
      const itemWidth = item.offsetWidth;
      const itemHeight = item.offsetHeight;
      let tries = 0;
      let left, top, overlap;

      do {
        left = Math.random() * (barWidth - itemWidth);
        top = Math.random() * (barHeight - itemHeight);

        overlap = positions.some((pos) => {
          return (
            left < pos.left + pos.width &&
            left + itemWidth > pos.left &&
            top < pos.top + pos.height &&
            top + itemHeight > pos.top
          );
        });

        tries++;
      } while (overlap && tries < 100); // tránh lặp vô tận

      positions.push({ left, top, width: itemWidth, height: itemHeight });

      item.style.left = `${left}px`;
      item.style.top = `${top}px`;
    });
  }

  // Khởi tạo vị trí ban đầu
  randomizePositions();

  // Đổi vị trí mỗi 5 giây
  setInterval(randomizePositions, 1000);
});
