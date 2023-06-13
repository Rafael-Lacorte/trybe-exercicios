class Score:

  def __init__(self):
    self.scores = {}

  def calculate_score(self, person):
    if person in self.scores:
      print('Já calculei palhaço, receba')
      return self.scores[person]
  
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
      score += self.calculate_score(p)
    
    self.scores[person] = score

    return score

score_board = Score()

print(score_board.calculate_score(1))

print(score_board.calculate_score(1))