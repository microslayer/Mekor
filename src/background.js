// This page is called 

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({lang: 'bi'}, function() {
    console.log("The language is bi.");
  });

  chrome.storage.sync.set({version: 'bi'}, function() {
    console.log("The language is bi.");
  });
});
