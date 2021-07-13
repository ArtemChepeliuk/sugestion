# sugestion
Test Task for JavaScript Developer

Write a browser extension for Chrome. Should load as unpacked to browser https://developer.chrome.com/extensions/getstarted#manifest ( no need to upload it to Chrome Store!)

Extension must load itself into every page (including iframes) and handle actions on
Input elements (type: “text”).
Contenteditable elements (including divs)

Example handling:
You type word “test” and press space → Nothing happens → Then you type word “foo” in text-input element (on any page) → Finish typing word (e.g. by pressing “space” button) → Popup is shown with several replacement options → User chooses “bar” option -> “foo” is replaced with “bar”

Functional requirements:
Should work properly when you add text inside existing text
Should be possible to continue typing in same location
Should work on all pages, with such elements (including e.g. iframes). 

Non-Functional requirements:
Extension must be created with Typescript or ES6
[Optional]: use webpack (any version) to build the app;

Dictionary (replacement options) for replacing:

Cat > Dog; Rat; bat
Helo > hello; Help, Hell
heldp > help; held; hello
