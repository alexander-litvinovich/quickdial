# Boilerplate for a Chrome extension built with Preact.

Scaffolding for a Chrome extension built with [Preact](https://preactjs.com).

## Getting Started
### Setup
Run `npm i` or `yarn install` to install dependencies. 

### Develop the Project
Run `npm run dev` or `yarn dev`. 

Development preview with hotreload:
http://localhost:8080/popup.html
http://localhost:8080/options.html

### Build the Project
Run `npm run build` or `yarn build`. The bundle will end up in `dist/`.

### Get the extension in Chrome for development
1. Open the Extension Management page by navigating to `chrome://extensions`.
2. Enable Developer Mode by clicking the toggle switch next to Developer mode.
3. Click the LOAD UNPACKED button and select the `dist/` directory.

## Developing
The base app component is in `src/app/popup.jsx`.

The base app component is in `src/app/options.jsx`.

Chrome extensions can be composed of many parts. This scaffolding allows you to build the _popup UI_ with Preact.

### Resources
[Preact Tutorial](https://preactjs.com/guide/v10/tutorial)

[Chrome Extension Developer Guide](https://developer.chrome.com/extensions/devguide)
