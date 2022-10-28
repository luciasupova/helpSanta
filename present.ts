import { PresentType } from "./types"

export class Present {
    name: string;
    weight: number;
    presentType: PresentType;

        constructor(name: string, weight: number, presentType: PresentType) {
            this.name = name;
            this.weight = weight;
            this.presentType = presentType;
        }

        getThePresentType() {
            console.log("this is the type of the present: " + this.presentType)
        }

        getTheWeight() {
            console.log("this is the weight of the present: " + this.weight)
        }

        print():void {
            console.log(this.name + "" + this.weight + "" + this.presentType)
        }
}