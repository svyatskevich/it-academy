const TravelAgency = require('./TravelAgency.js');
const RelaxPackage = require('./RelaxPackage.js');
const HealthPackage = require('./HealthPackage.js');
const ExcursionPackage = require('./ExcursionPackage.js');
const CruisePackage = require('./CruisePackage.js');
const ShoppingPackage = require('./ShoppingPackage.js');

// Создаем экземпляр агенства
const travelAgency = new TravelAgency();           

// Создаем экземпляры различных типов путевок
const package1 = new RelaxPackage('Авиа', 'Все включено', 7, 700);
const package2 = new ExcursionPackage('Автобус', 'Завтраки', 5, 1000);
const package3 = new HealthPackage('Поезд', 'Полупансион', 14, 1500);
const package4 = new ShoppingPackage('Автобус', 'Без завтраков', 6, 300);
const package5 = new CruisePackage('Корабль', 'Все включено', 9, 2000);
const package6 = new RelaxPackage('Поезд', 'Завтраки', 10, 600);
const package7 = new HealthPackage('Автобус', 'Полупансион', 12, 1200);

// Добавляем путевки в агентство
travelAgency.addPackage(package1);
travelAgency.addPackage(package2);
travelAgency.addPackage(package3);
travelAgency.addPackage(package4);
travelAgency.addPackage(package5);
travelAgency.addPackage(package6);
travelAgency.addPackage(package7);

// Фильтруем путевки по типу и выводим результат
console.log('--- Путевки по типу "Отдых" ---');
console.log(travelAgency.filterByType('Отдых'));

// Фильтруем путевки по типу транспорта и выводим результат
console.log('--- Путевки с транспортом "Авиа" ---');
console.log(travelAgency.filterByTransport('Авиа'));

// Фильтруем путевки по типу питания и выводим результат
console.log('--- Путевки с питанием "Завтраки" ---');
console.log(travelAgency.filterByMealType('Завтраки'));

// Фильтруем путевки по типу транспорта и питания и выводим результат
console.log('--- Путевки с транспортом "Автобус" и питанием "Без завтраков" ---');
console.log(travelAgency.filterByTransportAndMealType('Автобус', 'Без завтраков'));

// Сортируем путевки по продолжительности и выводим результат
console.log('--- Путевки отсортированные по продолжительности ---');
travelAgency.sortByDuration();
console.log(travelAgency.packages);

// Сортируем путевки по стоимости и выводим результат
console.log('--- Путевки отсортированные по стоимости ---');
travelAgency.sortByCost();
console.log(travelAgency.packages);