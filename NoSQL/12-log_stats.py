#!/usr/bin/env python3
"""
This is a module for interpreting python3
"""

#!/usr/bin/env python3
"""
Script that provides stats about Nginx logs stored in MongoDB.

Database: logs
Collection: nginx
"""

from pymongo import MongoClient

def print_nginx_stats():
    client = MongoClient()
    db = client.logs
    nginx_collection = db.nginx

    # Total number of logs
    total_logs = nginx_collection.count_documents({})

    print(f"{total_logs} logs")
    print("Methods:")

    # List of HTTP methods in requested order
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]

    for method in methods:
        count = nginx_collection.count_documents({"method": method})
        print
