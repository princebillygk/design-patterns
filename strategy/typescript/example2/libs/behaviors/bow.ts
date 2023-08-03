import { Weapon } from "../../interfaces/weapon";

export class BowAndArrow implements Weapon {
  use(): void {
    console.log("I will make hole in you!");
  }
}
