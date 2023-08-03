import { Weapon } from "../../interfaces/weapon";

export class Sword implements Weapon {
  use(): void {
    console.log("I will shed your blood!");
  }
}
