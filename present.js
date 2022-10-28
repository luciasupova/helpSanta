"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Present = void 0;
class Present {
    constructor(name, weight, presentType) {
        this.name = name;
        this.weight = weight;
        this.presentType = presentType;
    }
    getThePresentType() {
        console.log("this is the type of the present: " + this.presentType);
    }
    getTheWeight() {
        console.log("this is the weight of the present: " + this.weight);
    }
    print() {
        console.log(this.name + "" + this.weight + "" + this.presentType);
    }
}
exports.Present = Present;
