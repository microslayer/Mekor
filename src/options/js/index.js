const ACTIVE_VERSION_CLASS = "active"

onDocumentReady(function() {
  const chromeStorage = new ChromeStorage()
  chromeStorage.printContentsOnLoop()
  loadLanguagesAndVersions(chromeStorage)
})

function loadLanguagesAndVersions(chromeStorage) {
  const VERSIONS_URL = "https://www.sefaria.org/api/texts/versions/Genesis.1"
  const versions = fetchVersions(VERSIONS_URL)
  chromeStorage.getFromStorageAsync("languageVersions")
    .then(obj => {
      const activeVersions = obj["languageVersions"] ? obj["languageVersions"][0] : {}
      const languagesHtml = getLanguagesHtml(versions, activeVersions)
      showLanguages(languagesHtml)
      initalizeLanguageActiveEventListener(chromeStorage)
    })
}

function sortByLanguages(versionJson) {
  const bracket_contents_no_brackets = /(?<=\[).+?(?=\])/
  let languageToVersionArrayMap = { 'he' : [] }

  versionJson.forEach(version => {
    const language = version.versionTitle.match(bracket_contents_no_brackets) || version.language
    const versionFormatted = {
      notes:  version.versionNotes, 
      source: version.versionSource, 
      title:  version.versionTitle.replace(/\[[^\]]*\]/, "")
    }

    if (languageToVersionArrayMap[language]) {
      languageToVersionArrayMap[language].push(versionFormatted)
    } else {
      languageToVersionArrayMap[language] = [ versionFormatted ]
    }
  })

  return languageToVersionArrayMap
}

function getLanguagesHtml(versionsJson, activeVersions) {
  const languageToVersionArrayMap = sortByLanguages(versionsJson)
  let stripHtmlRegex = /(<([^>]+)>)/ig
  let languagesHtml = ""

  for (const [language, versions] of Object.entries(languageToVersionArrayMap)) {
    const languageFullName = languageCodes[language] || language
    const nativeLanguageForm = nativeLanguageForms[languageFullName]
    const nativeLanguageText = nativeLanguageForm ? " " + nativeLanguageForm : ""

    languagesHtml += `<h2 class="language-header-text">${languageFullName}
                        <span class="language-native">${nativeLanguageText}</span>
                      </h2>`
    languagesHtml += `<div class="list-group">`
    versions.forEach(version => {

      const activeClass = !isEmptyObject(activeVersions) && activeVersions.includes(version.title) ? 
                                                                  ACTIVE_VERSION_CLASS : "" 
      // TODO: escape all output in case of html 
      languagesHtml += 
       `<a class="language-version list-group-item ${activeClass}">
          <h4 class="list-group-item-heading" data-version-title="true">${version.title}</h4>
          <p class="list-group-item-text">${version.notes.replace(stripHtmlRegex, "")}
            <small>Source</small>
          </p>
        </a>`
    })
    
    languagesHtml += `</div>` 
  }

  return languagesHtml
}

function fetchVersions(url) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", url, false);
  xmlHttp.send(null);
  return JSON.parse(xmlHttp.responseText);
}

function initalizeLanguageActiveEventListener(chromeStorage) {
  const LANGUAGE_VERSION_CONTAINER_CLASS = "language-version"
  const languageElements = document.getElementsByClassName(LANGUAGE_VERSION_CONTAINER_CLASS)
  Array.from(languageElements).forEach(elem => 
                initializeLanguageElementClick(chromeStorage, elem, LANGUAGE_VERSION_CONTAINER_CLASS))
}

function initializeLanguageElementClick(chromeStorage, elem, containerClass) {
  elem.addEventListener("click", function(e) {
    const containerElm = findAncestor(elem, containerClass)
    const addLanguageVersion = containerElm.className.indexOf(ACTIVE_VERSION_CLASS) == -1; 
    const versionTitle = containerElm.querySelector('[data-version-title]').innerText

    if (addLanguageVersion) {
      chromeStorage.addVersionToStorage(versionTitle)
    } else {
      chromeStorage.removeVersionFromStorage(versionTitle)
    }

    toggleActiveStatus(containerElm, addLanguageVersion) 
  })
}

function toggleActiveStatus(elem, shouldBecomeActive) {
  if (shouldBecomeActive) {
    elem.className += (" " + ACTIVE_VERSION_CLASS)
  } else {
    elem.className = elem.className.replace(ACTIVE_VERSION_CLASS, "")
  }
}

function showLanguages(html) {
  document.querySelector("#languagesContainer").innerHTML = html; 
  document.querySelector("#loadingLanguages").remove() 
}

function isEmptyObject(obj) {
  return Object.entries(obj).length === 0
}

/*
 * Utility function that finds the ancestor of a node with a given class
 */  
function findAncestor(el, cls) {
    while (!el.classList.contains(cls) && (el = el.parentElement));
    return el;
}

/*
 * Setup function
 */  
function onDocumentReady(fn) {
  if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(fn, 1); 
  } else {
    document.addEventListener("DOMContentLoaded", fn); 
  }
}
