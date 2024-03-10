package main

import "fmt"

func search(arr []int, needle int) bool {
	lo := 0
	hi := len(arr)

	for lo < hi {
		middle := lo + (hi-lo)/2

		if arr[middle] == needle {
			return true
		}

		if arr[middle] < needle {
			lo = middle + 1
		}
		hi = middle

	}

	return false
}

func main() {
    //example use
    array := []int{1,2,3,4,5,6,7,8,9}

    result := search(array,1)
    fmt.Println(result)
}
