/*
  Description of Manifest format for Chrome extensions
  https://developer.chrome.com/extensions/manifest
*/

const manifestSettings = {
  name: process.env.npm_package_extensionName,
  description: process.env.npm_package_description,
  author: process.env.npm_package_author_name,
  version: process.env.npm_package_version,

  icons: {
    "16": "icons/16.png",
    "32": "icons/32.png",
    "48": "icons/48.png",
    "128": "icons/128.png",
  },

  browser_action: {
    default_title: "My Chrome Extension boilerplate",
    default_popup: "popup.html",
    default_icon: "icons/32alternate.png",
  },
  permissions: ["storage"],
  options_page: "options.html",
  // devtools_page: "devtools.html",
  manifest_version: 2,
};

module.exports = manifestSettings;
