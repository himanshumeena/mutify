javascript: (function () {
  try {
  const nextSongBtn = document.querySelector(
    "[data-testid='control-button-skip-forward']"
  );
  const config = { attributes: true };

  const callback = function (mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.type === "attributes") {
        isNextSongBtnDisabled = nextSongBtn.hasAttribute("disabled");
        const volumeIcon = document.getElementsByClassName(
          "volume-bar__icon-button"
        )[0];
        let isMuted = volumeIcon.getAttribute("title") === "Unmute";

        if (isNextSongBtnDisabled && !isMuted) {
          // ads playing, next song btn disabled => mute audio
          console.log("mute audio..........");
          volumeIcon.click();
        } else if (!isNextSongBtnDisabled && isMuted) {
          // ads gone, next song btn enabled => unmute audio
          console.log("unmute audio..........");
          volumeIcon.click();
        }
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(nextSongBtn, config);
  console.log("observing...........");
  } catch (err) {
    console.log("oopss....", err);
  }
})();
