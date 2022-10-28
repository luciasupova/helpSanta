import { Bag } from "./bag";
import { Santa } from "./santa";
import { Sled } from "./sled";
import { BagType, PresentType } from "./types";
import { Present } from "./present";

const santa1 = new Santa ("Klaus", 45);
const sled1 = new Sled (santa1);
const bag1 = new Bag (10, BagType.Canvas);
const present1 = new Present("machine", 8, PresentType.Hard);
const present2 = new Present("cat", 3, PresentType.Soft)

bag1.addPresent(present1);
bag1.addPresent(present2);

sled1.addBag(bag1);