def fib(n):
    if n == 1:
        return 1
    
    return n + fib(n-1)

def test():
    print(fib(5))

test()    