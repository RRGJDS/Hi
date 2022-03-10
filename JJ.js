// function zero(){
//     var HJlive = true;

//     var SKYlive = true;

//     var pudding = true;

//     var suspect = true;
// }

// var Suspect = 'suspect';

function setCookie(key, value, expiredays) {
  let todayDate = new Date();
  todayDate.setDate(todayDate.getDate() + expiredays); // 현재 시각 + 일 단위로 쿠키 만료 날짜 변경
  //todayDate.setTime(todayDate.getTime() + (expiredays * 24 * 60 * 60 * 1000)); // 밀리세컨드 단위로 쿠키 만료 날짜 변경
  document.cookie = key + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
}

function getCookie(key){
  key = new RegExp(key + '=([^;]*)');
  return key.test(document.cookie) ? unescape(RegExp.$1) : '';}

function SuV(){
  getCookie('suspect');
  var su = getCookie("suspect");
  return su;
}

function HJD(){
  getCookie('HJlive');
  var hj = getCookie("HJlive");
  return hj;
}
//화주를 만남 : 10
//화주 푸딩 : 20
//화주 퇴장 : 30
//화주 죽음 : 44

function SKYD(){
  getCookie('SKYlive');
  var sky = getCookie("SKYlive");
  return sky;
}

function PuV(){
  getCookie('pudding');
  var pud = getCookie("pudding");
  return pud;
}

function DioV(){
  getCookie('Dio');
  var dio = getCookie("Dio");
  return dio;
}

function reset(){  
  setCookie('HJlive', '3', '2');
  setCookie('SKYlive', '3', '2');
  setCookie('pudding', '3', '2');
  setCookie('suspect', '3', '2');
  setCookie('Dio', '0', '2');
}


// var happy = new Audio("audio/happy ending.mp3");
// var normal = new Audio("audio/Normal ending.mp3");
// var truth = new Audio("audio/truth.mp3");
// var battle = new Audio("audio/battle.mp3");

// document.querySelector("#audioP").addEventListener("click", function(){
//     happy.play();
//     happy.loop = true;
//     happy.volume = 0.2;
//     happy.currentTime = 0;
// });

console.log("22TLQKF");