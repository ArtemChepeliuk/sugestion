let one = document.getElementById("one");
let cat = ['Dog', 'Rat', 'bat'],
  hello = ['hello', 'Help', 'Hell'],
  helpd = ['help', 'held', 'hello'];


function spacePress(focusInput) {

  let inputTop = getCoords(focusInput).top,
    inputLeft = getCoords(focusInput).left,
    inputHeight = focusInput.offsetHeight;
  inputTop = inputTop + inputHeight;
  createsuggestion(inputLeft, inputTop);
}


document.body.onkeyup = function (e) {
  if (e.keyCode == 32) {
    let inp = document.querySelector(":focus");
    console.log(inp);
    spacePress(inp);
  }
};

// document.addEventListener('click',  
// removesuggestion
// );

function removesuggestion() {
  document.getElementById('suggestion').remove();
}

function createsuggestion(x, y) {
  let nevUl = document.createElement('div');
  nevUl.classList.add('suggestion');
  nevUl.setAttribute('id', 'suggestion');
  console.log(x, ' x');
  console.log(y, ' y');
  nevUl.style.cssText += 'left:' + x + 'px; top:' + y + 'px';
  document.body.append(nevUl);
}


function getCoords(elem) {
  let box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}