#!/usr/bin/env python3
"""
This module provides list
summation operations
for mixed integer and float lists.
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Calculate the sum of
    a mixed list of integers
    and floats and return as float.
    """
    return sum(mxd_lst)
