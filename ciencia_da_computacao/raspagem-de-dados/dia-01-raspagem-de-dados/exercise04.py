from pymongo import MongoClient

client = MongoClient()
category = input('input a category')
db = client.catalogue

books = db.books.find({ 'categories': category})

for book in books:
  print(book['title'])

client.close()

