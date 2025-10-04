import sys
import os

# Add parent directory to path to import hello module
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import hello

def test_hello_function_returns_string():
    """Test that hello() returns a string"""
    result = hello.hello()
    assert isinstance(result, str)

def test_hello_function_contains_hello():
    """Test that hello() contains the word Hello"""
    result = hello.hello()
    assert "Hello" in result

def test_hello_function_not_empty():
    """Test that hello() is not empty"""
    result = hello.hello()
    assert len(result) > 0

def test_hello_function_exact_message():
    """Test that hello() returns the exact expected message"""
    result = hello.hello()
    assert result == "Hello World from Python!"
