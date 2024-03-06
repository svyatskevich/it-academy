/*
1. Решить используя промисы и async/await. Сделайте 3 промиса, в каждом из которых расположена функция 
setTimeout со случайной задержкой от 1 до 5 секунд. Пусть первый промис возвращает число 1, второе - число 2,
третий - число 3.С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат 
его работы на экран. 
*/

const randomNumber = (min, max) => { return Math.floor(Math.random() * (max - min + 1)) + min; }

const returnPromise = (number) => {
    const delay = randomNumber(1000, 5000);                          // Рандом от 1 до 5 секунд
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ number, delay });                              // Возвращаем объект с числом и временем задержки
        }, delay);
    });
};

// Функция, которая выполняет три промиса и возвращает результат первого завершившегося
const racePromises = async () => {
    const firstPromise = returnPromise(1);
    const secondPromise = returnPromise(2);
    const thirdPromise = returnPromise(3);

    try {
        const result = await Promise.race([firstPromise, secondPromise, thirdPromise]);           // Ожидаем первый выполненный промис
        console.log(`Первым сработал промис: ${result.number}.`, 'Время задержки:', result.delay, 'миллисекунд');
    } catch (error) {
        console.error(error);                                                                     // Обрабатываем ошибки
    }
};
racePromises();                                                                                                      


/*
2. Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды
выведет случайное число от 1 до 5. Создайте async функцию, которая с помощью await будет 
дожидаться результата getNum, затем возводить его в квадрат и выводить на экран. 
+
3. Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды 
выведет случайное число от 1 до 5. Используйте также функцию getNum, чтобы вернуть промис,
который с задержкой в 5 секунд выведет случайное число от 6 до 10. Создайте async функцию, 
которая с помощью await будет дожидаться результата getNum, затем будет дожидаться результата getNum, 
а затем найдет сумму полученных чисел и выводит на экран. 
*/

const getNum = (min, max, delay) => {                                                    // Передаем min, max для рандома и задержку 
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(randomNumber(min, max));
        }, delay);
    });
};

const processNum = async () => {
    try {
        const result1 = await getNum(1, 5, 3000);                                        // Дожидаемся результата промиса
        const squaredNum = result1 ** 2;                                                 // Возводим случайное число в квадрат
        console.log(`Первое случайное число: ${result1}. Квадрат случайного числа: ${squaredNum}`);

        const result2 = await getNum(1, 5, 3000);                                        // Снова ждём, чтобы другое число было 
        const result3 = await getNum(6, 10, 5000);                                       // Дожидаемся результата промиса
        const sum = result2 + result3;                                                   // Находим сумму двух случайных чисел
        console.log(`Первое случайное число: ${result2}. Второе случайное число: ${result3}. Сумма двух случайных чисел: ${sum}`);
    } catch (error) {
        console.error(error);
    }
};
processNum();
