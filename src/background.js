console.log("backgrounnd.js")

const LANGUAGE_VERSIONS_KEY = "languageVersions"; 

chrome.storage.sync.get("languageVersions" , function(e){
	console.log("in get languageVersions")
	console.log(e);
});

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({ "languageVersions" : [] }, function() {
    console.log("Set language versions to []");
  });
})