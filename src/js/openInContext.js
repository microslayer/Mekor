var chabadStartPages = {
   "Genesis"      : 8165, 
   "Exodus"       : 9862, 
   "Leviticus"    : 9902, 
   "Numbers"      : 9929, 
   "Deuteronomy"  : 9965, 
   "Joshua"       : 15785, 
   "Judges"       : 15809, 
   "Samuel1"      : 15830, 
   "Shmuel2"      : 15861, 
   "Kings1"       : 15885, 
   "Kings2"       : 11, 
   "Isaiah"       : 12, 
   "Jeremiah"     : 13, 
   "Ezekiel"      : 14, 
   "Hosea"        : 15, 
   "Joel"         : 16, 
   "Amos"         : 17, 
   "Obadiah"      : 18, 
   "Jonah"        : 19, 
   "Micah"        : 20, 
   "Nahum"        : 21, 
   "Habakkuk"     : 22, 
   "Zephaniah"    : 16200, 
   "Haggai"       : 16203, 
   "Malachi"      : 16219, 
   "Zechariah"	  : 0, 
   "Psalms"       : 26, 
   "Proverbs"     : 27, 
   "Job"          : 28, 
   "Daniel"       : 29, 
   "Ezra"         : 30, 
   "Nehemiah"     : 31, 
   "Chronicles1"  : 32, 
   "Chronicles2"  : 33, 
   "SongOfSongs"  : 34, 
   "Esther"       : 35, 
   "Ruth"         : 36, 
   "Lamentations" : 37, 
   "Ecclesiastes" : 38
}

function getContextLink(tanachObj)
{
	var chabadString = "https://www.chabad.org/library/bible_cdo/aid/"; 
	var page = chabadStartPages[Tanach.getBookFromNum(tanachObj.book)] + (tanachObj.chapter - 1); 
	var site = chabadString + page + "#" + tanachObj.verse; 

   return site; 
}