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

    newSource = false; 

    if (selectedText) {
        var source = testForSource(selectedText);

        if (source) {

            newSource = true;
            sourceText = "";
            currTanachObj = source; 

            var data = Tanach.getBookFromNum(source.book) + '.' + source.chapter + '.' + source.verse;

            sourceText = source.toString();

            // hebrew
            $.ajax({
                url: 'https://www.sefaria.org/api/texts/' + data + '?commentary=0&context=0&pad=0',
                dataType: 'text',
                crossDomain: true,
                xhrFields: {
                    withCredentials: true
                },
                success: function(json) {        
                    json = JSON.parse(json); 
                    englishText = json.text ? json.text : 'Error';
                    hebrewText = json.he ? json.he : 'Error'; 
                    printText(evt);
                }, 
                error: function(err) {
                    console.error(JSON.stringify(err, null, 2)); 
                }
            });
        } 
        else /* not a source */ {
            // fade out if highlight was not on the popup 
            if ($(evt.target).parents("#mekor_ext_popup").length == 0) 
                hidePopup()
        }
    }
}

function printText(evt) {
    if (newSource && sourceText) {  
        $("#verse_source").text(sourceText); 
        $("#verse_eng").html(englishText); 
        $("#verse_heb").html(hebrewText); 
        newSource = false;

        s = window.getSelection().getRangeAt(0).getBoundingClientRect(); 
        
        $(popup).css({top: evt.pageY, left: evt.pageX, position:'absolute' }).fadeIn(100); 
        $(popup).find('#close').attr('display', 'flex'); 
        $(popup).find('#f_context a').attr('href', getContextLink(currTanachObj)); 
    }
}