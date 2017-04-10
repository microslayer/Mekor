(function() {
	// var popup = document.createElement("div");
	// popup.setAttribute("id", "mekorTorah");
	// var path = chrome.runtime.getURL('/page_popup.html')
	// popup.innerHTML = loadPage(path);

	// // popup.style.display = "none"; 
	// popup.style.height = "200px"; 
	// popup.style.width = "200px"; 

	// document.body.appendChild(popup); 
	// console.log("Popup loaded"); 
})();

function loadPage(href) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", href, true);
	xmlhttp.send();
	return xmlhttp.responseText;
}

document.onmouseup = onTextHighlight;
document.onkeyup = onTextHighlight;