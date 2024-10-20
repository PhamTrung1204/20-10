document.addEventListener("DOMContentLoaded", function () {
  const backgroundMusic = document.getElementById("background-music");
  const toggleMusicButton = document.getElementById("toggle-music-button");
  const letterButton = document.getElementById("letter-button");
  const wishMessageContainer = document.getElementById(
    "wish-message-container"
  );

  // Cập nhật biểu tượng nút theo trạng thái âm nhạc
  function updateButtonIcon() {
    if (backgroundMusic.paused) {
      toggleMusicButton.textContent = "🔇"; // Biểu tượng khi tắt âm
    } else {
      toggleMusicButton.textContent = "🔊"; // Biểu tượng khi bật âm
    }
  }

  // Kiểm tra trạng thái nhạc trong localStorage
  if (localStorage.getItem("musicEnabled") === "true") {
    backgroundMusic.play(); // Phát nhạc nếu đã bật
  } else {
    backgroundMusic.pause(); // Dừng nhạc nếu chưa bật
  }
  updateButtonIcon(); // Cập nhật biểu tượng nút

  // Thêm sự kiện để bật/tắt nhạc khi nhấn nút
  toggleMusicButton.addEventListener("click", function () {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
      localStorage.setItem("musicEnabled", "true"); // Lưu trạng thái nhạc
    } else {
      backgroundMusic.pause();
      localStorage.setItem("musicEnabled", "false"); // Cập nhật trạng thái nhạc
    }
    updateButtonIcon(); // Cập nhật biểu tượng nút
  });

  // Thêm sự kiện để hiển thị lời chúc khi nhấn nút lá thư
  letterButton.addEventListener("click", function () {
    // Ẩn nút lá thư
    letterButton.style.display = "none";

    // Hiển thị lời chúc với hiệu ứng
    wishMessageContainer.style.display = "block"; // Hiển thị lời chúc

    // Tạo hiệu ứng xuất hiện
    wishMessageContainer.classList.add("show"); // Thêm lớp để áp dụng hiệu ứng

    // Loại bỏ hiệu ứng sau một khoảng thời gian
    setTimeout(function () {
      wishMessageContainer.classList.remove("show");
    }, 15000); // Hiển thị trong 15 giây
  });
});
