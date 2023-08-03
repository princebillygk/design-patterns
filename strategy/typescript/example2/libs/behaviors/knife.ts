import { Weapon } from "../../interfaces/weapon";

export class Knife implements Weapon {
  use(): void {
    console.log("Piercing with my knife!!!");
  }
}
