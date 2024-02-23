// Тип путевок: Круиз

const TravelPackage = require('./TravelPackage.js');

class CruisePackage extends TravelPackage {
    constructor(transport, mealType, duration, cost) {
        super('Круиз', transport, mealType, duration, cost);
    }
}

module.exports = CruisePackage;