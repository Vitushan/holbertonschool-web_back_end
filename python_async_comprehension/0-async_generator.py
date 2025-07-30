#!/usr/bin/env python3
"""
this is a module for interpreting python3
"""

from typing import Generator
import asyncio
import random


async def async_generator():
    """
    This is a async generator function
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.randint(0, 10)
