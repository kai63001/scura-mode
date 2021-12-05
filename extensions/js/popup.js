window.onload = function () {
  document.getElementById("onoff").onclick = function () {
    // document.getElementsByTagName("body")[0].classList.add("white");
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { message: "start" });
    });
  };
};
