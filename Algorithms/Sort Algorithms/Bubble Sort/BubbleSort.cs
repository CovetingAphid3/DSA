using System;

class Program
{
    static void Main()
    {
        // Initialize an array with unsorted values
        int[] arr = { 4, 5, 2, 1, 5, 6, 7, 3 };

        // Call BubbleSort method to sort the array
        int[] sortedArr = BubbleSort.SortArray(arr);

        // Print the sorted array
        BubbleSort.PrintArray(sortedArr);
    }
}

class BubbleSort
{
    // Method to perform Bubble Sort on an array
    public static int[] SortArray(int[] arr)
    {
        int length = arr.Length;

        // Outer loop for the number of passes
        for (int i = 0; i < length; i++)
        {
            // Inner loop for comparing and swapping elements
            for (int j = 0; j < length - i - 1; j++)
            {
                // Compare adjacent elements and swap if necessary
                if (arr[j + 1] < arr[j])
                {
                    int tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }
            }
        }
        return arr;
    }

    // Method to print the elements of an array
    public static void PrintArray(int[] arr)
    {
        Console.Write("Sorted Array: ");

        // Loop to iterate and print each element of the array
        for (int i = 0; i < arr.Length; i++)
        {
            Console.Write(arr[i] + ",");
        }
    }
}
