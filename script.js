const inputBox = qs("textarea#input");
const outputBox = qs("textarea#output");

const copyBtn = qs("button#copy");
const buttons = qsAll(".btn");

const adsBtn = qs("button#ads");
const sitesBtn = qs("button#sites");
const emailBtn = qs("button#email");
const smsBtn = qs("button#sms");

// ----

buttons.forEach((e) => {
  e.addEventListener("click", () => {
    outputBox.innerText = encrypt(e.id, inputBox.value)
  });
});

copyBtn.addEventListener("click", () => {
  copyText(outputBox.value);
});

// ----

function qs(q) {
  return document.querySelector(q);
}

function qsAll(q) {
  return document.querySelectorAll(q);
}

function encrypt(mode, text) {
  let ret = "";
  
  switch (mode) {
    case "ads":
      break;
    case "sites":
      break;
    case "email":
      let ch = "\u202E";
      
      ret = ch + text.split("").reverse().join("");
      break;
    case "sms":
      break;
  }
  
  return ret;
}

// Source: Stack Overflow
function copyText(val) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }