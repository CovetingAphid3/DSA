import math
def binary(array,value):
    lo = 0
    hi = len(array)-1

    while lo <= hi:
        middle = math.floor((hi + lo)/2)
        if array[middle] == value:
            return f"{value} found at index {middle}"
        elif array[middle] > value:
            hi = middle - 1
        elif array[middle] < value:
            lo = middle + 1
    return f"{value} not found"    

