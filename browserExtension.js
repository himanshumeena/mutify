javascript: (function () {
  const targetNode = document.getElementsByClassName("i0XB7255K_4QFLJsSGc_")[0];
  const config = { childList: true };

  const callback = function (mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        console.log("mutify..........");
        document.getElementsByClassName("volume-bar__icon-button")[0].click();
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
  console.log("observing...........");
})();
