chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message == "start") {
    // windowReload(window.location.hostname);
    window.location.reload();
  }
});

const backlist = {
  "youtube.com": "youtube",
  "google.com": "google",
};

const backgroundCheckSite = (site) => {
  for (const [key, value] of Object.entries(backlist)) {
    if (site.indexOf(key) >= 0) {
      console.log("gogogo")
      goToDarkMode(value);
      return value;
    }
  }
};

const windowReload = (site) => {
  for (const [key, value] of Object.entries(backlist)) {
    if (site.indexOf(key) >= 0) {
      window.location.reload();
      return;
    }
  }
};

const goToDarkMode = (value) => {
  chrome.storage.sync.get(["youtube", "onOrOff"], function (result) {
    if (value == "youtube") {
      if (
        result.youtube == undefined &&
        (result.onOrOff == undefined || result.onOrOff == true)
      ) {
        youtubeDarkMode();
      } else if (result.youtube == false && result.onOrOff == true) {
        youtubeDarkMode();
      } else if (result.youtube == true && result.onOrOff == false) {
        youtubeLightMode();
      }
    }
  });
};

const mainBackground = () => {
  backgroundCheckSite(window.location.hostname);
};

mainBackground();

const youtubeDarkMode = () => {
  // if loged in
  if (
    getElementByXpath(
      "/html/body/ytd-app/div/div/ytd-masthead/div[3]/div[3]/div[2]/ytd-topbar-menu-button-renderer[3]/button/yt-img-shadow"
    ) != null
  ) {
    getElementByXpath(
      "/html/body/ytd-app/div/div/ytd-masthead/div[3]/div[3]/div[2]/ytd-topbar-menu-button-renderer[3]/button/yt-img-shadow"
    ).click();
    //loop for check is loaded
    const getDark = setInterval(() => {
      if (
        getElementByXpath(
          "/html/body/ytd-app/ytd-popup-container/tp-yt-iron-dropdown/div/ytd-multi-page-menu-renderer/div[3]/div[1]/yt-multi-page-menu-section-renderer[2]/div[2]/ytd-toggle-theme-compact-link-renderer"
        ) != null
      ) {
        // go to select theme
        getElementByXpath(
          "/html/body/ytd-app/ytd-popup-container/tp-yt-iron-dropdown/div/ytd-multi-page-menu-renderer/div[3]/div[1]/yt-multi-page-menu-section-renderer[2]/div[2]/ytd-toggle-theme-compact-link-renderer"
        ).click();
        clearInterval(getDark); //stop loop
        //select dark
        getElementByXpath(
          "/html/body/ytd-app/ytd-popup-container/tp-yt-iron-dropdown/div/ytd-multi-page-menu-renderer/div[4]/ytd-multi-page-menu-renderer/div[3]/div[1]/yt-multi-page-menu-section-renderer/div[2]/ytd-compact-link-renderer[3]"
        ).click();
      }
      chrome.storage.sync.set({ youtube: true }, function () {
        console.log("yotube set to " + true);
      });
    }, 500);
  } else {
    getElementByXpath(
      "/html/body/ytd-app/div/div/ytd-masthead/div[3]/div[3]/div[2]/ytd-topbar-menu-button-renderer[2]"
    ).click();
    const getDark = setInterval(() => {
      if (
        getElementByXpath(
          "/html/body/ytd-app/ytd-popup-container/tp-yt-iron-dropdown/div/ytd-multi-page-menu-renderer/div[3]/div[1]/yt-multi-page-menu-section-renderer[1]/div[2]/ytd-toggle-theme-compact-link-renderer"
        ) != null
      ) {
        // go to select theme
        getElementByXpath(
          "/html/body/ytd-app/ytd-popup-container/tp-yt-iron-dropdown/div/ytd-multi-page-menu-renderer/div[3]/div[1]/yt-multi-page-menu-section-renderer[1]/div[2]/ytd-toggle-theme-compact-link-renderer"
        ).click();
        clearInterval(getDark); //stop loop
        //select dark
        getElementByXpath(
          "/html/body/ytd-app/ytd-popup-container/tp-yt-iron-dropdown/div/ytd-multi-page-menu-renderer/div[4]/ytd-multi-page-menu-renderer/div[3]/div[1]/yt-multi-page-menu-section-renderer/div[2]/ytd-compact-link-renderer[3]"
        ).click();
      }
      chrome.storage.sync.set({ youtube: true }, function () {
        console.log("yotube set to " + true);
      });
    }, 500);
  }
};

