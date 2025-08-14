#!/usr/bin/env python3
"""
This is a module for interpreting python3
"""


#!/usr/bin/env python3
"""
This module defines a function to list schools by a specific topic.
"""

def schools_by_topic(mongo_collection, topic):
    """
    Returns the list of school documents having a specific topic.

    Args:
        mongo_collection: The pymongo collection object
        topic (str): The topic to search for

    Returns:
        list: List of matching school documents
    """
    return list(mongo_collection.find({"topics": topic}))
