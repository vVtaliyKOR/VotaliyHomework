
// let theorema = (a,b) => {
//     if((typeof a !== 'number') || (typeof b !=='number')){
//         return false
//     } else {
//         return Math.sqrt(a*a + b*b)
//     }
// }
// console.log(theorema(47567, 9))

// function pow(x,z) {
//     let test = x
//     for(let i=1; i<z; i++){
//         test *=x
//     }
//     return test
// }
// console.log(pow(6, 7))
// let array = ["magic",2,"too",8, "fool", 879, "year", 67, 89766]
// let aray1 = ["yeap",4,"moch",7, "dool", 6768, "wintwe", 7, 9]

// let massive = (a,b) => {
//     return b - a
// };

// console.log(massive((array,aray1)))

// let foowords = ["Bad", "Dull","Mole","Foolish"]
// let foowords2 = ["дурной", "нехороший", "некачественный", "скверный"]

// let fooJoin = foowords.join("-")
// console.log(fooJoin)
// let foo =   foowords[Math.floor(Math.random()*4)] 
// console.log(foo + fooJoin)

// let foo2 = foowords2[Math.floor(Math.random()*4)] 



// console.log("Your " + foo + " is less " + foo2)

// 25/03/2023 js function HOmework

// Temperature
// Оформіть Temperature як функцію, яку параметром передається температура в одній системі, 
// а повертається до іншої. Жодних prompt та console.log у коді бути не повинно, якщо ви хочете надалі користуватися цією функцією будь-де в коді зручно. 
// Чи потрібен блок коду функції для вирішення цього завдання?

// let celsius = 20;
// let fahrenheit = celsiusToFahrenheit(celsius);
// console.log(`Temperature is: ${fahrenheit}`);

// function celsiusToFahrenheit(celsius) {
//     let fahrenheit = (celsius * 9/5) + 32;
//     return fahrenheit;
//   }
  

// RGB
// Оформіть Number: RGB як функцію, яку параметрами передаються три числа (r, g, b) => .
//  Функція повинна повертати рядок у нотації #RRGGBB. Використовуючи умови або тернарний оператор 
//  Досягніть що б у результаті завжди було 7 символів, навіть коли значення кольору менше 15ти. 
// Чи потрібний блок коду цієї функції?
   
// function rgbColor (r, g, b) {
    
//     let red = r.toString(16).padStart(2, '0');
//     let green = g.toString(16).padStart(2, '0');
//     let blue = b.toString(16).padStart(2, '0');
  
    
//     let rgbResult = `#${red}${green}${blue}`;
    
    
//     if (red.length < 2 || green.length < 2 || blue.length < 2) {
//       rgbResult = `#0${red}0${green}0${blue}`;
//     }
  
//     return rgbResult;
//   }
  

// Flats
// Оформіть Number: flats як функцію. 
// Продумайте достатню кількість параметрів для розв'язання задачі. Функція повинна повертати об'єкт виду {entrance, floor}, де entrance - 
// номер падiка, floor - номер поверху, на якому знаходиться квартира.


// function flats (numberOfFlat, numberOfFloor, numberOfentrance){

//     let multiplication = numberOfFloor * numberOfentrance;

//     let lastEntrance = Math.ceil(numberOfFlat/numberOfentrance);
//     let lastEntranceTwo = ((lastEntrance -1)* multiplication) + numberOfFlat % multiplication;

//     let lastEntranceAgain = Math.ceil(lastEntranceTwo / multiplication);
//     let lastFloor = Math.ceil((lastEntranceTwo % multiplication) / numberOfFloor);

//     return{lastEntranceAgain, lastFloor}


// };


// Credentials
// Оформіть завдання String: credentials як функцію без параметрів. 
// Використовуйте функцію capitalize із домашнього завдання з масивів. 
// Функція повинна містити виклики prompt та повертати об'єкт виду {name, surname, fatherName, fullName}


// function capitalize(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   }
  
//   function credentials() {
//     const name = capitalize(prompt('Введіть ім\'я:'));
//     const surname = capitalize(prompt('Введіть прізвище:'));
//     const fatherName = capitalize(prompt('Введіть по-батькові:'));
//     const fullName = `${surname} ${name} ${fatherName}`;
  
//     return {name, surname, fatherName, fullName };
//   }

// New line
// Оформіть завдання String: new line як функцію з параметром-рядком. 
// Функція повинна повертати рядок із справжніми переносами.

// function lineFunction(str) {
//     return str.replace(/\\n/g, '\n');
//   }
  
// Prompt OR
// Оформіть завдання Prompt: OR як функцію, яка приймає рядок для prompt та значення за замовчуванням. 
// Функція повинна повертати введений текст або значення за замовчуванням у разі відмови користувача вводити щось. 
// Використовуйте функцію без блоку коду (функція одного виразу)

// const promptOrOr =(text, textTwo) => prompt(text, textTwo) || textTwo



// Login And Password
// Оформіть завдання Login And Password як функцію, яка приймає два параметри - 
// правильний логін та пароль і повертає true якщо логін та пароль введені користувачами вірні, або false 
// якщо користувач 
// не зміг. 
// Функція повинна містити в собі виклики prompt для введення логіну та пароля користувачем.

// function loginAndPassword(login, password){
//   let enterLogin = prompt("Yor login");
//   if (enterLogin === null) {
//     return false

//   }

//   let enterPassword = prompt("Your password");

//   if (enterPassword === null){
//     return false
//   }

