#!/usr/bin/env python3
"""
this is a module for interpreting python3
"""


import asyncio
from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    this is a async comprehension that collect 10
    random numbers
    """
    rand_numbers = [rand_number async for rand_number in async_generator()]
    return rand_numbers
