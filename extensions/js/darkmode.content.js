const head =
  document.documentElement || document.head || document.querySelector("head");
let onOrOff = true;
const nowUrl = window.location.hostname;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "start") {
    turnOfforOn();
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { message: onOrOff });
    });
  }
});

const customSite = (site) => {
  const siteList = {
    "wikipedia.org": "wikipedia",
    "stackoverflow.com": "stackoverflow",
  };
  for (const [key, value] of Object.entries(siteList)) {
    if (site.indexOf(key) >= 0) {
      return value;
    }
  }
  return "global";
};

const turnOfforOn = () => {
  const link = document.getElementById(customSite(nowUrl) + "-custom-css");
  if (onOrOff == true) {
    head.removeChild(link);
    onOrOff = false;
    chrome.storage.sync.set({ onOrOff: false }, function () {
      console.log("Value is set to " + false);
    });
  } else {
    main();
    onOrOff = true;
    chrome.storage.sync.set({ onOrOff: true }, function () {
      console.log("Value is set to " + true);
    });
  }
};

const linkCreate = (path) => {
  var link = document.createElement("link"),
    href = chrome.runtime.getURL("css/" + path + ".css");
  link.setAttribute("type", "text/css");
  link.setAttribute("id", path + "-custom-css");
  link.setAttribute("class", "dmn-custom-append-data");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("href", href);
  if (head) {
    head.appendChild(link);
  }
};

const main = async () => {
  await chrome.storage.sync.get(["onOrOff"], function (result) {
    if (result.onOrOff == undefined) {
      onOrOff = true;
    } else {
      onOrOff = result.onOrOff;
    }
    if (onOrOff) {
      linkCreate(customSite(nowUrl));
    }
  });
};


main();
