

def merge(arr):

    if len(arr) == 1:
        return arr

    middle = len(arr) // 2
    leftHalf = arr[0:middle]
    rightHalf = arr[middle:]

    return _merge(merge(leftHalf),merge(rightHalf))


def _merge(left,right):
    result = []
    rightIndex = 0
    leftIndex = 0

    while leftIndex < len(left) and rightIndex < len(right):
        if left[leftIndex] < right[rightIndex]:
            result.append(left[leftIndex])
            leftIndex += 1 
        else:
            result.append(right[rightIndex])
            rightIndex += 1    

    result += left[leftIndex:]
    result += right[rightIndex:]

    return result

              
