#include <cmath>
#include <iostream>
#include <array>

bool search(const std::array<int, 5>& arr, int value) {
    int lo = 0;
    int hi = arr.size() - 1;

    do {
        int middle = std::floor((lo + hi) / 2);
        if (arr[middle] == value) {
            std::cout << "found\n";
            return true;
        } else if (value > arr[middle]) {
            lo = middle + 1;
        } else {
            hi = middle - 1;
        }

    } while (lo <= hi);

    std::cout << "not found\n";
    return false;
}

int main() {
    std::array<int, 5> myArray = {1, 2, 3, 4, 5};
    search(myArray, 3);
    
    return 0;
}

