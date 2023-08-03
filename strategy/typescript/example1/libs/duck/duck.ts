import { FlyBehavior } from "../../interfaces/fly-behaviour";
import { QuackBehaviour } from "../../interfaces/quack-behaviour";

export abstract class Duck {
  protected abstract flyBehaviour: FlyBehavior;
  protected abstract quackBehaviour: QuackBehaviour;

  constructor() {
    console.log("Initiated duck class");
  }

  public abstract display(): void;

  public setFlyBehaviour(fb: FlyBehavior): void {
    this.flyBehaviour = fb;
  }

  public setQuackBehaviour(qb: QuackBehaviour): void {
    this.quackBehaviour = qb;
  }

  public performFly(): void {
    this.flyBehaviour.fly();
  }

  public performQuack(): void {
    this.quackBehaviour.quack();
  }

  public swim(): void {
    console.log("All ducks can swim");
  }
}
