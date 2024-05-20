package main

import "fmt"

type Node struct {
	Value int
	Next  *Node
}
type Queue struct {
	Head *Node
	Tail *Node
	Size int
}

func Peek(q *Queue) (int, error) {
	if q.Head == nil {
		return 0, fmt.Errorf("Queue is empty")
	}
	return q.Head.Value, nil
}

func Enque(Q *Queue, value int) {
	Q.Size++
	node := &Node{
		Value: value,
		Next:  &Node{},
	}
	if Q.Head == nil {
		Q.Head = node
		Q.Tail = node
		return
	}
	if Q.Tail != nil {
		Q.Tail.Next = node
		Q.Tail = node
		return
	}
}

func PrintQueue(Q *Queue) {
	if Q.Head == nil {
		fmt.Printf("Queue is empty")
		return
	}
	curr := Q.Head
	for i := 0; i < Q.Size; i++ {
		fmt.Print(curr.Value,"->")
		curr = curr.Next
	}
	return
}

func main() {
	fmt.Printf("Hello world\n")
	queue := Queue{}

	Enque(&queue, 10)
	Enque(&queue, 10)

	Enque(&queue, 10)
    PrintQueue(&queue)

	topValue, err := Peek(&queue)
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println("Top of the queue:", topValue)
	}
	fmt.Println("Is the queue empty?", queue.Head == nil)
}