const youtubeLightMode = () => {
  // if loged in
  if (
    getElementByXpath(
      "/html/body/ytd-app/div/div/ytd-masthead/div[3]/div[3]/div[2]/ytd-topbar-menu-button-renderer[3]/button/yt-img-shadow"
    ) != null
  ) {
    getElementByXpath(
      "/html/body/ytd-app/div/div/ytd-masthead/div[3]/div[3]/div[2]/ytd-topbar-menu-button-renderer[3]/button/yt-img-shadow"
    ).click();
    //loop for check is loaded
    const getLight = setInterval(() => {
      if (
        getElementByXpath(
          "/html/body/ytd-app/ytd-popup-container/tp-yt-iron-dropdown/div/ytd-multi-page-menu-renderer/div[3]/div[1]/yt-multi-page-menu-section-renderer[2]/div[2]/ytd-toggle-theme-compact-link-renderer"
        ) != null
      ) {
        // go to select theme
        getElementByXpath(
          "/html/body/ytd-app/ytd-popup-container/tp-yt-iron-dropdown/div/ytd-multi-page-menu-renderer/div[3]/div[1]/yt-multi-page-menu-section-renderer[2]/div[2]/ytd-toggle-theme-compact-link-renderer"
        ).click();
        clearInterval(getLight); //stop loop
        //select dark
        getElementByXpath(
          "/html/body/ytd-app/ytd-popup-container/tp-yt-iron-dropdown/div/ytd-multi-page-menu-renderer/div[4]/ytd-multi-page-menu-renderer/div[3]/div[1]/yt-multi-page-menu-section-renderer/div[2]/ytd-compact-link-renderer[4]/a"
        ).click();
      }
      chrome.storage.sync.set({ youtube: false }, function () {
        console.log("yotube set to " + false);
      });
    }, 500);
  } else {
    getElementByXpath(
      "/html/body/ytd-app/div/div/ytd-masthead/div[3]/div[3]/div[2]/ytd-topbar-menu-button-renderer[2]"
    ).click();
    const getLight = setInterval(() => {
      if (
        getElementByXpath(
          "/html/body/ytd-app/ytd-popup-container/tp-yt-iron-dropdown/div/ytd-multi-page-menu-renderer/div[3]/div[1]/yt-multi-page-menu-section-renderer[1]/div[2]/ytd-toggle-theme-compact-link-renderer"
        ) != null
      ) {
        // go to select theme
        getElementByXpath(
          "/html/body/ytd-app/ytd-popup-container/tp-yt-iron-dropdown/div/ytd-multi-page-menu-renderer/div[3]/div[1]/yt-multi-page-menu-section-renderer[1]/div[2]/ytd-toggle-theme-compact-link-renderer"
        ).click();
        clearInterval(getLight); //stop loop
        //select dark
        getElementByXpath(
          "/html/body/ytd-app/ytd-popup-container/tp-yt-iron-dropdown/div/ytd-multi-page-menu-renderer/div[4]/ytd-multi-page-menu-renderer/div[3]/div[1]/yt-multi-page-menu-section-renderer/div[2]/ytd-compact-link-renderer[4]/a"
        ).click();
      }
      chrome.storage.sync.set({ youtube: false }, function () {
        console.log("yotube set to " + false);
      });
    }, 500);
    console.log("noting login");
  }
};

function getElementByXpath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}
