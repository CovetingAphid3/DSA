package main

import "fmt"

func search(arr []int, needle int) bool {
	for i := 0; i < len(arr); i++ {
		if arr[i] == needle {
			return true
		}
	}

	return false
}

func main() {

    array := []int{1,2,3,4,5,6,7,8,9}

    result := search(array, 4)
    fmt.Println(result)
}
