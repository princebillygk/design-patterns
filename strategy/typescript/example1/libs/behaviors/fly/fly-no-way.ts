import { FlyBehavior } from "../../../interfaces/fly-behaviour";

export class FlyNoWay implements FlyBehavior {
  public fly(): void {
    console.log("I can't fly. :')");
  }
}
