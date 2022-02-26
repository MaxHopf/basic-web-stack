"use strict"

//Basic example of DOM manipulation

const body = document.querySelector('body');    //1. Get reference to an existing HTML element

const header = document.createElement('h1');    //2. Create a new HTML element and store it in a JS variable
header.textContent = 'This is my header';       //3. Add some text content
header.classList.add('center');                 //4. And some class attributes
header.setAttribute('style', 'color: #ff9944'); //5. Set some css style properties
body.appendChild(header);                       //6. Appent newly createt HTML element to an existing HTML element

const divContainer = document.createElement('div');
divContainer.setAttribute('style', 'background-color: pink; border-style: solid; border-color: black');
body.appendChild(divContainer);

const subtitle = document.createElement('h2');
subtitle.textContent = 'This is my subtitle';
subtitle.classList.add('center');
divContainer.appendChild(subtitle);

