import openpyxl, sys, json, smtplib, pymongo
import numpy as np
from mongoFunctions import deletePostFromMongoDB

f = sys.argv[1]
obj = json.loads(f)
print('p')
print(obj[0])

deletePostFromMongoDB('gcc', 'inventory', obj[0])
