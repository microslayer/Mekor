# Mekor
## The Torah Sources Chrome Extension 
Mekor is a Chrome Extension that shows you in-page citations of verse references in text. 

[View Mekor in the Chrome Web Store!](https://chrome.google.com/webstore/detail/mekor-torah-sources/dlbiecjfpomjlgdlgafingcdlimjhjcc)

## Local Development 

### Setup 

To get Mekor running locally, follow these directions. 

1. Clone the Mekor repository. 
```bash 
$ git clone https://github.com/microslayer/TorahSources.git
``` 

2. `cd` into the `TorahSources` repo
```bash
$ cd TorahSources 
```

3. If you do not have [Grunt](https://gruntjs.com/getting-started) and [npm](https://www.npmjs.com/get-npm) installed, install them. Then, install the local dependencies. 

```bash
$ npm install
$ grunt
```

### Testing 

Unit tests are contained in `src/js/tests.js`. To test the Chrome Extension, follow the directions [here](https://superuser.com/questions/247651/how-does-one-install-an-extension-for-chrome-browser-from-the-local-file-system). 