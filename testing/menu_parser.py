import requests
from bs4 import BeautifulSoup

url = 'https://www.zomato.com/santa-clara-ca/mezbaan-bar-indian-cuisine-santa-clara/menu'
headers = {"User-Agent":"Mozilla/5.0"}

source_code = requests.get(url, auth=('user', 'pass'), headers=headers).text
soup = BeautifulSoup(source_code, 'lxml')
items = soup.find_all('div', class_='tmi-name')

item_description_price = []
i = 0
for each in items:
    # items
    item = each.find(text=True).replace("  ", "").replace("\n", "")
    item_description_price.append([item])

    # descriptions
    description = each.find('div', class_='tmi-desc-text')
    try:
        description = description.find(text=True).replace("  ", "").replace("\n", "")
    except:
        pass
    item_description_price[i].append(description)

    # prices
    price = each.find('div', class_='tmi-price-txt')
    try:
        price = price.find(text=True).replace("  ", "").replace("\n", "")
    except:
        pass
    item_description_price[i].append(price)

    i += 1

for thing in item_description_price:
    print(thing)