//   if(enterLogin === login &&  enterPassword === password) {
//     return true
//   } else {
//     return false
//   }

    
// }
// loginAndPassword("Helen", 1234567)

 
  
  // ..For Table
  // Оформіть завдання For Multiply Table як функцію, 
  // яка приймає будь-який масив з масивами,
  //  а повертає рядок HTML з тегом <table> і всякими tr та td.



// function multiplyTable(arr) {
  
//     let table = '<table>';
//     for (let i = 0; i < arr.length; i++) {
//       table += '<tr>';
//       for (let j = 0; j < arr[i].length; j++) {
//         table += '<td>' + (arr[i][j] * arr[i][j]) + '</td>';
//       }
//       table += '</tr>';
//     }
//     table += '</table>';
//     return table;
//   }
 
//   multiplyTable([1,2,3])
  // Filter Lexics
  // Оформіть завдання Filter Lexics як функцію, яка приймає будь-який рядок для перевірки та масив некоректних 
  // слів (['бляха', 'муха', "пляшка", "шабля"], наприклад). 
  // Функція повинна повертати рядок без цих некоректних слів.

  // function filter(str, blacklist) {
  //   let word = str.split(' ');
  //   for (let i = 0; i < word.length; i++) {
  //     if (blacklist.includes(word[i].toLowerCase())) {
  //       word.splice(i, 1);
  //       i--;
  //     }
  //   }
  //   return word.join(' ');
  // }
  // filter(prompt("Your words"), ['бляха', 'муха', "пляшка", "шабля"])



  // function currencyTable() {
    
  //   const data = [
  //     ["USD", "US Dollar", 1.0, "united-states-flag-icon"],
  //     ["EUR", "Euro", 0.84, "european-union-flag-icon"],
  //     ["GRV", "Ukraine Grivna", 38.55, "ukrain-flag-icon"],
      
  //   ];
    
    
  //   const tableData = [
  //     ["Code", "Currency", "Exchange Rate", "Flag"],
  //     ...data
  //   ];
        
  //   const htmlTable = forTable(tableData);
        
  //   return htmlTable;
  // }

  // currencyTable()
  

//   const car = {
//     "Name":"chevrolet chevelle malibu",
//     "Cylinders":8,
//     "Displacement":307,
//     "Horsepower":130,
//     "Weight_in_lbs":3504,
//     "Origin":"USA",
//     "in_production": false
// }
 
// const form = createForm(formData);
// document.body.append(car);

//   function createForm(formData) {
//     const form = document.createElement("form");
  
    
//     for (const key in formData) {
//       const label = document.createElement("label");
//       label.textContent = key;
  
//       const input = document.createElement("input");
//       input.name = key;
//       input.type = "text";
//       input.required = true;
//       input.value = formData[key];
  
//       const div = document.createElement("div");
//       div.append(label, input);
  
//       form.append(div);
//     }
  
    
//     const button = document.createElement("button");
//     button.textContent = "Submit";
//     form.append(button);
      
//     return form;
//   }
  
  
// Array of objects sort


// const persons = [
//   {name: "Іван", age: 17},
//   {name: "Марія", age: 35},
//   {name: "Олексій", age: 73},
//   {name: "Яків", age: 12},
// ];

// function sortArrayByProperty(array, property, ascending = true) {
//   const modifier = ascending ? 1 : -1;
//   return array.sort((a, b) => {
//     if (a[property] < b[property]) {
//       return -1 * modifier;
//     } else if (a[property] > b[property]) {
//       return 1 * modifier;
//     } else {
//       return 0;
//     }
//   });
// }

// const sortedByAge = sortArrayByProperty(persons, "age");
// console.log(sortedByAge);

// const sortedByName = sortArrayByProperty(persons, "name", false);
// console.log(sortedByName);


// Table
// Оформіть завдання Table як функцію, яка приймає такі параметри:
// const persons = [    {       
//       name: 'Марія',       
//       fatherName: 'Іванівна',       
//       surname: 'Іванова',        
//       sex: 'female'    },   
//   {   name: 'Миколай',       
//       fatherName: 'Іванович',       
//       surname: 'Іванов',        
//       age: 15    },   
//  {        name: 'Петро',        
//           fatherName: 'Іванович',       
//           surname: 'Іванов',       
//           married: true    },];

// const table = document.createElement('table');
// const thead = document.createElement('thead');
// const tbody = document.createElement('tbody');

// const theadRow = document.createElement('tr');
// const headers = Object.keys(persons[0]);

// headers.forEach(header => {
//   const th = document.createElement('th');
//   th.textContent = header;
//   theadRow.appendChild(th);
// });

// thead.appendChild(theadRow);
// table.appendChild(thead);

// persons.forEach(person => {
//   const tr = document.createElement('tr');

//   headers.forEach(header => {
//     const td = document.createElement('td');
//     td.textContent = person[header] || '';
//     tr.appendChild(td);
//   });

//   tbody.appendChild(tr);
// });

// table.appendChild(tbody);

// document.body.appendChild(table);


// Divide in HTML



// {/* <label for="firstNumber">First number:</label>
// <input type="number" id="firstNumber">

// <label for="secondNumber">Second number:</label>
// <input type="number" id="secondNumber">

// <div id="divisionResult">Result will be shown here</div> */}


  // const calcResult = () => {
  //   const num1 = parseInt(document.getElementById('firstNumber').value);
  //   const num2 = parseInt(document.getElementById('secondNumber').value);
    
  //   const result = Math.floor(num1 / num2);

  //   document.getElementById('divisionResult').innerHTML = `The result of division is: ${result}`;
  // }

