import { FlyNoWay } from "../behaviors/fly/fly-no-way";
import { Quack } from "../behaviors/quack/quack";
import { Duck } from "./duck";

export class ModelDuck extends Duck {
  protected flyBehaviour = new FlyNoWay();
  protected quackBehaviour = new Quack();

  public display(): void {
    console.log("I'm a model duck");
  }
}
