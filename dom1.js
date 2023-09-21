// parentNode
var itemList=document.querySelector('#items');
// console.log(itemList.parentNode);

// itemList.parentNode.style.backgroundColor='#f4f4f4';

// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// firstChild

// console.log(itemList.firstChild);

// firstElementChild -- gives text node

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='hello 1';


// lastChild -- gives text node

// console.log(itemList.lastChild);

// lastElementChild

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='hello 1';

// nextSibling
// console.log(itemList.nextSibling);

// nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);

// previousElementSibling

// console.log(itemList.previousElementSibling);

// itemList.previousElementSibling.style.color='green';

//create div

var newDiv=document.createElement('div');
// add class
newDiv.className='hello';
// add id
newDiv.id='hello1';

// set attribute
newDiv.setAttribute('title','Hello Div');

// create text node
var newDivText=document.createTextNode('Hello World');
// add text to div
newDiv.appendChild(newDivText);
newDiv.style.fontSize='30px';

var container=document.querySelector('header .container');

var h1=document.querySelector('header h1');



container.insertBefore(newDiv,h1);

var newDiv1=document.createElement('div');
// add class
newDiv1.className='hello';
// add id
newDiv1.id='hello1';

// set attribute
newDiv1.setAttribute('title1','Hello Div');

// create text node
var newDivText1=document.createTextNode('Hello World');
// add text to div
newDiv1.appendChild(newDivText1);

var container2=document.querySelector('#items');
var li=document.querySelector('.list-group-item');

container2.insertBefore(newDiv1,li);



