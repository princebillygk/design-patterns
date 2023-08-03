import { QuackBehaviour } from "../../../interfaces/quack-behaviour";

export class MuteQuack implements QuackBehaviour {
  public quack(): void {
    console.log("<<Shhhhh!!!>>");
  }
}
