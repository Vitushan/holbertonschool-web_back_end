#!/usr/bin/env python3
"""
this module for interpreting env python3
"""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
     asynchronous coroutine that takes
     in an integer argument (max_delay,
     with a default value of 10) named wait_random
     that waits for a random delay between 0 and
     max_delay (included and float value) seconds
     and eventually returns it.
    """
    ranDom = random.uniform(0, max_delay)

    await asyncio.sleep(ranDom)
    return ranDom
