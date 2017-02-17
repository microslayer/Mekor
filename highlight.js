function getSelectedText() {
    var text = "";
    if (typeof window.getSelection != "undefined") {
        text = window.getSelection().toString();
    } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
        text = document.selection.createRange().text;
    }
    return text;
}

function highlightText() {
    var selectedText = getSelectedText();
    if (selectedText) {
        testSelectedText(selectedText); 
    }
}

function testSelectedText(selectedText) 
{
    // testing 
    return new TanachSource(Tanach.Ruth, 1, 1); 
}

document.onmouseup = highlightText;
document.onkeyup = highlightText;

