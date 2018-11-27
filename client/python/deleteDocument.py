import openpyxl, sys, json, smtplib, pymongo
import numpy as np
from mongoFunctions import deleteExistingPost
from bson import ObjectId


f = sys.argv[1]
obj = json.loads(f)
print('deleteDocument.py')
print(obj[0])
print('obj[1]:')
print(obj[1])
objID = ObjectId(obj[0])

deleteExistingPost('gcc', obj[1], objID)
print('Python script:')
print("finished")
