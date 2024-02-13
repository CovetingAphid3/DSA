def interpolation(array, value):
    hi = len(array) - 1
    lo = 0

    while lo <= hi and array[lo] <= value <= array[hi]:
        probe = lo + ((hi - lo) * (value - array[lo])) / (array[hi] - array[lo])
        probe = int(probe)
        
        if array[probe] == value:
            return f"{value} found at index: {probe}"
        elif array[probe] < value:
            lo = probe + 1
        else:
            hi = probe - 1

    return f"{value} not found in the array"

test_array = [1,2,3,4,5,6,7,8,9]
result = interpolation(test_array,4)
print(result)