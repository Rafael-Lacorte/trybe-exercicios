from time import sleep
from selenium import webdriver

firefox = webdriver.Firefox()

response = firefox.get('https://quotes.toscrape.com/')