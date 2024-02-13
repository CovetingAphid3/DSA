def insert(array):
    for i in range(1,len(array)):
        temp = array[i]
        j = i-1

        while j>=0 and array[j] > temp:
            array[j+1] = array[j]
            j -= 1

        array[j+1] = temp

    return array

test_array = [8,4,6,3,2,5,1]
sorted_array = insert(test_array)
print(sorted_array)        