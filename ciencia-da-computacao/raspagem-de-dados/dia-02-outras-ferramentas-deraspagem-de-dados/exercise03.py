from time import sleep
from selenium import webdriver
from selenium.webdriver.common.by import By

firefox = webdriver.Firefox()

firefox.get('https://diolinux.com.br/')
data = []
for item in firefox.find_elements(By.CLASS_NAME,'col-md-4'):
  info = {}
  info['title'] = item.find_element(By.TAG_NAME, 'h3').get_attribute('innerText')
  info['link'] = item.find_element(By.TAG_NAME, 'a').get_attribute('href')
  data.append(info)

print(data)


