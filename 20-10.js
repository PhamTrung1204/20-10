document.addEventListener("DOMContentLoaded", function () {
  const backgroundMusic = document.getElementById("background-music");

  // Kiểm tra trạng thái nhạc trong localStorage
  if (localStorage.getItem("musicEnabled") === "true") {
    backgroundMusic.play(); // Phát nhạc nếu đã bật
  } else {
    backgroundMusic.pause(); // Dừng nhạc nếu chưa bật
  }

  // Thêm sự kiện để bật/tắt nhạc
  backgroundMusic.addEventListener("play", function () {
    localStorage.setItem("musicEnabled", "true"); // Lưu trạng thái nhạc
  });

  backgroundMusic.addEventListener("pause", function () {
    localStorage.setItem("musicEnabled", "false"); // Cập nhật trạng thái nhạc
  });

  // Tạo hiệu ứng hiển thị lời chúc khi nhấn nút
  document
    .getElementById("letter-button")
    .addEventListener("click", function () {
      // Ẩn nút lá thư
      document.getElementById("letter-button").style.display = "none";

      // Hiển thị lời chúc với hiệu ứng
      const wishMessageContainer = document.getElementById(
        "wish-message-container"
      );
      wishMessageContainer.classList.add("show"); // Thêm lớp để kích hoạt hiệu ứng

      // Đảm bảo phần tử được hiển thị trước khi áp dụng hiệu ứng
      wishMessageContainer.style.display = "block";
      setTimeout(() => {
        wishMessageContainer.classList.remove("show"); // Bỏ lớp sau khi hiển thị
      }, 15000); // Hiện lời chúc trong 3 giây trước khi ẩn lại
    });

  // Tạo hiệu ứng rơi hoa
  function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = Math.random() * 2 + 3 + "s"; // Tạo hiệu ứng rơi với thời gian ngẫu nhiên
    document.getElementById("falling-flowers").appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, 5000); // Loại bỏ hoa sau khi rơi xuống
  }

  setInterval(createFlower, 300); // Tạo hoa mới mỗi 300ms
});
