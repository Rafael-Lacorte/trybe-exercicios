input_1 = {
    'Clara': [0, 1, 5, 9, 10],
    'Marco': [0, 2, 8, 9, 10]
}

def blef(input):

  keys = list(input.keys())
  player_one = keys[0]
  # print(player_one)
  player_two = keys[1]
  # print(input[player_one].sort())

  player_one_points = 0


  array_player_one = input[player_one]
  array_player_two = input[player_two]

  set_player_one = set(array_player_one)
  set_player_two = set(array_player_two)
  one_two_diff = set_player_one.difference(array_player_two)
  two_one_diff = set_player_two.difference(set_player_one)

  player_one_points = max(one_two_diff) - min(one_two_diff)
  player_two_points = max(two_one_diff) - min(two_one_diff)

  if player_one_points > player_two_points:
    return player_one
  return player_two






print(blef(input_1))