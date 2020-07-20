var popup; 

$(document).ready(function() { 
	document.onmouseup = onTextHighlight;
	document.onkeyup = onTextHighlight;

	// addCSS('global_css/page_popup.css')

	popup = document.createElement("div") 
	popup.id = 'mekor_extension_popup' 
	popup.style.display = 'none'
	popup.innerHTML = `<div id="mekor_ext_popup">
			<div>	
				<h3 id="verse_source"></h3>
				<span id="close"></span>
			</div>
			<div id="verse_heb" class="verse txt_rtl"></div> 
			<div id="verse_eng" class="verse"></div>
			<div id="MTSfooter">
				<span id="f_options" class="hover-underline">
					<a target="_blank" href="./options/options.html">
						SELECT TRANSLATION
					</a>
				</span> 
				<span id="f_context" class="hover-underline">
					<a href="" target="_blank">SEE IN CONTEXT &rsaquo;&rsaquo;</a>
				</span>
			</div>
		</div>` 

	document.body.appendChild(popup);

	$('#mekor_ext_popup #close').click(hidePopup)
}); 

function hidePopup() {
	$("#mekor_extension_popup").hide();
}