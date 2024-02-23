// Тип путевок: Шоппинг

const TravelPackage = require('./TravelPackage.js');

class ShoppingPackage extends TravelPackage {
    constructor(transport, mealType, duration, cost) {
        super('Шоппинг', transport, mealType, duration, cost);
    }
}

module.exports = ShoppingPackage;