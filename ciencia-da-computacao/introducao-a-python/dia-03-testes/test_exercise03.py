import pytest
from exercise03 import validate_email

def test_username_can_ony_contain_letters():
  assert validate_email("aaaa@nomewebsite.ext") is None

def test_username_can_ony_contain_letters_and_digits():
  assert validate_email("aa123@nomewebsite.ext") is None

def test_username_can_ony_contain_letters_digits_dashes_and_underscores():
  assert validate_email("aa12_-3@nomewebsite.ext") is None

def test_username_should_starts_with_letter():
  assert validate_email("aa12_-3@nomewebsite.ext") is None

def test_username_when_doesnt_start_with_letter_raise_exception():
  with pytest.raises(ValueError):
    validate_email('1@nomewebsite.ext')

def test_username_is_invalid_raise_exception():
  with pytest.raises(ValueError):
    validate_email('a%a@nomewebsite.ext')

def test_website_invalid_chars_raise_exception():
    with pytest.raises(ValueError):
        validate_email("abc@website!123.com")

def test_extension_should_contain_only_three_chars():
  assert validate_email("abc@website123.com") is None


def test_extension_invalid_chars_raise_exception():
    with pytest.raises(ValueError):
        validate_email("abc@website123.pyth")