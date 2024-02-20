namespace SingleLinkedList
{
    public class Node
    {
        public int Data { get; set; }
        public Node? Next { get; set; }

        public void DisplayNode()
        {
            Console.WriteLine();
        }

    }

    public class LinkedList
    {
        public Node? Head { get; set; }
        public int Size = 0;
        //insert at beginning
        public void Prepend(int data)
        {
            var node = new Node
            {
                Data = data,
                Next = Head
            };
            Head = node;
            Size++;
        }
        //Delete first value
        public void Pop()
        {
            if (Head == null)
            {
                return;
            }
            Node? current = Head;
            Head = current.Next;
            current = null;
            Size--;
        }
        //Print List
        public void Print()
        {
            if (Head == null)
            {
                return;
            }
            Node currentNode = Head;
            while (currentNode != null)
            {
                Console.WriteLine(currentNode.Data);
#pragma warning disable CS8600 // Converting null literal or possible null value to non-nullable type.
                currentNode = currentNode.Next;
#pragma warning restore CS8600 // Converting null literal or possible null value to non-nullable type.
            }
        }
        //add node to tail
        public void Append(int data)
        {
            if (Head == null)
            {
                return;
            }
            var node = new Node
            {
                Data = data,
                Next = null
            };
            Node currentNode = Head;
            while (currentNode != null)
            {
                if (currentNode.Next == null)
                {
                    currentNode.Next = node;
                    return;
                }
                currentNode = currentNode.Next;
            }
        }
        //return head of list
        public int Peek()
        {
            if (Head != null)
            {
                return Head.Data;
            }
            else
            {
                return -1;
            }
        }
        //find value
        public bool Find(int value)
        {
            if (Head == null) return false;
            Node currentNode = Head;
            while (currentNode != null)
            {
                if (currentNode.Data == value)
                {
                    return true;
                }
#pragma warning disable CS8600 // Converting null literal or possible null value to non-nullable type.
                currentNode = currentNode.Next;
#pragma warning restore CS8600 // Converting null literal or possible null value to non-nullable type.
            }
            return false;
        }
        //traverse using recursion
        public void Traverse()
        {
            if(Head==null)return;
            Walk(Head);
        }
        private static void Walk(Node currentNode)
        {
            if(currentNode!=null){
                Console.WriteLine(currentNode.Data);
#pragma warning disable CS8604 // Possible null reference argument.
                Walk(currentNode.Next);
#pragma warning restore CS8604 // Possible null reference argument.
            }
            return;
        }
        //reverse list
        public void Reverse()
        {
            if(Head == null || Head.Next==null)
            {
                return;
            }
            Node? previousNode = null;
            Node currentNode = Head;
            Node nextNode;
            while(currentNode!=null)
            {
#pragma warning disable CS8600 // Converting null literal or possible null value to non-nullable type.
                nextNode = currentNode.Next;
#pragma warning restore CS8600 // Converting null literal or possible null value to non-nullable type.
                currentNode.Next = previousNode;
                previousNode = currentNode;
#pragma warning disable CS8600 // Converting null literal or possible null value to non-nullable type.
                currentNode = nextNode;
#pragma warning restore CS8600 // Converting null literal or possible null value to non-nullable type.
            }
            Head = previousNode;
        }

    }
}
