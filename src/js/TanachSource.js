function TanachSource(book, chapter, verse) {
	this.book = book; // book is a an enum number 
	this.chapter = chapter;
	this.verse = verse;
}

TanachSource.prototype = {
	constructor: TanachSource,

	invalidSource: false,

	toString: function() {
		var str = "";

		// valid source must have book 
		if (!this.book)
			throw new Error("Invalid book");

		str += Tanach.getBookFromNum(this.book);

		if (this.chapter)
			str += (" " + this.chapter);

		if (this.verse)
			str += (":" + this.verse);

		return str;
	},

	equals: function(obj) {
		return obj.book == this.book &&
			obj.chapter == this.chapter &&
			obj.verse == this.verse;
	}
}