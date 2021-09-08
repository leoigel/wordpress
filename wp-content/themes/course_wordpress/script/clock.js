// JavaScript Document

var t_d1 = 0;
var t_d2 = 0;
var t_h1 = 0;
var t_h2 = 0;
var t_m1 = 0;
var t_m2 = 0;
var t_s1 = 0;
var t_s2 = 0;

var t_d11 = 0;
var t_d12 = 0;
var t_h11 = 0;
var t_h12 = 0;
var t_m11 = 0;
var t_m12 = 0;
var t_s11 = 0;
var t_s12 = 0;

window.onload = function() {
  // Month Day, Year Hour:Minute:Second, id-of-element-container
  var timeWp = $('.counter').data('date');
  countDownToTime(timeWp, 'countdown1'); // ****** Change this line!
}
function countDownToTime(countTo, id) {
    

    countTo = countTo.replace(' ', 'T');
    countTo2 = new Date(countTo).getTime();
    var now = new Date(),
    countTo2 = new Date(countTo2),
    timeDifference = (countTo2 - now);

    // console.log(timeDifference);
    
     if(timeDifference < 0){
         return;
     }
      
  var secondsInADay = 60 * 60 * 1000 * 24,
      secondsInAHour = 60 * 60 * 1000;

  day = Math.floor(timeDifference / (secondsInADay) * 1);
  hour = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1) + day*24;
  min = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
  sec = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);
var dd = "";
var hh = "";
var mm = "";
var ss = "";

if(day < 10){
	dd = "0" + day.toString();
}else{
	dd = day.toString();
}
	
if(hour < 100){
	hh = "0" + hour.toString();
}
else if(hour < 10){
	hh = "00" + hour.toString();	
}else{
	hh = hour.toString();
}
if(min < 10){
	mm = "0" + min.toString();
}else{
	mm = min.toString();
}
if(sec < 10){
	ss = "0" + sec.toString();
}else{
	ss = sec.toString();
}
	
//var d1 = dd.substring(0, 1);
//var d2 = dd.substring(1, 2);
var h0 = hh.substring(0, 1);
var h1 = hh.substring(1, 2);
var h2 = hh.substring(2, 3);
var m1 = mm.substring(0, 1);
var m2 = mm.substring(1, 2);
var s1 = ss.substring(0, 1);
var s2 = ss.substring(1, 2);

//var d11 = dd.substring(0, 1);
//var d12 = dd.substring(1, 2);
var h10 = hh.substring(0, 1);
var h11 = hh.substring(1, 2);
var h12 = hh.substring(2, 3);
var m11 = mm.substring(0, 1);
var m12 = mm.substring(1, 2);
var s11 = ss.substring(0, 1);
var s12 = ss.substring(1, 2);

//SetClock('d1',d1);
//SetClock('d2',d2);
SetClock('h0',h0);
SetClock('h1',h1);
SetClock('h2',h2);
SetClock('m1',m1);
SetClock('m2',m2);
SetClock('s1',s1);
SetClock('s2',s2);

//SetClock('d11',d11);
//SetClock('d12',d12);
SetClock('h10',h10);
SetClock('h11',h11);
SetClock('h12',h12);
SetClock('m11',m11);
SetClock('m12',m12);
SetClock('s11',s11);
SetClock('s12',s12);
	
	
  clearTimeout(countDownToTime.interval);
  countDownToTime.interval = setTimeout(function(){ countDownToTime(countTo, id); },1000);
}

function SetClock(id,val){
	var oldID = window["t_"+id];
	var newID = Number(val);
	if(oldID != newID){
		$("#"+id+"o").html(val);
		window["t_"+id] = val;
		PlayDig(id,oldID,newID);
	}else{
		$("#"+id).html(val);
	}
	
	//console.log(t_d1);
}

function PlayDig(id,oldID,newID){
    $("#"+id+"o").animate({
        top: '+=114'
    },"ease-in-out");

    $("#"+id).animate({
        top: '+=114'
    },"ease-in-out");

	// TweenLite.to("#"+id+"o", 0.5, {top:"+=114", ease:Power2.easeIn});
	// TweenLite.to("#"+id, 0.5, {top:"+=114", ease:Power2.easeIn});
	setTimeout(function(){
		$("#"+id).html(newID)
		$("#"+id+"o").css("top","-114px");
		$("#"+id).css("top","0px");
	},550)
}


