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
info = obj[0]
alcohol = obj[1]
email = obj[2]
print('Data fed to python')
print(email)
wb = openpyxl.load_workbook('GCC Point Sheet Template 2015.06.19.xlsx')
inputSheet = wb['Input']
pointSheet = wb['Point']
fileSaved = False

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
print('Calling runMongo function()')
addPostToMongoDB('gcc', 'inventory', pointSheetComplete)
print('info written')

try:
    wb.save('test.xlsx')
    fileSaved = True
except:
    print('Failed to save spreadsheet')

if fileSaved == True:
    try:
        getEmailInformation('gccpointsheets@gmail.com', 'H3nD4wg!!', email, 'Dynamic Email Test', 'test.xlsx')
        print('Email sent.')
    except:
        print('Email failed to send')
elif fileSaved == False:
    print('New spreadsheet was not saved. Email not sent.')


# try:
#     getEmailInformation('taymosier@gmail.com', 'taymosier@gmail.com', 'hello', 'test.xlsx')
# except:
#     print('could not get email')
