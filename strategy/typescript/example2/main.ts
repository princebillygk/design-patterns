import { Knife } from "./libs/behaviors/knife";
import { King } from "./libs/character/king";
import { Knight } from "./libs/character/knight";
import { Queen } from "./libs/character/queen";
import { Troll } from "./libs/character/troll";

const king = new King();
king.display();
king.fight();

const queen = new Queen();
queen.display();
queen.fight();

const knight = new Knight();
knight.display();
knight.fight();

const troll = new Troll();
troll.display();
troll.fight();
troll.setWeapon(new Knife());
troll.fight();
