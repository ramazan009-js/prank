document.getElementById('startButton').addEventListener('click', () => {
    const video = document.getElementById('funnyVideo');
    video.hidden = false;
    video.volume = 1.0; // максимальная громкость внутри плеера
    video.play();
    // Попытка сделать видео полноэкранным
    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  });
  