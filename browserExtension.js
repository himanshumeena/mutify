javascript: (function () {
  console.log("dfdf");
  try {
    console.log("window.mutify", window.mutify);
    if (window.mutify) {
      alert("already observing......");
      return;
    }
    const nextSongBtn = document.querySelector(
      "[data-testid='control-button-skip-forward']"
    );
    const config = { attributes: true };

    const callback = function (mutationsList) {
      for (const mutation of mutationsList) {
        if (mutation.type === "attributes") {
          const isNextSongBtnDisabled = nextSongBtn.hasAttribute("disabled");
          const volumeIcon = document.getElementsByClassName(
            "volume-bar__icon-button"
          )[0];
          let isMuted = volumeIcon.getAttribute("aria-label") === "Unmute";

          console.log(
            `isNextSongBtnDisabled`,
            nextSongBtn,
            isNextSongBtnDisabled
          );
          console.log(`isMuted`, volumeIcon, isMuted);
          if (isNextSongBtnDisabled && !isMuted) {
            console.log("mute audio..........");
            volumeIcon.click();
          } else if (!isNextSongBtnDisabled && isMuted) {
            console.log("unmute audio..........");
            volumeIcon.click();
          }
        }
      }
    };

    const spotifyObserver = new MutationObserver(callback);
    if (nextSongBtn) {
      spotifyObserver.observe(nextSongBtn, config);
      window.mutify = true;
      console.log("observing...........");
      alert("Mutify started !!");
    }
  } catch (err) {
    console.log("oopss....", err);
  }
})();
