const head =
  document.documentElement || document.head || document.querySelector("head");
let onOrOff = true;
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "start") {
    turnOfforOn();
  }
});
const nowUrl = window.location.hostname;

const customSite = (site) => {
  const siteList = {
    "wikipedia.org": "wikipedia",
    "stackoverflow": "stackoverflow",
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
  } else {
    main();
    onOrOff = true;
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

const main = () => {
  linkCreate(customSite(nowUrl));
};

main();
