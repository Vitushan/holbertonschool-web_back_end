#!/usr/bin/env python3
"""
this module for interpreting env python3
"""

import asyncio
from typing import List


wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawn wait_random n times with the specified max_delay.
    Return the list of all delays in ascending order without using sort().
    """
    tasks = [wait_random(max_delay) for _ in range(n)]
    results = []

    for coro in asyncio.as_completed(tasks):
        delay = await coro
        results.append(delay)

    return results
