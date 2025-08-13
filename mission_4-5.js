function omikujishow(){
  var number1 = Math.random();
    
 var message;
  if (number1 < 0.1) {                 
    message = "大吉";
  } else if (number1 < 0.25) {         
    message = "中吉";
  } else if (number1 < 0.45) {        
    message = "吉";
  } else if (number1 < 0.7) {          
    message = "小吉";
  } else if (number1 < 0.9) {          
    message = "凶";
  } else {                             
    message = "大凶";
  }

var additionalMessage="";
 if (message === "大吉") {
    extraMessage = "おめでとう！しばらくは何をしても上手くいきます！";
  } else if (message === "中吉") {
    extraMessage = "良い調子！積極的に動いてみましょう！";
  } else if (message === "吉") {
    extraMessage = "小さな幸せが訪れるかもしれません！";
  } else if (message === "小吉") {
    extraMessage = "悪くない日。焦らずゆっくり進むことが成功の近道です！";
  } else if (message === "凶") {
    extraMessage = "落ち着いて行動すれば大丈夫です。一歩一歩確実に進んでいきましょう";
  } else if (message === "大凶") {
    extraMessage = "どん底からこそ、運は上向く！笑っていこう！";
  }

  var object = document.getElementById("omikuji");
  object.innerText = message + "\n" + extraMessage;
}