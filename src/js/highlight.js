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
                dataType: 'text',
                data: data + "&v=" + "bhs",
                success: function(json) {                    
                    json = JSON.parse(json.substr(1, json.length-3)); 
                    hebrewText = json.book[0].chapter[source.verse].verse;
                    printText();
                }, 
                error: function(err) {
                    console.error(JSON.stringify(err, null, 2)); 
                }
            });

            // english 
            $.ajax({
                url: 'http://getbible.net/json',
                dataType: 'text',
                data: data,
                success: function(json) {
                    json = JSON.parse(json.substr(1, json.length-3)); 
                    englishText = json.book[0].chapter[source.verse].verse;
                    printText();
                }, 
                error: function(err) {
                    console.error(err); 
                }
            });
        }
    }
}

function printText() {
    if (newSource && sourceText && englishText && hebrewText) {    
        console.log(englishText, hebrewText); 

        $("#verse_source").text(sourceText).fadeIn(500); 
        $("#verse_eng").text(englishText).fadeIn(500); 
        $("#verse_heb").text(hebrewText).fadeIn(500); 
        newSource = false;
    }

        // var r=window.getSelection().getRangeAt(0).getBoundingClientRect();
        // var relative=document.body.parentNode.getBoundingClientRect();
    // ele.style.top =(r.bottom -relative.top)+'px';//this will place ele below the selection
    // ele.style.right=-(r.right-relative.right)+'px';//this will align the right edges together
}

function _openInContext() 
{
    openInContext(currTanachObj); 
}

document.onmouseup = onTextHighlight;
document.onkeyup = onTextHighlight;