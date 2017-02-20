function getSelectedText() {
    var text = "";
    if (typeof window.getSelection != "undefined") {
        text = window.getSelection().toString();
    } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
        text = document.selection.createRange().text;
    }
    return text;
}

function onTextHighlight() {
    var selectedText = getSelectedText(); 

    if (selectedText) {
        var source = testForSource(selectedText);
        if (source)
            console.log(source.toString());
    }
}

document.onmouseup = onTextHighlight;
document.onkeyup = onTextHighlight;