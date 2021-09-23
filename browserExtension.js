javascript: (function () {
  const targetNode = document.querySelector(
    "[data-testid='control-button-skip-forward']"
  );
  const config = { attributes: true };

  const callback = function (mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.type === "attributes") {
        console.log("mutify..........");
        document.getElementsByClassName("volume-bar__icon-button")[0].click();
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
  console.log("observing...........");
})();
