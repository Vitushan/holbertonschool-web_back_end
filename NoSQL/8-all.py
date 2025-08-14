#!/usr/bin/env python3
"""
This is a module for interpreting python3
"""

def list_all(mongo_collection):
    """
    function list all
    """
    if mongo_collection is None:
        return []
    return list(mongo_collection.find())
