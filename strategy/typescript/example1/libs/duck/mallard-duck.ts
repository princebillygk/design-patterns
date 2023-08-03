import { FlyWithWings } from "../behaviors/fly/fly-with-wings";
import { Quack } from "../behaviors/quack/quack";
import { Duck } from "./duck";

export class MallardDuck extends Duck {
  protected flyBehaviour = new FlyWithWings();
  protected quackBehaviour = new Quack();

  public display(): void {
    console.log("I'm a real mallard duck");
  }
}
