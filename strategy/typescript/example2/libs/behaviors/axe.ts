import { Weapon } from "../../interfaces/weapon";

export class Axe implements Weapon {
  use(): void {
    console.log("Take my axe!!!");
  }
}
