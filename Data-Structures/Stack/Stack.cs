namespace Stack;

public class Node
{
    public int Value { get; set; }
    public Node? Prev { get; set; }
}
public class StackList
{
    public Node? Head { get; set; }
    public int Size { get; set; }
    //print stack
    public void Print()
    {
        if(Head==null)
        {
            return;
        }
        Node curr = Head;
        while(curr != null)
        {
            Console.WriteLine(curr.Value);
            if(curr.Prev==null)return;
            curr=curr.Prev;
        }
    }
    //see first value of stack
    public Object? Peek()
    {
        return Head?.Value;
    }
    // add value to stack
    public void Push(int value)
    {   
        Node node = new Node
        {
            Value = value,
            Prev = Head
        };
        Head=node;
        Size++;
    }
    //remove and return fist value
    public Object? Pop()
    {
        if(Head==null)
        {
            return null;
        }
        Node curr = Head;
        Head = Head.Prev;
        return curr;
    }
}