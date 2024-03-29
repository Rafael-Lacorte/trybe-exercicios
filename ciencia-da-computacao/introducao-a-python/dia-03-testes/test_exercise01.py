import pytest
from exercise01 import fizz_buzz

def test_username_can_ony_contain_letters():
  assert fizz_buzz(2) == [1,2]

def test_fizzbuzz_divisible_by_three_should_be_fizz():
    assert fizz_buzz(3)[-1] == "Fizz"


def test_fizzbuzz_divisible_by_five_should_be_buzz():
    assert fizz_buzz(5)[-1] == "Buzz"


def test_fizzbuzz_divisible_by_five_and_three_should_be_fizzbuzz():
    assert fizz_buzz(15)[-1] == "FizzBuzz"