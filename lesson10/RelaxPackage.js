// Тип путевок: Отдых

const TravelPackage = require('./TravelPackage.js');

class RelaxPackage extends TravelPackage {
    constructor(transport, mealType, duration, cost) {
        super('Отдых', transport, mealType, duration, cost);
    }
}

module.exports = RelaxPackage;







