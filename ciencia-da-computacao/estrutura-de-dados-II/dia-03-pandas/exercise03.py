import pandas as pd

df = pd.read_csv("fifa_audience.csv")
count_countries_by_confederation = df.groupby(by="confederation")['country'].count()
print(count_countries_by_confederation)