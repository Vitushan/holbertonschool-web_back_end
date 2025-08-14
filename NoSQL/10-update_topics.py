#!/usr/bin/env python3
"""
This is a module for interpreting python3
"""


#!/usr/bin/env python3
"""
This module defines a function to update the topics of a school document.
"""

def update_topics(mongo_collection, name, topics):
    """
    Changes all topics of a school document based on the name.

    Args:
        mongo_collection: The pymongo collection object
        name (str): The school name to update
        topics (list of str): The list of topics approached in the school

    Returns:
        None
    """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
