#!/usr/bin/env python3
"""
This is a module for interpreting python3
"""


#!/usr/bin/env python3
"""
This module defines a function to insert a document into a MongoDB collection.
"""

def insert_school(mongo_collection, **kwargs):
    """
    Inserts a new document in a MongoDB collection based on kwargs.

    Args:
        mongo_collection: The pymongo collection object.
        **kwargs: Key-value pairs representing fields of the document.

    Returns:
        The _id of the newly inserted document.
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
