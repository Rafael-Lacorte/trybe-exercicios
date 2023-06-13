def calculate_score(person):
  score = 1
  subordinates = {
    1: [2, 3],
    2: [4],
    3: [],
    4: [5, 6],
    5: [7],
    6: [],
    7: [],
  }

  for p in subordinates[person]:
    score += calculate_score(p)
  
  return score

print(calculate_score(5))