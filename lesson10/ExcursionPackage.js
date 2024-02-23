// Тип путевок: Экскурсия

const TravelPackage = require('./TravelPackage.js');

class ExcursionPackage extends TravelPackage {
    constructor(transport, mealType, duration, cost) {
        super('Экскурсия', transport, mealType, duration, cost);
    }
}

module.exports = ExcursionPackage;