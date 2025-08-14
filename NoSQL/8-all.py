#!/usr/bin/python3


def list_all(mongo_collection):
    """
    Lists all documents in a MongoDB collection.
    
    Args:
        mongo_collection: pymongo collection object

    Returns:
        list of documents (empty list if none found)
    """
    return list(mongo_collection.find()) if mongo_collection.count_documents({}) > 0 else []
