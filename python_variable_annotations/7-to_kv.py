#!/usr/bin/env python3
"""
This module provides key-value tuple creation operations with squared values.
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Create a tuple with a string key
    and the square of a numeric value as float.
    """
    return (k, float(v * v))
