package main

import "fmt"

type Node struct {
	Value int
	Next  *Node
}
type Stack struct {
	Top *Node
}

func Push(s *Stack, value int) {
	node := &Node{
		Value: value,
		Next:  s.Top,
	}
	s.Top = node
}

func Pop(s *Stack) (int, error) {

	if s.Top == nil {
		return 0, fmt.Errorf("Stack is empty")
	}
	value := s.Top.Value
	s.Top = s.Top.Next

	return value, nil
}

func Peek(s *Stack) (int, error) {
	if s.Top == nil {
		return 0, fmt.Errorf("Stack is empty")
	}
	return s.Top.Value, nil
}

func main() {
	mystack := Stack{}

	// Example usage:
	Push(&mystack, 42)
	Push(&mystack, 15)

	topValue, err := Peek(&mystack)
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println("Top of the stack:", topValue)
	}

	poppedValue, err := Pop(&mystack)
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println("Popped value:", poppedValue)
	}

	fmt.Println("Is the stack empty?", mystack.Top == nil)

}
