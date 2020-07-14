document.addEventListener("DOMContentLoaded", function(event) { 
  	selectText("selectText")
  	setTimeout(function(){ 
	  	let keyupEvent = new Event('keyup');
		Array.from(document.getElementById('selectText')).forEach(
		  input => input.dispatchEvent(keyupEvent)
		)
	}, 1000);
})	

function selectText(node) {
	node = document.getElementById(node)

    if (document.body.createTextRange) {
        const range = document.body.createTextRange();
        range.moveToElementText(node);
        range.select();
    } else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
    } else {
        console.warn("Could not select text in node: Unsupported browser.");
    }
}

