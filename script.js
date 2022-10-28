const inputBox = qs("textarea#input");
const outputBox = qs("textarea#output");

const copyBtn = qs("button#copy");
const buttons = qsAll(".btn");

const clearIn = qs("#clear-in");
const clearOut = qs("#clear-out");

// ----

buttons.forEach((e) => {
  e.addEventListener("click", () => {
    outputBox.innerText = encrypt(e.id, inputBox.value);
  });
});

copyBtn.addEventListener("click", () => {
  copyText(outputBox.value);
});

clearIn.addEventListener("click", () => {
  inputBox.value = "";
});

clearOut.addEventListener("click", () => {
  outputBox.value = "";
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
  let arr;
  
  switch (mode) {
    case "ads":
      arr = text.split("");
      
      for (let c of arr) {
        switch (c) {
            case "a":
                ret += "\u0430";
                break;
            case "c":
                ret += "\u0441";
                break;
            case "e":
                ret += "\u0435";
                break;
            case "i":
                ret += "\u0456";
                break;
            case "j":
                ret += "\u0458";
                break;
            case "o":
                ret += "\u043E";
                break;
            case "p":
                ret += "\u0440";
                break;
            case "s":
                ret += "\u0455";
                break;
            case "x":
                ret += "\u0445";
                break;
            case "y":
                ret += "\u0443";
                break;
            case "A":
                ret += "\u0410";
                break;
            case "B":
                ret += "\u0412";
                break;
            case "C":
                ret += "\u0421";
                break;
            case "E":
                ret += "\u0415";
                break;
            case "H":
                ret += "\u041D";
                break;
            case "I":
                ret += "I";
                break;
            case "K":
                ret += "\u039A";
                break;
            case "M":
                ret += "\u041C";
                break;
            case "N":
                ret += "\u039D";
                break;
            case "O":
                ret += "\u041E";
                break;
            case "P":
                ret += "\u0420";
                break;
            case "S":
                ret += "\u0405";
                break;
            case "T":
                ret += "\u0422";
                break;
            case "X":
                ret += "\u0425";
                break;
            case "Y":
                ret += "\u03A5";
                break;
            case "Z":
                ret += "\u0396";
                break;
            case " ":
                ret += "";
            default:
                ret += c;
        }
      }
      break;
    case "sites":
      arr = text.split("");
      
      ret += "\u200B";
      for (let c of arr) {
        switch (c) {
            case "a":
                ret += "\u0430";
                break;
            case "c":
                ret += "\u0441";
                break;
            case "e":
                ret += "\u0435";
                break;
            case "i":
                ret += "\u0456";
                break;
            case "j":
                ret += "\u0458";
                break;
            case "o":
                ret += "\u043E";
                break;
            case "p":
                ret += "\u0440";
                break;
            case "s":
                ret += "\u0455";
                break;
            case "x":
                ret += "\u0445";
                break;
            case "y":
                ret += "\u0443";
                break;
            case "A":
                ret += "\u0410";
                break;
            case "B":
                ret += "\u0412";
                break;
            case "C":
                ret += "\u0421";
                break;
            case "E":
                ret += "\u0415";
                break;
            case "H":
                ret += "\u041D";
                break;
            case "I":
                ret += "I";
                break;
            case "K":
                ret += "\u039A";
                break;
            case "M":
                ret += "\u041C";
                break;
            case "N":
                ret += "\u039D";
                break;
            case "O":
                ret += "\u041E";
                break;
            case "P":
                ret += "\u0420";
                break;
            case "S":
                ret += "\u0405";
                break;
            case "T":
                ret += "\u0422";
                break;
            case "X":
                ret += "\u0425";
                break;
            case "Y":
                ret += "\u03A5";
                break;
            case "Z":
                ret += "\u0396";
                break;
            case " ":
                ret += "";
            default:
                ret += c;
        }
      }
      break;
    case "sms":
    case "email":
      let ch = "\u202E";
      
      ret = ch + text.split("").reverse().join("");
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