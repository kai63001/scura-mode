const backlist = {
  "youtube.org": "youtube",
  "google.com": "google",
};

const mainBackground = () => {
  chrome.storage.sync.get(["onOrOff"], function (result) {
    if (result.onOrOff == undefined) {
      onOrOff = true;
    } else {
      onOrOff = result.onOrOff;
    }
    console.log(result);
  });
};

mainBackground();
