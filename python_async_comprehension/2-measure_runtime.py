#!/usr/bin/env python3
"""
this is a module for intepretting python3
"""

import asyncio
import random

async def async_generator():
    """
    this is a async def generator
    """
    for _ in range(10):
        await asyncio.sleep(1)
        random.randint(0, 10)
