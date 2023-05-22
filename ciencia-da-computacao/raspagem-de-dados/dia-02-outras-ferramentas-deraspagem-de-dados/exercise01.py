from time import sleep
from selenium import webdriver
from selenium.webdriver.common.by import By

firefox = webdriver.Firefox()

firefox.get('https://quotes.toscrape.com/')

quote1 = firefox.find_element(By.CLASS_NAME,'text').get_attribute('innerText')

print(quote1)