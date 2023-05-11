from pymongo import MongoClient

import requests

client = MongoClient()
category = input('input a category')
db = client.catalogue

students = db.books

books = students.find({ 'STATUS': 'PUBLISH'})

print(len(books))



for book in books:
  print(book['title'])

client.close()

