def insert(array):
    n = len(array)
    for i in range(n):
        smallestIndex = i
        for j in range(i+1,n):
            if array[j] < array[smallestIndex]:
                smallestIndex = j
        array[i],array[smallestIndex] = array[smallestIndex],array[i]
    return array    

test_array = [6,87,3,2,1,0]
sorted_array = insert(test_array)
print(sorted_array)