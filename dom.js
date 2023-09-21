// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent='Hello';
// console.log(document.forms[0]);
// var header=document.getElementById('main-header');
// header.style.borderBottom='solid 1px #000';
// var addItem=document.getElementsByClassName('title');
// addItem[0].style.fontWeight="bold";
// addItem[0].style.color='green';

// var items=document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor='green';
// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }


// var li=document.getElementsByTagName('li');
// console.log(li[0].textContent);

// var secondItems=document.querySelector('.list-group-item:nth-child(2)');
// // console.log(items);
// secondItems.style.backgroundColor='green';
// var thirdItem=document.querySelector('.list-group-item:nth-child(3)');


// thirdItem.style.display='none';

var items=document.querySelectorAll('.list-group-item');
items[1].style.color='green';

var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.color='green';
}

