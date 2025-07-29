#!/usr/bin/env python3
"""
this module for interpreting env python3
"""


import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Return an asyncio.Task for the wait_random coroutine with max_delay.
    """
    return
