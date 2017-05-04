var popup; 

$(document).ready(function() { 
	document.onmouseup = onTextHighlight;
	document.onkeyup = onTextHighlight;

	popup = document.createElement("div"); 
	popup.id = 'mekor_extension_popup'; 
	popup.innerHTML = '<div id="mekor_ext_popup"><div><h3 id="verse_source"></h3><span id="close"' + 
	' onclick="this.parentNode.parentNode.parentNode.style.display=\'none\';"></span></div>' + 
	'<div id="verse_heb" class="verse txt_rtl"></div>' + 
	'<div id="verse_eng" class="verse"></div>' + 
	'<div id="MTSfooter">' + 
	'<span id="f_options" class="hover-underline">OPTIONS</span>' + 
	'<span id="f_context" class="hover-underline"><a href="" target="_blank">' + 
	'SEE IN CONTEXT &rsaquo;&rsaquo;</a></span>' + 
	'</div>' + 
	'</div>'; 

	popup.style.display = "none"; 

	document.body.appendChild(popup);
}); 