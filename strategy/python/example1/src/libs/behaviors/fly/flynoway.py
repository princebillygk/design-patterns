from protocols.flybehavior import FlyBehavior

class FlyNoWay(FlyBehavior):
    def fly(self):
        print("I can't fly, because I don't have wings!")
