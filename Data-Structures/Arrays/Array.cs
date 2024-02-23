namespace Arrays
{
    class CustomArray
    {
        // declare and define array with initial values
        public int[] Arr = new int[10];
        public int Size;
        public CustomArray()
        {
            this.Size = 0;
            for (int i = 0; i < 3; i++)
            {
                this.Arr[this.Size] = i;
                this.Size++;
            }
        }
        //insert value at end of array
        public void InsertAtEnd(int value)
        {
            if (this.Size < this.Arr.Length)
            {
                this.Arr[this.Size] = value;
                this.Size++;
            }
            else
            {
                Console.WriteLine("Array is full. Cannot insert at the end.");
            }
        }
        //insert value at beginning of array
        public void InsertAtBeginning(int value)
        {
            if (this.Size < this.Arr.Length)
            {
                for (int i = this.Size - 1; i >= 0; i--)
                {
                    this.Arr[i + 1] = this.Arr[i];
                }
                this.Arr[0] = value;
                this.Size++;
            }
            else
            {
                Console.WriteLine("Array is full. Cannot insert at the beginning.");
            }
        }
        //print array
        public void PrintArray()
        {
            for (int i = 0; i < this.Size; i++)
            {
                Console.Write(this.Arr[i] + " ");
            }
            Console.WriteLine();
        }
        //insert value at specific index
        public void InsertAtIndex(int value, int index)
        {
            if (this.Size < this.Arr.Length)
            {
                for (int i = this.Size - 1; i >= index; i--)
                {
                    this.Arr[i + 1] = this.Arr[i];
                }
                this.Arr[index] = value;
                this.Size++;
            }

        }
        //delete value at end of aray
        public void DeleteAtEnd()
        {
            if (this.Size > 1)
            {
                this.Arr[this.Size - 1] = 0;
                this.Size--;
            }
        }
        //delete at beginning
        public void DeleteAtBegin()
        {
            if (this.Size > 0)
            {
                for (int i = 0; i < this.Size - 1; i++)
                {
                    this.Arr[i] = this.Arr[i + 1];
                }
                this.Size--;
            }
        }
        //Delete At specific index
        public void DeleteAtIndex(int index)
        {
            if (this.Size > 0 && index >= 0 && index < this.Size)
            {
                for (int i = index; i < this.Size - 1; i++)
                {
                    this.Arr[i] = this.Arr[i + 1];
                }
                this.Size--;
            }
        }
    }
}
