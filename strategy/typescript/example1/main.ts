import { FlyRocketPowered } from "./libs/behaviors/fly/fly-rocket-powered";
import { MallardDuck } from "./libs/duck/mallard-duck";
import { ModelDuck } from "./libs/duck/model-duck";

const mallard = new MallardDuck();
mallard.performQuack();
mallard.performFly();

const model = new ModelDuck();
model.performQuack();
model.performFly();
model.setFlyBehaviour(new FlyRocketPowered());
model.performFly();
