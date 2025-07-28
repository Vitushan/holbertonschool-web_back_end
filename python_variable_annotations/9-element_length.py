#!/usr/bin/env python3
"""
This module provides operations
to get length information for sequence elements.
"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Return a list of tuples
    containing each sequence and its length.
    """
    return [(i, len(i)) for i in lst]
