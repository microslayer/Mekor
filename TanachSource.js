function TanachSource(book, chapter, verse)
{
	this.book    = book; 
	this.chapter = chapter; 
	this.verse   = verse; 
}

TanachSource.prototype = {
	constructor : Source, 

 	toString : function() {
 		var str = ""; 

 		// valid source must have book 
 		if (!book)
 		  throw new Error("Invalid source"); 

 	    str += book; 

 	    if (chapter)
 	    	str += (" " + chapter); 

 	    if (verse) 
 	    	str += (": " + verse); 

 	    return str; 
 	}, 

 	equals : function(obj) {
 		return obj.book    == this.book && 
 			   obj.chapter == this.chapter && 
 			   obj.verse   == this.verse; 
 	}
}