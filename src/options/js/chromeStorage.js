class ChromeStorage {
  constructor() {
    this.LANGUAGE_VERSION_KEY = "languageVersions";
    this.VERSIONS = [] 
  }

  getSavedVersions(callback) {
    this.getFromStorageAsync(this.LANGUAGE_VERSION_KEY).then(storageObj => {
      this.setVersions(storageObj) 
      if (callback) {
        this.callback(this.VERSIONS)
      }
    })
  }

  setVersions(storageObj) {
    if (this.VERSIONS.length == 0 && storageObj[this.LANGUAGE_VERSION_KEY]) {
      this.VERSIONS = storageObj[this.LANGUAGE_VERSION_KEY][0]
    }
  }

  printContentsOnLoop() {
    this.getSavedVersions()
    setTimeout(this.printContentsOnLoop.bind(this), 2000);
  }

  getFromStorageAsync(key) { 
    return new Promise((resolve, reject) => 
                  chrome.storage.sync.get(key, result => resolve(result)))
  }

  resetStorage() {
    this.VERSIONS = [] 
    this.saveVersionsToChromeStorage()
  }

  addVersionToStorage(version) {
    if (this.VERSIONS.indexOf(version) == -1) {
      this.VERSIONS.push(version) 
    }
    this.saveVersionsToChromeStorage()
  }

  removeVersionFromStorage(version) {
    this.VERSIONS = this.VERSIONS.filter(v => v != version)
    this.saveVersionsToChromeStorage()
  }

  saveVersionsToChromeStorage() {
    chrome.storage.sync.set({ "languageVersions" : [ this.VERSIONS ] })
      // function() {
          // Update status to let user know options were saved.
          //   var status = document.getElementById('status');
          //   status.textContent = 'Options saved.';
          //   setTimeout(function() {
          //     status.textContent = '';
          //   }, 750);
          // });
          // console.log("Saved! ")
      // }
  }
}