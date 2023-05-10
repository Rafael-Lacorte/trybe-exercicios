import requests
from bs4 import BeautifulSoup


url = "https://pt.wikipedia.org/wiki/Rock_in_Rio%22"
page = requests.get(url)
html_content = page.text

soup = BeautifulSoup(html_content, 'html.parser')
tag = soup.finde

links = []
for link in soup.findAll('a'):
  print(link.get('href'))


