function testForSource(text) {
    var arr = text.split(/[: "'.()-]/).filter(Boolean);

    for (regex of Object.keys(keysArr)) {
        var regexObj = new RegExp(keysArr[regex], "i");

        if (regexObj.test(text)) {

            for (var i = 0; i < arr.length; i++) {
                if (regexObj.test(arr[i])) {

                    var forwardsMatch = false,
                        backwardsMatch = false;

                    var sefer, perek, pasuk;

                    if (!isNaN(arr[i + 1]) && !isNaN(arr[i + 2])) {
                        forwardsMatch = true;
                        sefer = arr[i];
                        perek = parseInt(arr[i + 1]);
                        pasuk = parseInt(arr[i + 2]);
                    } else if (!isNaN(arr[i - 1]) && !isNaN(arr[i - 2])) {
                        backwardsMatch = true;
                        sefer = arr[i];
                        perek = parseInt(arr[i - 2]);
                        pasuk = parseInt(arr[i - 1]);
                    }

                    if (forwardsMatch || backwardsMatch) {
                        // todo fix, check where regex maps to 
                        var regexStr = regexObj.toString().slice(1).slice(0, -2);

                        for (reg in seferNames) {
                            if (seferNames[reg].join("|") == regexStr)
                                sefer = reg;
                        }

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