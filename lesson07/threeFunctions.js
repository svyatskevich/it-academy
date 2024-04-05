/* 1. Подсчитать количество Пятниц 13-ого с любого заданного числа прошлого (например с 01.01.2000) до сегодня. 
Ваш код должен иметь возможность считать количество дней на любую заданную в переменной первоначальную дату и
считать верно через 10-15-20 лет. Решение должно быть написано функцией.*/

const countFriday13 = (startDateString) => {
    let countFriday = 0;
    let startDate = new Date(startDateString);                            // Первоначальная дата
    let currentDate = new Date();                                         // Текущая дата

    while (startDate <= currentDate) {
        if (startDate.getDate() === 13 && startDate.getDay() === 5) {     
            countFriday++;
        }
        startDate.setDate(startDate.getDate() + 1);                       // Увеличиваем на один день
    }

    return countFriday;
}

const startDate = '2000-01-01';                                          
const startDate1 = '2020-01-01';                                       
console.log('Количество пятниц 13-ого с', startDate, 'до сегодня:', countFriday13(startDate));    // Пример из задании
console.log('Количество пятниц 13-ого с', startDate1, 'до сегодня:', countFriday13(startDate1));  // Через 20 лет


/* 2. Дана строка из четного количества цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. 
Если это так - выведите 'да', в противном случае выведите 'нет'. Решение должно быть написано функцией и принимать 
любое число.*/

const checkSumNum = (str) => {
    if (str.length % 2 !== 0) {
        return 'Ошибка: Длина строки должна быть из четного количества цифр';                  // Проверяем строку на четность
    }

    let firstHalf = str.slice(0, str.length / 2);                                              // Находим половинки
    let secondHalf = str.slice(str.length / 2);
    let sumFirstHalf = firstHalf.split('').reduce((acc, num) => acc + parseInt(num), 0);       // Находим суммы половинок
    let sumSecondHalf = secondHalf.split('').reduce((acc, num) => acc + parseInt(num), 0);     

   // console.log(`Сумма первой половины: ${sumFirstHalf}`);                                   // Если нужно будет проверить суммы                
   // console.log(`Сумма второй половины: ${sumSecondHalf}`); 

    if (sumFirstHalf === sumSecondHalf) {
        return 'да';
    } else {
        return 'нет';
    }
}

console.log(checkSumNum("123321"));           // 6 6     
console.log(checkSumNum("123456"));           // 6 15


/* 3. Дан массив arr. Найдите среднее арифметическое его элементов. 
Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
Решение должно быть написано функцией и принимать любое массив.*/

const arrAverage = (arr) => {
    let sumNum = arr.reduce((acc, arr) => acc + arr, 0);       // Находим сумму
    return sumNum / arr.length;                                // Находим среднее арифметическое
}
console.log(arrAverage([12, 15, 20, 25, 59, 79]));             // Пример с задания
console.log(arrAverage([5, 20, 45, 82]));                      
