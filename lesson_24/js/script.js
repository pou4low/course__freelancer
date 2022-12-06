'use strict'

function showName () {
   console.log('Vasya!');
}
setTimeout (showName, 0);
console.log('Kolya!');
// первым будет коля



showMessage();

function showMessage () {
   console.log('Message');
}

//Верно


/*
showMessageTwo();

let showMessageTwo = function () {
   console.log('Message');
}
*/

// Не верно потому что при функциональном виражении итог не видно сверху неё

let showMessageThree;

if (2 > 1) {
   showMessageThree = function () {
      console.log('Message 3');
   };
}
showMessageThree();

let arr = ['Vanya', 'Kolya', 'Petya',]; 
let newArr = arr; 
newArr.push('Irina'); 
console.log(arr.length); 
 
 
let users = ['Ваня', 'Иштван',]; 
users.push('Оля'); 
console.log(users); 
 
users.splice(1,1,'Петя'); 
console.log(users); 
 
let resultOne = users.find (function(item, index, array){ 
   return item === 'Оля'; 
}); 
console.log(resultOne); 
 
 
let removed = users.splice(0, 1); 
console.log(removed); 
console.log(users); 
 
users.unshift('Маша', 'Паша'); 
console.log(users); 
 
 
 
// задача 3 
let usersTwo = ['Ваня', 'Иштван',]; 
let removedTwo = usersTwo.splice(1, 1); 
console.log(removedTwo); 
//Задача 4 
let str = 'Ваня,Иштван,Оля'; 
let arrTwo = str.split(','); 
console.log(arrTwo); 
 
let arrThree = [9, 6, 8]; 
let reduceValue = arrThree.reduce(function (previousValue, item, index, array){ 
   console.log(previousValue); 
}); 
 
 
 
//DOM 
 
//Задача 1 
 
const block = document.querySelector('.block'); 
block.dataset.sayHi = 'yes'; 
let sayHi = block.dataset.sayHi; 
console.log(sayHi); 
 
 
//задача 2 
 
const liSecond = document.querySelectorAll('li'); 
let liText = liSecond[1]; 
console.log (liText.innerText); 
 
//Задача 3 
 
const likeElem = document.querySelectorAll('.like'); 
console.log(likeElem); 
 
// 4 
const list = document.querySelector('.example__four'); 
list.insertAdjacentHTML( 
   'beforeend', 
   '<li>Текст</li>' 
); 
 
 
 
 
// 1 
 
const mainElement = document.documentElement; 
const mainElementWidth = mainElement.clientWidth; 
const windowWidth = window.innerWidth; 
console.log(mainElementWidth); 
console.log(windowWidth); 
//2
function setScrollBy() {
	window.scrollBy(0, 100);
	const windowScrollTop = window.pageYOffset;
    console.log(windowScrollTop);
}
setTimeout(setScrollBy, 1000);

//3 

const blockFirst = document.querySelector('.first__block');
const blockFirstCoords = blockFirst.getBoundingClientRect();
console.log(blockFirstCoords);

 
const blockSecond = document.querySelector('.second__block'); 
const blockSecondCoords = blockSecond.getBoundingClientRect();
console.log(blockSecondCoords);

 
const blockThird = document.querySelector('.third__block'); 
const blockThirdCoords = blockThird.getBoundingClientRect();
console.log(blockThirdCoords);

