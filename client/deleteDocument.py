import openpyxl, sys, json, smtplib, pymongo
import numpy as np
from mongoFunctions import deleteExistingPost
from bson import ObjectId


f = sys.argv[1]
obj = json.loads(f)
print('deleteDocument.py')
print(obj[0])
objID = ObjectId(obj[0])

deleteExistingPost('gcc', 'inventory', objID)
