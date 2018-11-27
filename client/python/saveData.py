import openpyxl, sys, json, smtplib, pymongo
import numpy as np
from mongoFunctions import addPostToMongoDB
from bson import ObjectId

f = sys.argv[1]
print('Loading JSON data.')
obj = json.loads(f)
print(obj[0])
newEmail = obj[0]
collection = obj[1]
entry = { "email": newEmail }
print(entry)
addPostToMongoDB('gcc', obj[1], entry)
