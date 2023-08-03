import { FlyBehavior } from "../../../interfaces/fly-behaviour";

export class FlyRocketPowered implements FlyBehavior {
  public fly(): void {
    console.log("I'm flying with a rocket! aaaaaaaa!!");
  }
}
