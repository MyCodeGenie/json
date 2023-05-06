

 // 🔥 평균 구하기 _ MY 🔥 

//! 웹에서는 에러 const students = require('./Json/fruits.json'); 

fetch('https://raw.githubusercontent.com/MyCodeGenie/json/arrayObject.js/Json/average.json')

     .then (response => response.json())//$ json 변환
     .then (data     => 
    {
        const arry = Object.values(data);

        console.log(arry);
        console.log(data);

        let   korean  = 0;
        let   math    = 0;
        let   english = 0;


        for(let i=0; i < arry.length; i++) {
            korean  = arry[i].scores.korean  + korean
            math    = arry[i].scores.math    + math
            english = arry[i].scores.english + english
        }


        console.log('my');
        console.log(`국어: ${(korean   /arry.length).toFixed(2)}`);
        console.log(`수학: ${(math     /arry.length).toFixed(2)}`);
        console.log(`영어: ${(english  /arry.length).toFixed(2)}`);

        // ! 국어: 80.00
        // ! 수학: 78.33
        // ! 영어: 76.67

        const numbers = [1, 2, 3, 4];
        const sum = numbers.reduce((A리턴값, B배열값, C배열index) => {
            console.log('───────────────────────────────');
            console.log(`| A리턴값: ${A리턴값}  |  B배열값: ${B배열값} | ${C배열index}번째 `);
            return A리턴값 + B배열값;
            }, 10);
    })

        .catch(error    => console.error(error));
 


// //===================================================
// //                                                   
// //  #####    #####  ####    ##   ##   ####  #####  
// //  ##  ##   ##     ##  ##  ##   ##  ##     ##     
// //  #####    #####  ##  ##  ##   ##  ##     #####  
// //  ##  ##   ##     ##  ##  ##   ##  ##     ##     
// //  ##   ##  #####  ####     #####    ####  #####  
// //                                                       
// //===================================================



/* 

{ // 💡gpt    
  const numStudents = students.length;
  const scores_a    = students.reduce((acc, curr) => {
      const {korean, math, english} = curr.scores;
      acc.korean  += korean;
      acc.math    += math;
      acc.english += english;
      return acc;
  }, {
      korean: 0,
      math: 0,
      english: 0
  });
  
  console.log('\n\n────────gpt───────────────────────────────────────');
  console.log(`국어: ${scores_a.korean / numStudents}`);
  console.log(`수학: ${ (scores_a.math / numStudents).toFixed(2)}`);
  console.log(`영어: ${ (scores_a.english / numStudents).toFixed(2)}`);
}

// 객체를 배열로 바꾸기
console.log(students);
const array = Object.entries(students)
array.forEach(([key, value]) => {
    console.log(value.name);
    console.log(key);
    });
     */

