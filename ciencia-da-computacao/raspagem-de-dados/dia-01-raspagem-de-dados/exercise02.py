import requests

url = 'https://api.github.com/users'

response = requests.get(url)

for data in response.json():
  print(f"{data['login']} {data['url']}")