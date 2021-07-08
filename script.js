const cat = ['Dog', 'Rat', 'bat'],
  hello = ['hello', 'Help', 'Hell'],
  helpd = ['help', 'held', 'hello'];


function spacePress(focusInput, arr) {

  let inputTop = getCoords(focusInput).top,
    inputLeft = getCoords(focusInput).left,
    inputHeight = focusInput.offsetHeight;
  inputTop = inputTop + inputHeight;
  createsuggestion(inputLeft, inputTop, arr);
}


// document.body.onkeyup = function (e) {
//   let inp = document.querySelector(":focus"),
//     inpVal = inp.value;
//   if (e.keyCode == 32) {
//     let word = inpVal.match(/(\w+\s)$/);
//     word = word[word.length - 1];
//     switch (word) {
//       case 'Cat ':
//         arr = cat;
//         spacePress(inp, arr);
//         break;
//       case 'Helo ':
//         arr = hello;
//         spacePress(inp, arr);
//         break;
//       case 'helpd ':
//         arr = helpd;
//         spacePress(inp, arr);
//         break;
//     }
//   } else if (e.keyCode == 27) {
//     removesuggestion();
//   }

//   let suggestionValueEl = document.querySelectorAll('.suggestion li');
//   if (suggestionValueEl && inpVal) {
//     suggestionValueEl.forEach(function (e) {
//       e.addEventListener('click', function () {

//         let suggestionValue = this.innerText;
//         console.log(suggestionValue);
//         console.log(document.querySelector(":focus"));
//         console.log(inpVal);
//       });
//     });
//   }
// };

let input = document.querySelector('input');

input.addEventListener("focusin", () => input.classList.add('active_inp'));
input.addEventListener('focusout', () =>  input.classList.remove('active_inp'));

document.body.onkeyup = function (e) {
  let inp = document.querySelector(":focus"),
    inpVal = inp.value;
   
  if (e.keyCode == 32) {
    let word = inpVal.match(/(\w+\s)$/);
    word = word[word.length - 1];
    switch (word) {
      case 'Cat ':
        arr = cat;
        spacePress(inp, arr);
        break;
      case 'Helo ':
        arr = hello;
        spacePress(inp, arr);
        break;
      case 'helpd ':
        arr = helpd;
        spacePress(inp, arr);
        break;
    }
  } else if (e.keyCode == 27) {
    removesuggestion();
  }

  let suggestionValueEl = document.querySelectorAll('.suggestion li');
  if (suggestionValueEl && inpVal) {
    suggestionValueEl.forEach(function (e) {
      e.addEventListener('click', function () {
        
        let suggestionValue = this.innerText,
            activeInp = document.querySelector(".active_inp");

        console.log(suggestionValue);
        console.log(activeInp);
        console.log(inpVal);
        

      });
    });
  }
};



function removesuggestion() {
  document.getElementById('suggestion').remove();
}

function createsuggestion(x, y, arr) {
  let suggestionWrapper = document.createElement('ol');

  for (let index = 0; index < arr.length; index++) {

    const element = arr[index];
    let suggestionText = document.createElement('li');
    suggestionText.innerHTML = element;
    suggestionWrapper.appendChild(suggestionText);
  }

  suggestionWrapper.classList.add('suggestion');
  suggestionWrapper.setAttribute('id', 'suggestion');
  suggestionWrapper.style.cssText += 'left:' + x + 'px; top:' + y + 'px';
  document.body.append(suggestionWrapper);



}


function getCoords(elem) {
  let box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}