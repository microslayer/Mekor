var testCases = {
	// support "ד״ב בראשית"
	// write tests for errors 
	"In this week's Megilas Rus (4:23) it says.": new TanachSource(36, 4, 23),
	"This can be found in Beraishis 34:3": new TanachSource(1, 34, 3),
	"This can be found in בראשית 34:3": new TanachSource(1, 34, 3),
	"This can be found in Genesis 5 34.": new TanachSource(1, 5, 34),
	"This can be found in Bereishis 5 34.": new TanachSource(1, 5, 34),
	"This can be found in 5:34 בראשית": new TanachSource(1, 5, 34),
	"This can be found in 5-23 Genesis.": new TanachSource(1, 5, 23)
};

var testCasesErrors = {
	"This can be found in 5-23 Gesis.": new TanachSource(1, 5, 23)
};

function runTests() {
	for (tCase1 in testCases) {
		var test = testForSource(tCase1).toString();

		var expected = testCases[tCase1].toString();

		if (test != expected) {
			console.log("test failed\ntest      " + tCase1 + "\nexpected ", expected + "\nresult\t ", test);
		}
	};

	for (tCase2 in testCasesErrors) {
		try {
			testForSource(tCase2);
		} catch (err) {
			return;
		}

		console.log("test failed: no error thrown by "+tCase2); 
	}
}

(function() {

	//runTests();

})();