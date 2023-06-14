import pandas as pd

df = pd.read_csv("fifa_audience.csv")

uefa_countries = df.loc[df["confederation"] == "UEFA"]

uefa_countries_average = uefa_countries["tv_audience_share"].mean()

uefa_countries_average_rounded = round(uefa_countries_average, 2)

print(uefa_countries_average_rounded)