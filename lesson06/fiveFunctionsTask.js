/* 1. Эмулировать игру в кубики, 2 человека по очереди бросают кубик, каждый в итоге бросает 
одинаковое количество раз (должно работать с любым количеством раз заданным в переменной).
У кого сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья.
Выведите результаты в консоль. */

const rollRandom = () => {
    return Math.floor((Math.random() * 6) + 1);                                // Рандом на стороны кубика
}

const playGame = (numOfThrows) => {                                            // В аргумент передаем количество бросков 
    let sumPlayer1 = 0;
    let sumPlayer2 = 0;

    for (let i = 0; i < numOfThrows; i++) {                                    // Суммируем и записываем в переменную, что выпало
        sumPlayer1 += rollRandom();
        sumPlayer2 += rollRandom();
    }
    console.log('Score Player 1: ' + sumPlayer1);                              // Вывод суммы всех бросков 
    console.log('Score Player 2: ' + sumPlayer2);

    if (sumPlayer1 > sumPlayer2) {                                             // Подводим итог игры
        console.log('Player 1 won!');
    } else if (sumPlayer2 > sumPlayer1) {
        console.log('Player 2 won!');
    } else {
        console.log('Draw!');
    }
}
playGame(3);                                                                   // Пример с тремя бросками


/* 2. Напишите код который будет разбивать число на заданное количество рандомных чисел сумма которых 
будет равна изначальному числу. Пример: разбить 15 на 3 части (сумма четырех чисел будет равна 15) (4,6,5) 
Ваш код должен работать с любым числом заданным в переменной (не только с 15) 
и с любым количеством частей на которые надо разбить число..
а. числа изначальное число целое, числа разбивки - целые (4,6,5)
б. числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25) */

// a)
const divideNumbers = (number, parts1) => {                                    // В агрумент передаем число и кол-во частей
    let result = [];
    let copyNumber = number;

    for (let i = 1; i < parts1; i++) {
        let randomNumber = Math.floor(Math.random() * copyNumber);             // Рандом на число 
        result.push(randomNumber);
        copyNumber -= randomNumber;                                            // Отнимаем рандомное число от самого числа и записываем в переменную
    }
    result.push(copyNumber);                                                   
    return result.join(', ');                                                  // Преобразуем массив в строку
}
console.log(divideNumbers(15, 3));                                             // Пример из задания

// б)
const divideNumbersFloat = (num, parts2) => {                                  // В агрумент передаем число и кол-во частей
    let result = [];
    let copyNum = num;

    for (let i = 1; i < parts2; i++) {
        let randomNumber = parseFloat((Math.random() * copyNum).toFixed(2));   // Рандом на число
        result.push(randomNumber);
        copyNum -= randomNumber;                                               // Отнимаем рандомное число от самого числа и записываем в переменную
    }

    result.push(parseFloat(copyNum.toFixed(2)));
    return result.join(', ');                                                  // Преобразуем массив в строку
}
console.log(divideNumbersFloat(15, 3));                                        // Пример из задания


// 3. поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1] 

const arrReverse = (arr) => {                                                  // В аргумент передаем массив
    return arr.reverse();
}
console.log(arrReverse([1, 2, 3, 4, 5, 6]));                                   // Пример из задания


// 4. найти максимальное значение числа в массиве ([3,67,15...])

const maxNumOfArr = (array) => {                                               // В аргумент передаем массив
    return Math.max(...array);
}
console.log(maxNumOfArr([3, 67, 15]));                                         // Пример из задания


/* 5. даны 2 4-х значных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах совпадают по
значению и позиции и сколько только по значению (3487 и 3794 ---> 1 и 2 ) ваш код должен работать с любыми заданными 2 числами.*/

const compareNumbers = (number1, number2) => {                                 // В аргумент передаем два числа
    let strNum1 = number1.toString();
    let strNum2 = number2.toString();
    let maxLength = Math.max(strNum1.length, strNum2.length);                  // Максимальная длина двух чисел
    let positionCount = 0;
    let onlyCount = 0;

    for (let i = 0; i < maxLength; i++) {
        if (strNum1[i] === strNum2[i]) {                                       // Поиск по позиции
            positionCount++;
        } else if (strNum2.includes(strNum1[i])) {                             // Поиск по значению
            onlyCount++;
        }
    }

    return `Совпадений по значению и позиции: ${positionCount}, Совпадений только по значению: ${onlyCount}`;

}
console.log(compareNumbers(3487, 3794));                                       // Пример из задания
