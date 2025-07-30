#!/usr/bin/env python3
"""
this is a module for intepretting python3
"""


import asyncio
import random
from typing import Generator



async def async_generator():
    """
    This is a async generator function
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.randint(0, 10)
