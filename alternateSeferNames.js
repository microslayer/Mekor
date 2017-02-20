// add Hebrew
// add Hebrew accent
// make lowercase 
// figure out spaces 

var seferNames = {
	"Genesis": [
	"gen", "gn", 
	"בראשית", "ber(e|a)ishis", "genesis",
	"נח", "noach",
	"לך לך", "lech lecha",
	"וירא", "vay(a|e)ira",
	"חיי שרה", "chay(e|a)i sarah?", "chaya sarah",
	"תולדות", "toldo(s|t)",
	"ויצא", "vayetzei", "vayeitzei", "vayeitzei", "vayetze", "vayaitzai",
	"וישלח", "vayishlach",
	"וישב", "vayeishev", "vayaishev", "vayeshev",
	"מקץ", "mikeitz", "mikaitz", "miketz",
	"ויגש", "vayigash",
	"ויחי", "vayechi"
	],
	"Exodus": [
	"ex", "exod", 
	"שמות", "shemot", "exodus", "shemos",
	"וארא", "vaera", "vayeira",
	"בא", "bo",
	"בשלח", "beshalach", "bishalach",
	"יתרו", "yi(s|t)ro",
	"משפתים", "mishpatim",
	"תרומה", "te?rumah?", "trumah?",
	"תצוה", "t(e|i)tzaveh", "t(e|i)tzave",
	"כי תשא", "ki si(s|t)a",
	"ויקהל", "vayakel", "vayakhel",
	"פקודי", "pekud(a|e)i"
	],
	"Leviticus": [
	"lev", "lv", 
	"ויקרא", "vayikra", "leviticus", "vayikrah",
	"צו", "t(s|z)av",
	"שמיני", "shemini", "shmini",
	"תזריע", "tazriah", "tazria",
	"מצורע", "met(s|z)orah?",
	"אחרי מות", "achar(a|e)i mo(s|t)",
	"קדושים", "kedoshim",
	"אמור", "emor",
	"בהר", "behar",
	"בחוקותי", "bechuko(s|t)ai"
	],
	"Numbers": [
	"num", "nm", 
	"במדבר", "numbers", "bamidbar",
	"נשא", "nass?o",
	"בהעלותך", "b(a|e)haa?lo(t|s)cha",
	"שלח", "she?lach",
	"קרח", "korach",
	"חקת", "chuka(t|s)",
	"בלק", "balac?k",
	"פנחס", "pinchas",
	"מטות", "mato(t|s)",
	"מסעי", "maa?s(a|e)i"
	],
	"Deuteronomy": [
	"duet", "dt", 
	"דברים", "deuteronomy", "de?varim",
	"ואתחנן", "vae(s|t)chanan",
	"עקב", "(a|e)ikev",
	"ראה", "ree(h|e)", "reey",
	"שופטים", "shoftim",
	"כי תצא", "ki se(t|s)eih?",
	"כי תבוא", "ki (s|t)avoh?",
	"ני?צבים", "ni(t|s)avim",
	"וילך", "vay(a|e)ilech",
	"האזינו", "haazinu",
	"וזאת הברבה", "ve?zo(t|s) habe?racha", "zo(t|s) habe?racha"
	],

	"Joshua": ["josh", "jo", "יהושו?ע", "joshua", "yehoshuah?"],
	"Judges": ["judg", "jgs", "שופטים", "judges", "shoftim"], // todo fix 
	"Samuel1": [ "sam", "sm", "שמואל", "samuel", "shmuel"],
	// "Shmuel2"  : [ ], // todo fix 
	"Kings1": [ "kgs", "מלכים", "kings", "mel(a|o)chim"],
	// "Kings2"   : [ ], // todo fix 

	"Isaiah": [ "isa", "ישעיהו", "isaiah", "y(i|e)shayahu", "yeshayah?"],
	"Jeremiah": ["jer", "ירמיהו", "jeremiah?", "yirmiyahu"],
	"Ezekiel": ["ezek", "ez", "יחזקל", "ezekiel", "yechezkel"],

	"Hosea": ["hos", "הוש?יע", "hosea", "hosheah?"], // fix 
	"Joel": ["יואל", "(j|y)oel"],
	"Amos": ["אמוס", "amos"],
	"Obadiah": ["ob", "obad", "עובדיה", "o(b|v)adiah?"],
	"Jonah": [ "jon", "יונה", "(j|y)onah?"],
	"Micah": ["mic", "מיכה", "mich?ah?"], /// fix 
	"Nahum": ["nah", "נחום", "nac?hum"],
	"Habakkuk": ["hab", "חבקוק", "c?habb?akk?uk"],
	"Zephaniah": ["zeph", "צפניה", "(t|s)z?(e|i)(ph|f)aniah"], // todo fix   
	"Haggai": ["hag", "חגי", "c?hagg?ai", ],
	"Malachi": ["mal", "מלאכי", "malachi"],
	"Zechariah": ["zech", "זבריה", "z(e|a)chariah?"],

	"Psalms": ["ps", "תהילים", "t(e|i)hill?im", "psalms"],
	"Proverbs": ["prov", "משלי", "mishl(e|a)i", "proverbs"],
	"Job": ["איוב", "job", "iyov"],
	"Daniel": ["dan","דניאל", "daniel"],
	"Ezra": ["ezr" ,"עזרה", "ezra"],
	"Nehemiah": ["neh", "נחמיה", "nec?hemiah?"],
	"Chronicles1": ["chron","דברי הימים", "divr(e|a)i hayamim", "chronicles"],
	// "Chronicles2" : [ ], // todo fix   

	"SongOfSongs": ["שיר השירים", "song of songs", "shir hashirim"],
	"Esther": ["אסתר", "esther"],
	"Ruth": ["רות", "ruth?", "rus"],
	"Lamentations": ["lam","איכה", "lamentations", "(a|e)icha"],
	"Ecclesiastes": ["eccles", "eccl","קוהלת", "kohele(t|s)", "ecclesiastes"]
}

// change to seferNames
var keysArr = {};
for(var key in seferNames)  {
	keysArr[key] = seferNames[key].join("|");
}