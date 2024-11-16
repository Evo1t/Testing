import unittest

from main import addition, subtract, multiply, divide

class TestCalculator(unittest.TestCase):
    def test_addition(self):
        self.assertEqual(addition(25,25), 50)
    
    def test_subtract(self):
        self.assertEqual(subtract(25,25), 0)
    
    def test_multiply(self):
        self.assertEqual(multiply(2,5), 10)
    
    def test_divide(self):
        self.assertEqual(divide(10,2), 5)
        self.assertEqual(divide(2,0), "Ошибка: деление на ноль!")
    

if __name__ == '__main__':
    unittest.main()  # Перемещено сюда