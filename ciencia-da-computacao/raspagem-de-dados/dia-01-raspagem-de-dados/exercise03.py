import requests

url = 'https://scrapethissite.com/pages/advanced/?gotcha=headers'

response = requests.get(url)

print(response.text)