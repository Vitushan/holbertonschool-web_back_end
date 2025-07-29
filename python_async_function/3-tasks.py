#!/usr/bin/env python3
"""
this module for interpreting env python3
"""


import asyncio
from typing import Any
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task[Any]:
    """
    Return an asyncio.Task for the wait_random coroutine with max_delay
    """
    task = wait_random(max_delay)
    return asyncio.create_task(task)
