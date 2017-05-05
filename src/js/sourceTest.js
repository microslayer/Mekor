function testForSource(text) {
    var arr = text.toLowerCase().split(/[: ,;"'.()–-]/).filter(Boolean);

    if (!allSeferNamesRegex.test(text))
    {
        return null; 
    }

    // will always match first part of tanach in selection, no matter the order
    for (key of Object.keys(keysArr)) {
        var regexObj = new RegExp(keysArr[key], "i");

        // optimize 
        if (regexObj.test(text)) {

            for (var i = 0; i < arr.length; i++) {
                if (regexObj.test(arr[i])) {

                    var forwardsMatch = false,
                        backwardsMatch = false;

                    var sefer, perek, pasuk;

                    if (!isNaN(arr[i + 1]) && !isNaN(arr[i + 2])) {
                        forwardsMatch = true;
                        sefer = key;
                        perek = parseInt(arr[i + 1]);
                        pasuk = parseInt(arr[i + 2]);
                    } else if (!isNaN(arr[i - 1]) && !isNaN(arr[i - 2])) {
                        backwardsMatch = true;
                        sefer = key;
                        perek = parseInt(arr[i - 2]);
                        pasuk = parseInt(arr[i - 1]);
                    }

                    if (forwardsMatch || backwardsMatch) {
                        return createNewSource(sefer, perek, pasuk);
                    }
                }
            }
        }
    }
}

function createNewSource(sefer, perek, pasuk) {
    var seferNum = Tanach.getBookNum(sefer);
    return new TanachSource(seferNum, perek, pasuk);
}