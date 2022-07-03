var seconds=00;
var minutes=00;
var hours=00;
var interval;
var status ="stop";

function increasetime(){
   
    seconds++;
  if(seconds==60){
      seconds=0;
      minutes++;
  }
  if(minutes==60){
      minutes=0;
      hours++;
  }
  if (seconds <10 ){
    document.getElementById("display").innerHTML= "0"+hours +":" +"0"+ minutes + ":" +"0"+ seconds;
}  
  else{
    document.getElementById("display").innerHTML=hours +":"+ minutes + ":" + seconds;
  } }
  function startstop(){
    if(status=="stop"){
      interval = window.setInterval(increasetime,1000);
   status="start";
   document.getElementById("start").innerText="stop";
}
else{
  window.clearInterval(interval); 
status="stop";
document.getElementById("start").innerText="start";
} }
 
function reset(){
    window.clearInterval(interval); 
    seconds=00;
    minutes=00;
     hours=00;
    document.getElementById("display").innerHTML="00:00:00";
  }
  