import { Sword } from "../behaviors/sword";
import { Character } from "./character";

export class Knight extends Character {
  protected weapon = new Sword();

  display(): void {
    console.log("I am a knight");
  }
}
