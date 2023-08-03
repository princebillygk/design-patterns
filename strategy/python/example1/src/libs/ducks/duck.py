from abc import ABC, abstractmethod, abstractproperty
from protocols.flybehavior import FlyBehavior
from protocols.quackbeahavior import QuackBehavior
from libs.behaviors.quack.quack import Quack
from libs.behaviors.fly.flywithwings import FlyWithWings

class Duck(ABC):
    flyBehavior: FlyBehavior
    quackbehavior: QuackBehavior

    @abstractmethod
    def display(self) -> None:
        ...


    def performFly(self): 
        self.flyBehavior.fly()

    def performQuack(self):
        self.quackbehavior.quack()

    def swim(self): 
        print("All of our variants can float!")




