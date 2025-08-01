#!/usr/bin/env python3
"""
this is a module for interpreting env python3
"""

import time


wait_n = __import__('1-concurrent_coroutines').wait_n


async def measure_time(n: int, max_delay: int) -> float:
    """
    Measures the total execution time of wait_n and return float
    Args : n: int and max_delay: int
    Return Float
    """
    start = time.perf_counter()
    await wait_n(n, max_delay)
    end = time.perf_counter()
    total_time = end - start
    try:
        delay = total_time / n
    except ZeroDivisionError:
        print("Please note that division by zero is not permitted.")
        return 0.00
    return delay
