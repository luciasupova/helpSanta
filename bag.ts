import { BagType } from "./types";
import { Present } from "./present";

export class Bag {
    maxWeight: number;
    bagType: BagType;
    presents: Present[];

    constructor(maxWeight: number, bagType: BagType) {
        this.maxWeight = maxWeight;
        this.bagType = bagType;
        this.presents = [];
    }

        addPresent(presents: Present) {
            this.presents.push(presents)
        }

        // doesnt work - idk how to make it work sooo cannot finish the Bag part
        totalWeight() {
           // return Object.keys(this.presents.weight).length
        }

    }
