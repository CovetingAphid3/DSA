using System.Drawing;

namespace Double;

public class Node
{
    public int Value { get; set; }
    public Node? Next { get; set; }
    public Node? Prev {get;set;}    
}
public class DoubleLinkedList
{
    public Node? Head { get; set; }
    public Node? Tail {get;set;}
    public int Size = 0;
    //peek first value
    public int Peek()
    {
        return Head !=null?Head.Value:-1;
    }
    //insert
    public void Prepend(int value)
    {
        Size++;
        Node node = new Node
        {
            Value=value,
            Prev = null,
            Next = Head
        };
        if(Head!=null)
        {
            Head.Prev = node;
        }
        Head = node;
        if(Tail ==null)
        {
            Tail=Head;
        }
    }
    //insert at end
    public void Append(int value)
    {   
        
        Size++;
        Node node = new Node
        {
            Value=value,
            Next=null,
            Prev=Tail
        };
        if(Tail !=null)
        {
            Tail.Next = node;
        }
        Tail = node;
        if(Head == null)
        {
            Head = Tail;
        }
    }
    //print list
    public void Print()
    {
        if(Head==null)
        {
            Console.WriteLine("List is empty");
        }
        else
        {
            Node? curr = Head;
            while(curr !=null)
            {   
                Console.Write(curr.Value+"-");
                curr = curr.Next;
            }
        }
    }
    //remove head
    public Object? Pop()
    {   
        if(Head==null)
        {
            return null;
        }
        Node tmp = Head;
        Head = Head.Next;
        Size--;
        return tmp.Value;
    
    }
    public int Length()
    {
        return Size;
    }    
}