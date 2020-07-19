const storage = {};

storage.set = (attr) => {
  return new Promise((resolve) => {
    chrome.storage.sync.set(attr, resolve);
  });
};

storage.get = (attr) => {
  return new Promise((resolve) => {
    chrome.storage.sync.get(attr, resolve);
  });
};

export { storage };
