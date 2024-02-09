
def bubble(array):
    n = len(array) -1
    for i in range(n):
        for j in range(n  - i):
            if array[j] > array[j+1]:
                temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp

    return array

