console.dir(document);
console.log(document.head);
console.log(document.head);
console.log(document.div);
//console.log(document.querySelectorAll);
//document.all[10].textContent='HELL0';

console.log(document.body);

var header=document.getElementById('header-title');
var headermain=document.getElementById('main-header');
var head=document.getElementById('items');
console.log(header);
header.textContent='Hello';
header.innerHTML='SOMETHING';
console.log(header.innertext);

headermain.style.borderBottom='solid 3px #000';
head.style.borderBottom='solid 3px yellow'


var pointer=document.getElementsByClassName('list-group-item');
console.log(pointer);
console.log(pointer[2]);
pointer[2].textContent='hello3';
pointer[2].style.fontWeight='bold';
pointer[2].style.background='yellow'

//for(var i=0;i<pointer.length;i++){
//    pointer[i].style.background='green';
//}

var poin =document.querySelector('#main-header');
poin.style.borderBottom='solid 10px #000';

var input =document.querySelector('input');
input.value='PRAKASH';

//var sending =document.querySelector('input[type="submit"]');
//sending.value='SEND';


var firstitem =document.querySelector('.list-group-item');
firstitem.style.color='red';


var lastitem =document.querySelector('.list-group-item:last-child');
lastitem.style.color='green';


var seconditem =document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.color='red';


var titles=document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent='List OF ITEMS';

var odd =document.querySelectorAll('.list-group-item:nth-child(odd)');
var even =document.querySelectorAll('.list-group-item:nth-child(even)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='#f4f4';
    even[i].style.backgroundcolor='#f4f4f4';
}