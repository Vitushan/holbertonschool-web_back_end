#!/usr/bin/en python3
"""
This is a module for interpeting python3
"""


from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    This is a function for calculate the sum of a mixed list of integers and floats and returns as float
    """
    return sum(mxd_lst)
