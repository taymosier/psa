import openpyxl, sys, json, smtplib, pymongo
import numpy as np
from spreadSheet import pointDictionary, inputDictionary
from emailFunctions import getEmailInformation
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders
from mongoFunctions import addPostToMongoDB, updateExistingPost
from bson import ObjectId

f = sys.argv[1]
print('Loading JSON data.')
obj = json.loads(f)
print('JSON data loaded.')
print('Creating info array.')
print(obj)
info=obj[0]
print('Info array created.')
print('Creating alcohol array.')
alcohol = obj[1]
print('Alcohol array created.')
print('Creating point sheet object.')
print('date object')
print(obj[3])
pointSheetComplete = [info, alcohol]
print('Point sheet object created.')
print('Adding post to database.')
try:
 id = ObjectId(obj[2])
 id_string = str(id)
 document_id = {"_id": id}
except Exception as e:
 print(e)
try:
  print( obj[3])
except Exception as e:
  print(e)
try:
  info = obj[0]
  document_info = {'info': info}
except Exception as e:
  print(e)
try:
  inventory = obj[1]
except Exception as e:
  print(e)
print(obj)
if len(id_string) > 0:
    post = {
        "_id": id,
        "info": info,
        "inventory": obj[1],
        "date": str(obj[3])
    }
    print('rearranged')
    print(post)
    print('existing document found')
    try:
        updateExistingPost('gcc', 'inventory', post)
        print('Updated post.')
    except:
        print('Failed to update post.')
else:
    print('No existing document found')
    try:
        addPostToMongoDB('gcc', 'inventory', pointSheetComplete)
        print('Added post to database.')
    except:
        print('Failed to add post to database.')
