import { Sword } from "../behaviors/sword";
import { Character } from "./character";

export class King extends Character {
  protected weapon = new Sword();

  display(): void {
    console.log("I am a king");
  }
}
