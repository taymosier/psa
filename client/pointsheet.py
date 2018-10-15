import openpyxl, sys, json
import numpy as np
from spreadSheet import pointDictionary, inputDictionary

def writePointDataToExcel(data, page):
    for item in data:
        for element in pointDictionary:
            if (item["name"] == element["name"]):
                page[element['issued']] = item["issued"]
                page[element['returned']] = item["returned"]
                # print(pointSheet[element['issued']].value)
                # print(pointSheet[element['returned']].value)
                # print('-----')


def writeInfoDataToExcel(data, page):
    print(data)
    for element in inputDictionary:
        field = element['name']
        cellLocation = element["location"]
        format = element["format"]
        if(format == 'percentage'):
            data[field] = data[field]+'%'
            print(data[field])
        elif(format == 'currency'):
            data[field] = '$'+ data[field]
        # print(page[data[field]])
        print(field)
        print(data[field])
        print(format)
        page[cellLocation] = data[field]
        print(page[cellLocation].value)
# TODO
# include number format as parameter within inputDictionary objects

f = sys.argv[1]
obj = json.loads(f)
info = obj[0][0]
alcohol = np.split(obj[1],[27, 38])
liquor=alcohol[0]
beer=alcohol[1]
wine=alcohol[2]

wb = openpyxl.load_workbook('GCC Point Sheet Template 2015.06.19.xlsx')
inputSheet = wb.get_sheet_by_name('Input')
pointSheet = wb.get_sheet_by_name('Point')


writePointDataToExcel(liquor, pointSheet)
writePointDataToExcel(beer, pointSheet)
writePointDataToExcel(wine, pointSheet)
writeInfoDataToExcel(info, inputSheet)

try:
    wb.save('test.xlsx')
except:
    print('Failed to save spreadsheet')
