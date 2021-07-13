// // document.addEventListener('DOMNodeInserted', function(){
//   const cat = ['Dog', 'Rat', 'bat'],
//   hello = ['hello', 'Help', 'Hell'],
//   helpd = ['help', 'held', 'hello'];


// function spacePress(focusInput, arr) {
//   let inputTop = getCoords(focusInput).top,
//     inputLeft = getCoords(focusInput).left;


//   createsuggestion(inputLeft, inputTop + 35, arr);
// }


// document.body.onkeyup = e => {
//   removesuggestion(); 

//   let inp = e.target;
//   if (!inp) return;
//   let inpVal = inp.value,
//     word,
//     n,
//     value;

  
//   if (!['INPUT', 'TEXTAREA'].includes(inp.tagName)) {

//     inp = window.getSelection().focusNode.parentElement;

//     inpFocus = window.getSelection().focusNode;

//     inpVal = window.getSelection().focusNode.nodeValue;

//     n = window.getSelection().anchorOffset;


//   } else {
//     inpVal = inp.value;
//     n = inp.selectionStart;
//   }
//   value = inpVal;
  
//   if (e.code == 'Space') {
    
//     inpVal = inpVal.slice(0, n);
    
//     removesuggestion(); 
   
//    word = inpVal.match(/(\w+\s+)$/); 
   

//     if (!word) return;

//     word = word[0].replace(/(\s)/, '');

//     switch (word) {
//       case 'Cat':
//         arr = cat;
//         spacePress(inp, arr);
//         break;
//       case 'Helo':
//         arr = hello;
//         spacePress(inp, arr);
//         break;
//       case 'helpd':
//         arr = helpd;
//         spacePress(inp, arr);
//         break;
//     }
//   } else if (e.code == 'Escape') {
//     removesuggestion();
//   }


//   let suggestionValueEl = document.querySelectorAll('.suggestion li');


//   if (suggestionValueEl && inpVal) {

//     suggestionValueEl.forEach(function (e) {
//       e.addEventListener('click', function () {
//         let suggestionValue = this.innerText;

//           restOfVal = value.slice(n, value.length);

           
//         n = n + suggestionValue.length - word.length;  

//         if (!['INPUT', 'TEXTAREA'].includes(inp.tagName)) {

//          console.log(inpVal, ' 2 nodevalue');
         
//          console.log(inp, ' inp');
//          console.log(suggestionValue, ' suggestionValue');
//          console.log(restOfVal, ' restOfVal');

//          inpFocus.nodeValue = inpVal.replace(/(\w+\s+)$/, suggestionValue + ' ' )  + restOfVal;

//           let range = document.createRange();
//           let sel = window.getSelection();
          
          
//           range.setStart(inpFocus, n);

//           range.collapse(true);
          
//           sel.removeAllRanges();
//           sel.addRange(range);


//         } 
//         else {
         
//           inp.value = inpVal.replace(/(\w+\s+)$/, suggestionValue + ' ' ) + restOfVal ;

//           inp.focus();
//           inp.selectionStart = n;
//           inp.selectionEnd = n;
//         }


//         removesuggestion();
//       });
//     });
//   }
// };

// function removesuggestion() {
//   if (document.getElementById('suggestion')) {
//     document.getElementById('suggestion').remove();
//   }
// }

// function createsuggestion(x, y, arr) {
//   let suggestionWrapper = document.createElement('ol');

//   for (let index = 0; index < arr.length; index++) {

//     const element = arr[index];
//     let suggestionText = document.createElement('li');
//     suggestionText.style.cssText += 'margin:5px 0;font-size:16px;font-weight:500;color:#fff;font-family:sans-serif;cursor:pointer';
//     suggestionText.innerHTML = element;
//     suggestionWrapper.appendChild(suggestionText);
//   }

//   suggestionWrapper.classList.add('suggestion');
//   suggestionWrapper.setAttribute('id', 'suggestion');
//   suggestionWrapper.style.cssText += 'position:fixed;left:0;top:0;background-color:gray;border:1px solid #000;padding:5px 20px;margin:0;z-index:99999';
//   suggestionWrapper.style.cssText += `left: ${x}px; top: ${y}px;`;
//   document.body.append(suggestionWrapper);

// }

// function getCoords(elem) {
//   let box = elem.getBoundingClientRect();
//   return {

//     left: box.left,
//     top: box.top
//   };

// }

