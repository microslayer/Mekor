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

function onTextHighlight(evt) {
    var selectedText = getSelectedText();

    if (selectedText) {
        var source = testForSource(selectedText);

        if (source) {
            newSource = true;
            sourceText = "";
            currTanachObj = source; 

            var data = Tanach.getBookFromNum(source.book) + ':' + source.chapter + ':' + source.verse;

            sourceText = source.toString();

            // hebrew
            $.ajax({
                url: 'https://www.sefaria.org/api/texts/' + data + '?commentary=0&context=0&pad=0',
                dataType: 'text',
                success: function(json) {                    
                    json = JSON.parse(json); 
                    englishText = json.text;
                    hebrewText = json.he; 
                    printText(evt);
                }, 
                error: function(err) {
                    console.error(JSON.stringify(err, null, 2)); 
                }
            });
        }
    }
}

function printText(evt) {
    if (newSource && sourceText) {  
        $("#verse_source").text(sourceText); 
        $("#verse_eng").text(englishText); 
        $("#verse_heb").text(hebrewText); 
        newSource = false;

        s = window.getSelection().getRangeAt(0).getBoundingClientRect(); 
        
        $(popup).css({top: evt.pageY, left: evt.pageX, position:'absolute' }).fadeIn(300); 
        $(popup).find('#close').attr('display', 'flex'); 
        $(popup).find('#f_context a').attr('href', getContextLink(currTanachObj)); 
    }
}