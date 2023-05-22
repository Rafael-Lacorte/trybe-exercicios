import json
import csv

def get_number_of_books_of_category():
  list_of_categories = {}
  with open('books.json') as file:
    content = file.read()
    books = json.loads(content)
    categories = books[0]['categories']
    for book in books:
      for category in book['categories']:
        if not list_of_categories.get(category):
          list_of_categories[category] = 0
        list_of_categories[category] += 1


  return list_of_categories

def get_percetage_by_category():
  list_of_categories = get_number_of_books_of_category()
  total_of_books = 0
  array = []
  for category in list_of_categories:
    total_of_books += list_of_categories[category]

  for category in list_of_categories:
    number = list_of_categories[category]
    array.append([category, number/total_of_books])
  return array

def write_report(file,header,rows):
  writer = csv.writer(file)
  writer.writerow(header)
  writer.writerows(rows)

headerData = ['categoria', 'porcentagem']
rowData = get_percetage_by_category()

with open('percentage.csv','w') as file: 
  write_report(file,headerData,rowData)


# get_percetage_by_category()
