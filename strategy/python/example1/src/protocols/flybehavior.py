from abc import abstractmethod
from typing import Protocol

class FlyBehavior(Protocol):
    @abstractmethod
    def fly() -> None:
        ...
