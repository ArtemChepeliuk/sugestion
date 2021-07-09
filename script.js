const cat = ['Dog', 'Rat', 'bat'],
  hello = ['hello', 'Help', 'Hell'],
  helpd = ['help', 'held', 'hello'];


function spacePress(focusInput, arr) {

  let inputTop = getCoords(focusInput).top,
    inputLeft = getCoords(focusInput).left;
  createsuggestion(inputLeft, inputTop + 50, arr);
}


document.body.onkeyup = e => {
  let inp = e.target;


  if (!inp) return;


  let inpVal = inp.value;


  if (!['INPUT', 'TEXTAREA'].includes(inp.tagName)) {
    inpVal = inp.innerText;
  } else {
    inpVal = inp.value;
  }

  removesuggestion();
  if (e.keyCode == 32) {

    word = inpVal.match(/(\w+\s+)$/);

    if (!word) return;
    // word = word.replace(/(\s)/, '');

    switch (word) {
      case 'Cat':
        arr = cat;
        spacePress(inp, arr);
        break;
      case 'Helo':
        arr = hello;
        spacePress(inp, arr);
        break;
      case 'helpd':
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

        let suggestionValue = this.innerText;


        if (!['INPUT', 'TEXTAREA'].includes(inp.tagName)) {
          inp.innerText = inpVal.replace(word, suggestionValue) + ' ';
        } else {
          inp.value = inpVal.replace(word, suggestionValue) + ' ';
        }
        inp.focus();
        removesuggestion();
      });
    });
  }
};

function removesuggestion() {
  if (document.getElementById('suggestion')) {
    document.getElementById('suggestion').remove();
  }


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
  suggestionWrapper.style.cssText += 'position:fixed;left:0;top:0;background-color:gray;border:1px solid #000;padding:10px 20px;margin:0;z-index:99999';
  suggestionWrapper.style.cssText += 'left:' + x + 'px; top:' + y + 'px';
  document.body.append(suggestionWrapper);


}

function getCoords(elem) {
  let box = elem.getBoundingClientRect();
  return {

    left: box.left,
    top: box.top
  };
}