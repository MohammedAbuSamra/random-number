let clickMe = document.querySelector('button');
 

function getRandomNumber(min, max) {
  let totalEle = max - min + 1;
  let result = Math.floor(Math.random() * totalEle) + min;
  return result;
}
function createArrayOfNumber(start, end) {
  let myArray = [];
  for (let i = start; i <= end; i++) {
    myArray.push(i);
  }
  return myArray;
}
let numbersArray = createArrayOfNumber(1, 100);
 
clickMe.addEventListener('click', () => {
  if (numbersArray.length === 0) {
    document.querySelector('h1').innerText =('No more random number');
    return;
  }
  let randomIndex = getRandomNumber(0, numbersArray.length - 1);
  let randomNumber = numbersArray[randomIndex];
  numbersArray.splice(randomIndex, 1);
 document.querySelector('h1').innerText = (randomNumber);
});
