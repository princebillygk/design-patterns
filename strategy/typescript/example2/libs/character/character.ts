import { Weapon } from "../../interfaces/weapon";

export abstract class Character {
  protected abstract weapon: Weapon;
  abstract display(): void;

  public setWeapon(wp: Weapon) {
    this.weapon = wp;
  }

  public fight() {
    this.weapon.use();
  }
}
