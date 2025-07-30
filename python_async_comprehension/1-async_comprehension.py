#!/usr/bin/env python3
"""
this is a module for interpreting python3
"""


import asyncio
from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> list[float]:
    """
    this is a async comprehension that collect 10
    random numbers
    """
    randNumbers = [randNumber async for randNumber in async_generator()]
    return randNumbers
