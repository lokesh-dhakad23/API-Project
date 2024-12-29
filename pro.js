const vTry = [
  document.querySelector("#vtot"),
  document.querySelector("#f-img")
];
const tTry = document.querySelector("#ttos");
const interFace = document.querySelector("#interface");
const timg = document.querySelector("#s-img");

const main = document.querySelector("#main");
const home = document.querySelector("#home-icon");
const switchBtn = document.getElementById("switch-icon");
const voiceToTextDiv = document.getElementById("S2T");
const textToSpeechDiv = document.getElementById("T2S");

vTry.forEach((element) => {
  element.addEventListener("click", function () {
    voiceToTextDiv.style.display = "flex";
    interFace.style.display = "none";
    main.style.display = "block";
  });
});

tTry.addEventListener("click", function () {
  textToSpeechDiv.style.display = "flex";
  interFace.style.display = "none";
  main.style.display = "block";
  voiceToTextDiv.style.display = "none";
});


timg.addEventListener("click", function () {
  textToSpeechDiv.style.display = "flex";
  interFace.style.display = "none";
  main.style.display = "block";
  voiceToTextDiv.style.display = "none";
});

home.addEventListener("click", function () {
  textToSpeechDiv.style.display = "none";
  interFace.style.display = "flex";
  main.style.display = "none";
  voiceToTextDiv.style.display = "none";
});

switchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (textToSpeechDiv.style.display === "none") {
    voiceToTextDiv.style.display = "none";
    textToSpeechDiv.style.display = "flex";
  } else {
    voiceToTextDiv.style.display = "flex";
    textToSpeechDiv.style.display = "none";
  }
});

// Speech to Text //

const micBtn = document.getElementById("micbtn");
const clearBtn = document.getElementById("clearbtn");
const startList = document.getElementById("listening");
const textSpace = document.getElementById("para");

const startListen = new (window.SpeechRecognition ||
                          window.webkitSpeechRecognition ||
                          window.mozSpeechRecognition ||
                          window.msSpeechRecognition)();
startListen.lang = "en-US";

startListen.onstart = function () {
  startList.textContent = "Listening...";
  activeCss();
};

startListen.onresult = function (event) {
  const transcript = event.results[0][0].transcript;
  textSpace.textContent += " " + transcript + ".";
};

startListen.onend = function () {
  startList.textContent = "Start Voice Input";
  removeCss();
};

micBtn.addEventListener("click", function () {
  startListen.start();
});

clearBtn.addEventListener("click", function () {
  textSpace.textContent = "";
});

function activeCss() {
  micBtn.style.backgroundColor = "#2daa46";
  micBtn.style.color = "#F9DBBD";
  micBtn.style.border = "2px solid #F9DBBD";
  micBtn.style.boxShadow = "5px 5px 20px #000000";
}

function removeCss() {
  micBtn.style.backgroundColor = "";
  micBtn.style.color = "";
  micBtn.style.border = "";
  micBtn.style.boxShadow = "";
}

// Text to Speech //

const inputEl = document.querySelector(".input-area");
const speakBtn = document.querySelector("#speakbtn");
const speakpPara = document.querySelector("#speaking");

const speaker = window.speechSynthesis;
let isSpeaking = false;

speakBtn.addEventListener("click", function () {
  const text = inputEl.value;
  if (text) {
    speakText(text);
  } else if (isSpeaking) {
    stopSpeaking();
  }
});

function speakText(text) {
  isSpeaking = true;
  speakpPara.textContent = "Speaking.....";
  activeCs();

  const utterThis = new SpeechSynthesisUtterance(text);
  utterThis.lang = "en-IN";

  utterThis.onend = function () {
    isSpeaking = false;
    speakpPara.textContent = "Start Voice output";
    removeCs();
  };

  speaker.speak(utterThis);
  inputEl.value = "";
}

function stopSpeaking() {
  speaker.cancel();
  isSpeaking = false;
  speakpPara.textContent = "Please Enter Some Text To Speak";
  removeCs();
}

function activeCs() {
  speakBtn.style.backgroundColor = "#2daa46";
  speakBtn.style.color = "#F9DBBD";
  speakBtn.style.border = "2px solid #F9DBBD";
  speakBtn.style.boxShadow = "5px 5px 20px #000000";
}

function removeCs() {
  speakBtn.style.backgroundColor = "";
  speakBtn.style.color = "";
  speakBtn.style.border = "";
  speakBtn.style.boxShadow = "";
}
