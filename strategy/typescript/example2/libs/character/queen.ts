import { Knife } from "../behaviors/knife";
import { Character } from "./character";

export class Queen extends Character {
  protected weapon = new Knife();
  display(): void {
    console.log("I am a queen");
  }
}
