import { QuackBehaviour } from "../../../interfaces/quack-behaviour";

export class Quack implements QuackBehaviour {
  public quack(): void {
    console.log("Quack, Quack, Quack!!!");
  }
}
