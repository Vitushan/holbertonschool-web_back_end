#!/usr/bin/env python3
"""
this is a module for intepretting python3
"""

import asyncio
import time


async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime():
    """
    this is a async comprehension
    measure and return total runtime
    """
    print(f"{time.strftime('%X')}")
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )
    print(f"{time.strftime('%X')}")
asyncio.run(measure_runtime())
