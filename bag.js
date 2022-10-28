"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bag = void 0;
class Bag {
    constructor(maxWeight, bagType) {
        this.maxWeight = maxWeight;
        this.bagType = bagType;
        this.presents = [];
    }
    addPresent(presents) {
        this.presents.push(presents);
    }
    // doesnt work - idk how to make it work sooo cannot finish the Bag part
    totalWeight() {
        return Object.keys(this.presents.weight).length;
    }
}
exports.Bag = Bag;
