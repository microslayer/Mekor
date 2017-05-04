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
            sourceText = "", englishText = "", hebrewText = "";
            currTanachObj = source; 

            var data = 'p=' + Tanach.getBookFromNum(source.book) + ' ' + source.chapter + ':' + source.verse;

            sourceText = source.toString();

            // hebrew
            $.ajax({
                url: 'https://getbible.net/json',
                dataType: 'text',
                data: data + "&v=" + "bhs",
                success: function(json) {                    
                    json = JSON.parse(json.substr(1, json.length-3)); 
                    hebrewText = json.book[0].chapter[source.verse].verse;
                    printText(evt);
                }, 
                error: function(err) {
                    console.error(JSON.stringify(err, null, 2)); 
                }
            });

            // english 
            $.ajax({
                url: 'https://getbible.net/json',
                dataType: 'text',
                data: data,
                success: function(json) {
                    json = JSON.parse(json.substr(1, json.length-3)); 
                    englishText = json.book[0].chapter[source.verse].verse;
                    printText(evt);
                }, 
                error: function(err) {
                    console.error(err); 
                }
            });
        }
    }
}

function printText(evt) {
    if (newSource && sourceText && englishText && hebrewText) {  
        $("#verse_source").text(sourceText); 
        $("#verse_eng").text(englishText); 
        $("#verse_heb").text(hebrewText); 
        newSource = false;

        // console.log(evt); 

        s = window.getSelection().getRangeAt(0).getBoundingClientRect(); 
        // console.log(evt, s); 
        
        $(popup).css({top: evt.pageY, left: evt.pageX, position:'absolute' }).fadeIn(300);          
        $(popup).find('#f_context a').attr('href', getContextLink(currTanachObj)); 
    }
}