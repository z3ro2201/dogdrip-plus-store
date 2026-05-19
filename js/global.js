document.addEventListener("DOMContentLoaded", () => {
  // 0. 현재 버전
  const currentVersion = chrome.runtime.getManifest().version;

  // 크롬 웹스토어 링크
  const storeLink =
    "https://chromewebstore.google.com/detail/dogdrip-custom-extension/lgecpekknekcdoigcnjbfncmloiaaejc?hl=ko";

  // 링크 연결될 element
  const storeLinkElement = document.getElementById("check-update-link");
  storeLinkElement.href = storeLink;

  // 버전표시할 element
  const versionTextElement = document.getElementById("ext-version");
  versionTextElement.innerText = currentVersion;
});
