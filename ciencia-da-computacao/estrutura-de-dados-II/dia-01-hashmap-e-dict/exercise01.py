class Score:

  def __init__(self):
    self.scores = {}
    self.subordinates = {
      1: [2, 3],
      2: [4],
      3: [],
      4: [5, 6],
      5: [7],
      6: [],
      7: [],
    }
  
  def add_subordinate(self, person):
    k = 5
    new_person = len(self.subordinates) + 1
    self.subordinates[new_person] = []

    if (len(self.subordinates[person]) >= k):
      return self.add_subordinate(person + 1)
    self.subordinates[person].append(new_person)

    return self.subordinates

  def calculate_score(self, person):
    if person in self.scores:
      print('Já calculei palhaço, receba')
      return self.scores[person]
  
    score = 1

    for p in self.subordinates[person]:
      score += self.calculate_score(p)
    
    self.scores[person] = score

    return score

  

score_board = Score()

print(score_board.calculate_score(1))

print(score_board.add_subordinate(1))