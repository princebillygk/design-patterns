from protocols.quackbeahavior import QuackBehavior

class MuteQuack(QuackBehavior):
    def quack(self):
        print("...")
