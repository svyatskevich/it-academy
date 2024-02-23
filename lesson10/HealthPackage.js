// Тип путевок: Лечение

const TravelPackage = require('./TravelPackage.js');

class HealthPackage extends TravelPackage {
    constructor(transport, mealType, duration, cost) {
        super('Лечение', transport, mealType, duration, cost);
    }
}

module.exports = HealthPackage;