/* Пояснение: Когда создается новый экземпляр класса TravelAgency (Тур. Агентство), 
конструктор вызывается автоматически. Внутри конструктора проверяем, существует ли уже 
экземпляр класса TravelAgency, если да, то возвращаем ссылку на него. Если экземпляр еще не создан,
создаем новый экземпляр, добавляем массив для хранения путевок и сохраняем ссылку на созданный экземпляр в 
статическом свойстве instance. Таким образом, мы можем гарантировать наличие единственного 
экземпляра класса TravelAgency (Тур. Агентство). (Singletone) */

const TravelPackage = require('./TravelPackage.js');

class TravelAgency {
    constructor() {
        // Проверяем, существует ли уже экземпляр класса TravelAgency
        if (TravelAgency.instance) {
            // Если экземпляр уже существует, возвращаем его                                                       
            return TravelAgency.instance;
        }
        // Если экземпляр еще не существует, сохраняем ссылку на текущий экземпляр
        TravelAgency.instance = this;
        // Создаем массив для хранения путевок                                                     
        this.packages = [];
    }

    addPackage(travelPackage) {
        // Проверяем, является ли travelPackage экземпляром класса TravelPackage
        if (!(travelPackage instanceof TravelPackage)) {
            // Если объект не является экземпляром TravelPackage, выбрасываем ошибку
            throw new Error('Объект не является экземпляром TravelPackage');

        }
        // Добавляем travelPackage в массив путевок
        this.packages.push(travelPackage);
    }

    filterByType(type) {
        // Фильтруем путевки по типу
        return this.packages.filter(travelPackage => travelPackage.type === type);
    }

    filterByTransport(transport) {
        // Фильтруем путевки по виду транспорта
        return this.packages.filter(travelPackage => travelPackage.transport === transport);
    }

    filterByMealType(mealType) {
        // Фильтруем путевки по типу питания
        return this.packages.filter(travelPackage => travelPackage.mealType === mealType);
    }

    filterByTransportAndMealType(transport, mealType) {
        // Фильтруем путевки по типу транспорта и питания
        return this.packages.filter(travelPackage => travelPackage.transport === transport && travelPackage.mealType === mealType);
    }

    sortByDuration() {
        // Сортируем путевки по продолжительности
        this.packages.sort((a, b) => a.duration - b.duration);
    }

    sortByCost() {
        // Сортируем путевки по стоимости
        this.packages.sort((a, b) => {
            // Убираем символ доллара и преобразуем в число
            const costA = parseFloat(a.cost.replace('$', ''));
            const costB = parseFloat(b.cost.replace('$', ''));

            // Сравниваем стоимости для сортировки
            return costA - costB;
        });
    }
}

module.exports = TravelAgency;