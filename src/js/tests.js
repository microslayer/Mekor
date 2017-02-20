var testCases = {
	// support "ד״ב בראשית"
	// write tests for errors 
	"In this week's Megilas Rus (4:23) it says.": new TanachSource(36, 4, 23),
	"This can be found in Beraishis 34:3": new TanachSource(1, 34, 3),
	"This can be found in בראשית 34:3": new TanachSource(1, 34, 3),
	"This can be found in Genesis 5 34.": new TanachSource(1, 5, 34),
	"This can be found in Bereishis 5 34.": new TanachSource(1, 5, 34),
	"This can be found in 5:34 באשית": new TanachSource(1, 5, 34),
	"This can be found in 5-23 Genesis.": new TanachSource(1, 5, 23)
};


function runTests() {
	for (tCase in testCases) {
		var test = testForSource(tCase).toString();

		var expected = testCases[tCase].toString();

		if (test != expected) {
			console.log("test failed\ntest      " + tCase
			 + "\nexpected ", expected 
			 + "\nresult\t ", test);
		}
	}
}

(function() {

	runTests(); 

})();