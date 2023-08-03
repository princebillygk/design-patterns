from abc import abstractmethod
from typing import Protocol

class QuackBehavior(Protocol):
    @abstractmethod
    def quack() -> None:
        ...
