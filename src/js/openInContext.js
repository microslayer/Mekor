var chabadStartPages = {
   "Genesis"      : 8165, 
   "Exodus"       : 9862, 
   "Leviticus"    : 9902, 
   "Numbers"      : 9929, 
   "Deuteronomy"  : 9965, 
   "Joshua"       : 15785, 
   "Judges"       : 15809, 
   "I_Samuel"     : 15830, 
   "ShmuelII"     : 15861, 
   "I_Kings"      : 15885, 
   "II_Kings"     : 15907, 
   "Isaiah"       : 15932, 
   "Jeremiah"     : 15998, 
   "Ezekiel"      : 16099, 
   "Hosea"        : 16155, 
   "Joel"         : 16169, 
   "Amos"         : 16173, 
   "Obadiah"      : 16182, 
   "Jonah"        : 16183, 
   "Micah"        : 16187, 
   "Nahum"        : 16194, 
   "Habakkuk"     : 16197, 
   "Zephaniah"    : 16200, 
   "Haggai"       : 16203, 
   "Malachi"      : 16219, 
   "Zechariah"	   : 16205, 
   "Psalms"       : 16222, 
   "Proverbs"     : 16372, 
   "Job"          : 16403, 
   "Daniel"       : 16484, 
   "Ezra"         : 16498, 
   "Nehemiah"     : 16508, 
   "I_Chronicles"  : 16521, 
   "II_Chronicles" : 16550, 
   "SongOfSongs"  : 16445, 
   "Esther"       : 16474, 
   "Ruth"         : 16453, 
   "Lamentations" : 16457, 
   "Ecclesiastes" : 16462
}

function getContextLink(tanachObj)
{
	var chabadString = "https://www.chabad.org/library/bible_cdo/aid/"; 
	var page = chabadStartPages[Tanach.getBookFromNum(tanachObj.book)] + (tanachObj.chapter - 1); 
	var site = chabadString + page + "#" + tanachObj.verse; 

   return site; 
}