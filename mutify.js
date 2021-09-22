const observer = new IntersectionObserver(
  (entries, self) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.intersectionRatio > 0) {
        // ads visible mute
        mute(true);
      } else {
        // ads gone unmute
        mute(false);
      }
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  }
);

observer.observe(
  document.querySelector('[data-testid="CoverSlotExpanded__container"]')
);

function mute(shouldMute) {
  const isMuted =
    document
      .getElementsByClassName("volume-bar__icon-button")[0]
      .getAttribute("aria-label") === "Unmute";
  if ((shouldMute && !isMuted) || (!shouldMute && isMuted)) {
    document.getElementsByClassName("volume-bar__icon-button")[0].click();
  }
}
