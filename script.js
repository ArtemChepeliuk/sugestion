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


document.body.onkeyup = function (e) {
  let inp = document.querySelector(":focus"),
    inpVal = inp.value;
    console.log(inp);
  inp.classList.add('active_input');
    if (e.keyCode == 32 ) {
      let word = inpVal.match(/(\w+\s)$/);
     
      word = word[word.length - 1];
      console.log(word);
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
          activeInp = document.querySelector('.active_input'),
          activeInpVal = activeInp.value;

        activeInpVal = activeInpVal.replace(/[\W]*\S+[\W]*$/, '');

        activeInp.value = activeInpVal + ' ' + suggestionValue;
       
        removesuggestion();
      });
    });
  }
};



function removesuggestion() {
  document.querySelector('.active_input').classList.remove('active_input');
  document.getElementById('suggestion').remove();
}

function createsuggestion(x, y, arr) {
  let suggestionWrapper = document.createElement('ol');

  for (let index = 0; index < arr.length; index++) {

    const element = arr[index];
    let suggestionText = document.createElement('li');
    suggestionText.style.cssText += 'margin:10px 0;font-size:16px;font-weight:500;color:#fff;font-family:sans-serif;cursor:pointer';
    suggestionText.innerHTML = element;
    suggestionWrapper.appendChild(suggestionText);
  }

  suggestionWrapper.classList.add('suggestion');
  suggestionWrapper.setAttribute('id', 'suggestion');
  console.log(x);
  console.log(y);
  suggestionWrapper.style.cssText += 'position:fixed;left:0;top:0;background-color:gray;border:1px solid #000;padding:10px 20px;margin:0;z-index:99999';
  suggestionWrapper.style.cssText += 'left:' + x + 'px; top:' + y + 'px';
  document.body.append(suggestionWrapper);


}

// переробити!!!
function getCoords(elem) {
  let box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}