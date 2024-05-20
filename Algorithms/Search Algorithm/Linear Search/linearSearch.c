#include <stdio.h>
#include <stdbool.h>

bool linearSearch(const int arr[], int length, int needle) {
    if (arr == NULL || length <= 0) {
        return false; 
    }

    for (int i = 0; i < length; i++) {
        if (arr[i] == needle) {
            return true;
        }
    }
    return false;
}

int main() {
    int array[] = {1, 2, 3, 4, 5, 6};
    int needle = 4;
    int length = sizeof(array) / sizeof(array[0]);

    bool result = linearSearch(array, length, needle);
    if (result) {
        printf("Found\n");
    } else {
        printf("Not found\n");
    }

    return 0;
}

