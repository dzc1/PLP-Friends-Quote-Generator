function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ampm = "";
    m = checkTime(m);

    if (h > 12) {
    	h = h - 12;
    	ampm = " PM";
    } else if (h == 12){
        h = 12;
    	ampm = " AM";
    } else if (h < 12){
        ampm = " AM";
    } else {
        ampm = "PM";
    };
  
  if(h==0) {
    h=12;
  }
    
    document.getElementById('display').innerHTML = h+":"+m+ampm;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function genQuote() {
  var randNum = Math.floor(Math.random() * 8) + 1;
  document.getElementById('quote').innerHTML = quotes[randNum];
  var tweetQuote = quotes[randNum].split(' ').join('%20');
  tweetQuote = tweetQuote.split('<br>').join('');

}

//quote array
var quotes = ["Blank", "\"Bolos y playa, nunca falla\"<br>-  Jose Ramon Diaz", "\"Mientras mas boleta, mas caleta\"<br> - Luis `El Mara´ Rodriguez", "\"Escribe tu propia historia.\"<br>- Erik Marquis", "\"Marico estoy curdo.\"<br>- Alvaro Gonzalez", "\"Blon???\"<br>- Paul Belandria", "\"Arbol que nace torcido, me lo fumo todo\"<br>- Jorge Ramirez", "\"No vale, que ladilla me da esto.\"<br>- Federico Mulieri", "\"hmmmmmm marico\"<br>- Sebastian Belandria",];

//date
function startDate() {
  var d = new Date();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  document.getElementById("date").innerHTML = days[d.getDay()]+" | "+[d.getMonth()+1]+"/"+d.getDate()+"/"+d.getFullYear();
}



