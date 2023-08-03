from libs.ducks.duck import Duck
from libs.behaviors.fly.flywithwings import FlyWithWings
from libs.behaviors.quack.quack import Quack

class MallardDuck(Duck): 
    flyBehavior = FlyWithWings()
    quackbehavior = Quack()

    def display(self):
        print("I am a mallard duck!")


    
