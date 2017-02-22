// All books that have their own chapter system 
var TanachKeyName = {
   "Genesis"      : 1, 
   "Exodus"       : 2, 
   "Leviticus"    : 3, 
   "Numbers"      : 4, 
   "Deuteronomy"  : 5, 
   "Joshua"       : 6, 
   "Judges"       : 7, 
   "Samuel1"      : 8, 
   "Shmuel2"      : 9, 
   "Kings1"       : 10, 
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
   "Zephaniah"    : 23, 
   "Haggai"       : 24, 
   "Malachi"      : 25, 
   "Zechariah"    : 39, 
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
}; 

var TanachKeyNum = createTanachKeyNum(); 

var TanachObj = {
   TanachKeyName : TanachKeyName, 
   TanachKeyNum : TanachKeyNum, 

   getBookNum : function(param) {
      if (isNaN(param)) 
      {
         return TanachKeyName[param]; 
      }
      else 
         return param; 
   }, 

   getBookFromNum : function(num)
   {
      // todo: null, isNaN checks 
      return TanachKeyNum[num]; 
   }
}

function createTanachKeyNum() {
   var TanachKeyNum = { }; 

   var TanachKeyNum = {}
   for (key in TanachKeyName)
    TanachKeyNum[TanachKeyName[key]] = key

  return TanachKeyNum; 
} 

var Tanach = Object.freeze(TanachObj); 