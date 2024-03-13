package binarysearch

func search(arr []int, needle int)bool{
    lo := 0
    hi := len(arr) - 1

    for lo < hi{
        mid := (lo + hi) / 2
        if arr[mid] == needle{
            return true
        }
        if arr[mid] < needle{
            lo = mid + 1
        }else{
            hi = mid
        }
    }

    return false
}
func main(){}
