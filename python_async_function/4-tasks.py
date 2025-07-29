#!/usr/bin/env python3
"""
this module for interpreting env python3
"""

import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random

async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawn task_wait_random n times with the specified max_delay.
    Return the list of all delays in ascending order without using sort().
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    results = []

    for task in asyncio.as_completed(tasks):
        delay = await task
        results.append(delay)

    return results
