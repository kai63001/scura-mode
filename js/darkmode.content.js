const customSite = (site) => {
  const siteList = {
    "wikipedia.org": "wikipedia",
  };
  for (const [key, value] of Object.entries(siteList)) {
    if(site.indexOf(key) >= 0){
        return value;
    }
  }
  return '';
};

const main = () => {
  const nowUrl = window.location.hostname;
  console.log(customSite(nowUrl));
};

main();
