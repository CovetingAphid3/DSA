package main

import "fmt"

func qs(arr []int, lo int, hi int) []int {
	if lo < hi {
		patitionIndex := partition(arr, lo, hi)

		qs(arr, lo, patitionIndex-1)
		qs(arr, patitionIndex+1, hi)
	}

	return arr
}

func partition(arr []int, lo int, hi int) int {
	pivot := arr[hi]
	i := lo - 1

	for j := lo; j < hi; j++ {
		if arr[j] <= pivot {
			i++
			tmp := arr[j]
			arr[j] = arr[i]
			arr[i] = tmp
		}
	}

	tmp := arr[hi]
	arr[hi] = arr[i+1]
	arr[i+1] = tmp

	return i + 1
}

func main() {

    unsortedArray := []int{5,37,5,1,4,8,9}

    sortedArray := qs(unsortedArray,0, len(unsortedArray)-1)
    fmt.Println(sortedArray)
}
