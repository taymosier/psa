import openpyxl, sys, json, smtplib, pymongo
import numpy as np
from spreadSheet import pointDictionary, inputDictionary
from emailFunctions import getEmailInformation
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders
from mongoFunctions import addPostToMongoDB

f = sys.argv[1]
print('Loading JSON data.')
obj = json.loads(f)
print('JSON data loaded.')
print('Creating info array.')
info=obj[0]
print('Info array created.')
print('Creating alcohol array.')
alcohol = obj[1]
print('Alcohol array created.')
print('Creating point sheet object.')
pointSheetComplete = [info, alcohol]
print('Point sheet object created.')
print('Adding post to database.')
try:
    addPostToMongoDB('gcc', 'inventory', pointSheetComplete)
    print('Added post to database.')
except:
    print('Failed to add post to database.')
