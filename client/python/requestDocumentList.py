import pymongo, datetime, json, pprint, sys
from spreadSheet import pointDictionary, inputDictionary
from pymongo import MongoClient

client = MongoClient('localhost', 27017)
gcc_db = client['gcc']
collection_instance = gcc_db['inventory']
cursor = collection_instance.find({})
documents = []
for document in cursor:
    documents.append(document)
print(documents)
