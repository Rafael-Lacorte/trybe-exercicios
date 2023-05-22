import pytest
from exercise02 import number_translator

def test_username_can_ony_contain_letters():
  assert number_translator("1-HOME-SWEET-HOME") == '1-4663-79338-4663'

def test_username_can_ony_contain_letters():
  assert number_translator("MY-MISERABLE-JOB") == '69-647372253-562'