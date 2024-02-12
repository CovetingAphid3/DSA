def partition(array, lo, hi):
    pivot = array[hi]
    i = lo - 1

    for j in range(lo, hi):
        if array[j] < pivot:
            i += 1
            array[i], array[j] = array[j], array[i]

    array[i + 1], array[hi] = array[hi], array[i + 1]

    return i + 1


def quick_sort(array, lo, hi):
    if lo < hi:
        partition_index = partition(array, lo, hi)

        quick_sort(array, lo, partition_index - 1)
        quick_sort(array, partition_index + 1, hi)

    return array

