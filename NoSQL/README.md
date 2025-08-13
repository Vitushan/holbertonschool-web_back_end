mongod --dbpath /path/to/your/data/folder

mongo



from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")
db = client["my_database"]
collection = db["my_collection"]

# Add a document
collection.insert_one({"name": "Alice", "age": 25})

# Find a document
result = collection.find_one({"name": "Alice"})
print(result)

# Update a document
collection.update_one({"name": "Alice"}, {"$set": {"age": 26}})

# Delete a document
collection.delete_one({"name": "Alice"})
