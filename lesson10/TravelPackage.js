/* Предметная область: Туристические путевки. Сформировать набор предложений клиенту по
выбору туристической путевки различного типа для оптимального выбора. Учитывать возможность 
выбора транспорта, питания и числа дней. Реализовать выбор и сортировку путевок. */

class TravelPackage {
    constructor(type, transport, mealType, duration, cost) {
        // Тип путевки
        this.type = type;
        // Транспорт                               
        this.transport = transport;
        // Тип питания
        this.mealType = mealType;
        // Кол-во дней
        this.duration = duration;
        // Стоимость
        this.cost = `$${cost.toFixed(0)}`;
    }
}

module.exports = TravelPackage;