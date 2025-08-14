#!/usr/bin/python3


def list_all(mongo_collection):
    return list(mongo_collection.find())
