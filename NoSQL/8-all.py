#!/usr/bin/python3


def list_all(mongo_collection):
    """
    function list all
    """
    return list(mongo_collection.find())
