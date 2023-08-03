import { QuackBehaviour } from "../../../interfaces/quack-behaviour";

export class Squeak implements QuackBehaviour {
  public quack(): void {
    console.log("Squeak!!!!!!!!");
  }
}
