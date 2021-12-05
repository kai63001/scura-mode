let onOrOff = true;

window.onload = function () {
  document.getElementById("onoff").onclick = function () {
    if (onOrOff) {
      document.getElementsByTagName("body")[0].classList.add("white");
      onOrOff = false;
    } else {
      document.getElementsByTagName("body")[0].classList.remove("white");
      onOrOff = true;
    }
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { message: "start" });
    });
  };
};
