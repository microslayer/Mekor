function getSelectedText() {
    var text = "";
    if (typeof window.getSelection != "undefined") {
        text = window.getSelection().toString();
    } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
        text = document.selection.createRange().text;
    }
    return text;
}

var currTanachObj; 
var sourceText, englishText, hebrewText, newSource;

function onTextHighlight() {
    var selectedText = getSelectedText();

    if (selectedText) {
        var source = testForSource(selectedText);

        if (source) {
            newSource = true;
            sourceText = "", englishText = "", hebrewText = "";
            currTanachObj = source; 

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
        $("#verse_source").text(sourceText).fadeIn(500); 
        $("#verse_eng").text(englishText).fadeIn(500); 
        $("#verse_heb").text(hebrewText).fadeIn(500); 
        newSource = false;
    }
}

function _openInContext() 
{
    openInContext(currTanachObj); 
}

document.onmouseup = onTextHighlight;
document.onkeyup = onTextHighlight;