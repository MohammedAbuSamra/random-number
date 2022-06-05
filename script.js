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
let numbersArray = createArrayOfNumber(1, 10);
 
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

// const root = document.querySelector('#root');

// fetch('http://api.alquran.cloud/v1/quran/quran-uthmani')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     let surah = data.data.surahs;
//     surah.forEach(surah => {
//       let surahName = surah.englishName;
//       let surahNumber = surah.number;
//       let surahAyat = surah.numberOfAyahs;
//       let surahPage = surah.numberOfPages;
//       let surahJuz = surah.juz;
//       let surahHizb = surah.hizbQuarter;
//       let surahManzil = surah.manzil;
//       let surahRubah = surah.rub3;
//       let surahText = surah.text;
//       let surahTextAr = surah.text.arabic;

//       const surahDiv = document.createElement('div');
//       surahDiv.classList.add('surah');
      
//       surahDiv.innerHTML = `
//         <h2>${surahName}</h2>
//         <p>Number: ${surahNumber}</p>
//         <p>Ayat: ${surahAyat}</p>
//         <p>Page: ${surahPage}</p>
//         <p>Juz: ${surahJuz}</p>
//         <p>Hizb: ${surahHizb}</p>
//         <p>Manzil: ${surahManzil}</p>
//         <p>Rubah: ${surahRubah}</p>
//         <p>Text: ${surahText}</p>
//         <p>Text Ar: ${surahTextAr}</p>
//       `;
//       root.appendChild(surahDiv);

//     });

//   });



