def addition(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y == 0:
        return "Ошибка: деление на ноль!"
    return x / y


def calculator():
    num1 = int(input('Введите первое число: '))
    num2 = int(input('Введите второе число: '))

    sign = input('Введите знак: +, -, *, /: ')

    if sign == '+':
        print(f"{addition(num1,num2)}")
    elif sign == '-':
        print(f"{subtract(num1,num2)}")
    elif sign == '*':
        print(f"{multiply(num1,num2)}")
    elif sign == '/':
        print(f"{divide(num1,num2)}")
    else:
        print('Ошибка ввода')

if __name__ == "__main__":
    calculator()