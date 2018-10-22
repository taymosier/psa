import openpyxl, sys, json, smtplib, pymongo
import numpy as np
from spreadSheet import pointDictionary, inputDictionary
from emailFunctions import getEmailInformation
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders
from mongoFunctions import addPostToMongoDB, writePointDataToExcel, writeInfoDataToExcel

f = sys.argv[1]
obj = json.loads(f)
info=obj[0]
alcohol = obj[1]
wb = openpyxl.load_workbook('GCC Point Sheet Template 2015.06.19.xlsx')
inputSheet = wb.get_sheet_by_name('Input')
pointSheet = wb.get_sheet_by_name('Point')

try:
    writePointDataToExcel(alcohol, pointSheet)
except:
    print('something went wrong writing inventory')
try:
    writeInfoDataToExcel(info, inputSheet)
except:
    print('something went wrong writing info')
print('Generating mongodb data object')
pointSheetComplete = [info, alcohol]
print('Object created')
print('Initializing MongoDB process.')
print('Calling runMongo function()')
addPostToMongoDB('gcc', 'inventory', pointSheetComplete)
print('info written')

try:
    wb.save('test.xlsx')
except:
    print('Failed to save spreadsheet')

try:
    getEmailInformation('taymosier@gmail.com', 'W1nter!!!!', 'tamosier@ncsu.edu', 'Function', 'test.xlsx')
    print('info posted')
except:
    print('Email failed to send')



# try:
#     getEmailInformation('taymosier@gmail.com', 'taymosier@gmail.com', 'hello', 'test.xlsx')
# except:
#     print('could not get email')
