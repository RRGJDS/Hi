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
//화주 푸딩 실패 : 10
//화주 푸딩 : 20
//화주 ㅌㅌ : 44
//화주 사망 : 50

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

function MM(){
  getCookie('M');
  var MA = getCookie("M");
  return MA;
}

function KII(){
  getCookie('kill');
  var kill1 = getCookie("kill");
  return kill1;
}

function DD(){
  getCookie('Door');
  var D1 = getCookie("Door");
  return D1;
}

function OO(){
  getCookie('OUT');
  var O1 = getCookie("OUT");
  return O1;
}

function reset(){  
  setCookie('HJlive', '3', '2');
  setCookie('SKYlive', '3', '2');
  setCookie('pudding', '3', '2');
  setCookie('suspect', '3', '2');
  setCookie('Dio', '0', '2');
  setCookie('QQQ', '3', '2');
  setCookie('M', '3', '2');
  setCookie('kill', '0', '2');
  setCookie('Door', '0', '2');
  setCookie('OUT', '0', '2'); //하늘이 죽고 카운트
}

var happy = new Audio("audio/happy ending.mp3");

function HapE(){
  happy.currentTime = DioV();
  happy.autoplay = true;
  happy.loop = true;
  happy.volume = 0.2;
  happy.play();
}

function HappyT(){
  console.log(happy.currentTime);
  setCookie('Dio', happy.currentTime, '2');
}

function inAudio(){
  getCookie('QQQ');
  var QQQ = getCookie("QQQ");
  return QQQ;
}

var normal = new Audio("audio/Normal ending.mp3");
function NNo(){
  normal.currentTime = DioV();
  normal.autoplay = true;
  normal.loop = true;
  normal.volume = 0.2;
  normal.play();
}

function NNoT(){
  console.log(normal.currentTime);
  setCookie('Dio', normal.currentTime, '2');
}

var truth = new Audio("audio/truth.mp3");
function TT(){
  truth.currentTime = DioV();
  truth.autoplay = true;
  truth.loop = true;
  truth.volume = 0.2;
  truth.play();
}

function TTT(){
  console.log(truth.currentTime);
  setCookie('Dio', truth.currentTime, '2');
}

var battle = new Audio("audio/battle.mp3");

function Batt(){
  battle.currentTime = DioV();
  battle.autoplay = true;
  battle.loop = true;
  battle.volume = 0.2;
  battle.play();
}

function BattT(){
  console.log(battle.currentTime);
  setCookie('Dio', battle.currentTime, '2');
}

console.log("44TLQKF");