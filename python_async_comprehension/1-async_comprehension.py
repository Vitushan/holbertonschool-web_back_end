#!/usr/bin/env python3
"""
this is a module for interpreting python3
"""


import asyncio
import random


async_generator = __import__('0-async_generator').async_generator


async def async_comprehension():
    """
    this is a async def comprehension
    """
    randNumbers = [randNumber async for randNumber in async_generator()]
    return randNumbers
