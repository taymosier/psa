import pymongo, datetime, json, pprint
from spreadSheet import pointDictionary, inputDictionary
from pymongo import MongoClient
from bson import ObjectId


def getDatabase(client, database):
    db = client[database]
    return db


def getCollection(database, collection):
    temp = database[collection]
    return temp


def generateInfoFormat(info):
    print('Formatting info section')
    try:
        post = []
        for item in info:
            post.append({item: info[item]})
    except:
        print('Info section formatting error.')
    print('Info section formatted')
    return post


def formatAlcohol(alc):
    result = []
    for item in alc:
        result.append(item)
    return result


def formatInfo(info):
    result = []
    print('formatInfo')
    print(info)
    for item in info:
        result.append(item)
    print()
    print(result)
    return result


def writePointDataToExcel(data, page):
    print('Writing inventory data to excel')
    for item in data:
        name = item["name"]
        for element in pointDictionary:
            try:
                issued = element["issued"]
                returned = element["returned"]
            except:
                print("failed to create variables")
            if(element["name"] == name):
                try:
                    page[issued] = item['quantity']["issued"]
                except:
                    print('Error: ' + page[issued])
                try:
                    page[returned] = item['quantity']["returned"]
                except:
                    print('Error: ' + page[returned])
    print('Finished writing inventory data')


def writeInfoDataToExcel(data, page):
    print('Writing event information to excel')
    for element in inputDictionary:
        index = int(element["index"])
        name = element["name"]
        location = element["location"]
        try:
            page[location] = data[element["name"]]
        except:
            print('data[index][name] is incorrect')
    print('Finished writing event information to excel')


def generatePost(info, inventory):
    print('generatePost() called')
    # infoData = formatInfo(info)
    try:
        post = {
            "info": info,
            "inventory": inventory,
            "date": datetime.datetime.now().strftime("%y-%m-%d-%H-%M")
        }
    except:
        print('Post generation failed.')
    # print(post)
    return post


def formatPostData(data):
    print('Format Post Data')
    print(data)
    info = data[0]
    alcohol = data[1]
    post = generatePost(info, alcohol)
    return post


def addPostToMongoDB(database, collection, data):
    print('Beginning mongo')
    print('Starting client.')
    client = MongoClient('localhost', 27017)
    print('Client initialized.')
    gcc_db = client[database]

    print('Database found.')
    collection_instance = gcc_db[collection]
    print('Collection found.')
    print('Generating post.')

    post = formatPostData(data)
    print('Post generated.')
    try:
        collection_instance.insert_one(post)
        print('Post inserted to database ' + database + ' in collection ' + collection + '.')
    except:
        print('Failed to post data to database.')


def updateExistingPost(database, collection, data):
    print('Updating existing document')
    client = MongoClient('localhost', 27017)
    gcc_db = client[database]
    collection_instance = gcc_db[collection]
    print('update data:')
    print(type(data["_id"]))
    try:
      collection_instance.replace_one(
        {"_id": data['_id']},
        {
            "_id": data["_id"],
            "info": data["info"],
            "inventory": data["inventory"],
            "date": data["date"]
        },
        True)
      print('Post inserted to database ' + database + ' in collection ' + collection + '.')
    except Exception as e:
      print('Failed to post data to database.')
      print(e)


def deleteExistingPost(database, collection, objID):
    client = MongoClient('localhost', 27017)
    gcc_db = client[database]
    collection_instance = gcc_db[collection]
    print('deletingExistingPost')
    try:
        print('Post inserted to database ' + database + ' in collection ' + collection + '.')
        collection_instance.delete_one({"_id": objID})
    except Exception as e:
        print('Failed to post data to database.')
        print(e)
