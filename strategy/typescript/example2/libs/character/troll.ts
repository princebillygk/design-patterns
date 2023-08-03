import { Axe } from "../behaviors/axe";
import { Character } from "./character";

export class Troll extends Character {
  protected weapon = new Axe();
  display(): void {
    console.log("Vowwwww");
  }
}
