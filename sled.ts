import {Santa} from "./santa";
import {Bag} from "./bag";

export class Sled {
 typeSanta: Santa;
 multipleBag: Bag[];

    constructor(typeSanta: Santa,) {
        this.typeSanta = typeSanta;
        this.multipleBag = [];
    }
// idk what im doing here
    addBag(bag: Bag) {
        this.multipleBag.push(bag)
    }

    setSanta() {
        console.log()
    }
};

//couldnt finish the bag part so cant finish sled one either
