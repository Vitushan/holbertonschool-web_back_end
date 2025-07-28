#!/usr/bin/env python3
"""
This module provides function factory operations for creating multiplier functions.
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Create and return a function that multiplies a float by the given multiplier.
    """
    def multiply_function(value: float) -> float:
        """Multiply the input value by the multiplier."""
        return value * multiplier
    
    return multiply_function
