javascript: (function () {
  try {
    console.log("window.mutify", window.mutify);
    if (window.mutify) {
      alert("already observing......");
      return;
    }

    const nextSongBtn = document.querySelector(
      "[data-testid='control-button-skip-forward']"
    );
    console.log("Select the node that will be observed for mutations",nextSongBtn);

    const config = { attributes: true };
    console.log("Options for the observer (which mutations to observe)", config);

    console.log("Callback function to execute when mutations are observed");
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

    console.log("Create an observer instance linked to the callback function");
    const spotifyObserver = new MutationObserver(callback);

    if (nextSongBtn) {
      console.log("Start observing the target node for configured mutations");
      spotifyObserver.observe(nextSongBtn, config);
      window.mutify = true;
      console.log("observing...........");

      const isNextSongBtnDisabled = nextSongBtn.hasAttribute("disabled");
      const volumeIcon = document.getElementsByClassName(
        "volume-bar__icon-button"
      )[0];

      let isMuted = volumeIcon.getAttribute("aria-label") === "Unmute";
      if (isNextSongBtnDisabled && !isMuted) {
        console.log("intialize mute audio..........");
        volumeIcon.click();
      }
      alert("Mutify started !!");
    }
  } catch (err) {
    console.log("oopss....", err);
  }
})();
