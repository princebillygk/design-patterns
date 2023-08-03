import { FlyBehavior } from "../../../interfaces/fly-behaviour";

export class FlyWithWings implements FlyBehavior {
  public fly(): void {
    console.log("Weeeeee!");
  }
}
