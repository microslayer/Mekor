function getSelectedText() {
    var text = "";
    if (typeof window.getSelection != "undefined") {
        text = window.getSelection().toString();
    } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
        text = document.selection.createRange().text;
    }
    return text;
}

var sourceText, englishText, hebrewText, newSource;

function onTextHighlight() {
    var selectedText = getSelectedText();

    if (selectedText) {
        var source = testForSource(selectedText);

        if (source) {
            newSource = true;
            sourceText = "", englishText = "", hebrewText = "";

            var data = 'p=' + Tanach.getBookFromNum(source.book) + ' ' + source.chapter + ':' + source.verse;

            sourceText = source.toString();

            // hebrew
            $.ajax({
                url: 'http://getbible.net/json',
                dataType: 'jsonp',
                data: data + "&v=" + "bhs",
                jsonp: 'getbible',
                success: function(json) {
                    hebrewText = json.book[0].chapter[source.verse].verse;
                    printText();
                }
            });

            // english 
            $.ajax({
                url: 'http://getbible.net/json',
                dataType: 'jsonp',
                data: data,
                jsonp: 'getbible',
                success: function(json) {
                    englishText = json.book[0].chapter[source.verse].verse;
                    printText();
                }
            });
        }
    }
}

function printText() {
    if (newSource && sourceText && englishText && hebrewText) {        
        document.getElementById("verse_source").textContent = sourceText; 
        document.getElementById("verse_eng").textContent = englishText; 
        document.getElementById("verse_heb").textContent = hebrewText; 
        newSource = false;
    }
}


document.onmouseup = onTextHighlight;
document.onkeyup = onTextHighlight;