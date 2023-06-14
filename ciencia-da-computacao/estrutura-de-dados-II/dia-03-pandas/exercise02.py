import pandas as pd

df = pd.read_csv("fifa_audience.csv")

fifa_audience_greater_2 = df["population_share"] > 3
print(fifa_audience_greater_2)
print(df[fifa_audience_greater_2])