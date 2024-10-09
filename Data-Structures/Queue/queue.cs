namespace Queue
{
    public class Node
    {
        public int Value { get; set; }
        public Node? Next { get; set; }

        public Node(int value)
        {
            Value = value;
            Next = null;
        }
    }

    public class QueueList
    {
        public Node? Head { get; set; }
        public Node? Tail { get; set; } 
        public int Size { get; set; }

        public QueueList()
        {
            Head = null;
            Tail = null;
            Size = 0;
        }

        // Enqueue method to add an element to the queue
        public void Enqueue(int value)
        {
            Node newNode = new Node(value);
            if (Tail != null)
            {
                Tail.Next = newNode;
            }
            Tail = newNode;
            if (Head == null)
            {
                Head = Tail;
            }
            Size++;
        }

        // Dequeue method to remove an element from the queue
        public int? Dequeue()
        {
            if (Head == null) return null; // Queue is empty

            int value = Head.Value;
            Head = Head.Next;
            Size--;

            if (Head == null)
            {
                Tail = null; // If the queue is now empty, reset the Tail
            }

            return value;
        }

        // Method to check if the queue is empty
        public bool IsEmpty()
        {
            return Size == 0;
        }

        // Method to print the elements of the queue
        public void Print()
        {
            if (Head == null) return;

            Node curr = Head;
            while (curr != null)
            {
                System.Console.WriteLine(curr.Value);
                curr = curr.Next; // Move to the next node
            }
        }
    }
}

