// Select the node that will be observed for mutations
const targetNode = document.getElementsByClassName("i0XB7255K_4QFLJsSGc_")[0];

// Options for the observer (which mutations to observe)
const config = { childList: true };

// Callback function to execute when mutations are observed
const callback = function (mutationsList, observer) {
  // Use traditional 'for loops' for IE 11
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      console.log("A child node has been added or removed.");
      document.getElementsByClassName("volume-bar__icon-button")[0].click();
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
