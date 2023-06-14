import pandas as pd

df = pd.read_csv("fifa_audience.csv")

conmebol_countries = df.loc[df["confederation"] == "CONMEBOL"]

print(conmebol_countries)