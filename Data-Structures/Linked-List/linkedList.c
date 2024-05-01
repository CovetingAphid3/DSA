#include <stdio.h>
#include <stdlib.h>

typedef struct node {
  int data;
  struct node *next;
} node;

node *createLinkedList(int n);
void displayList(node *head);

int main() {
  int n = 0;
  node *HEAD = NULL;
  printf("\n How many nodes?: ");
  scanf("%d", &n);
  HEAD = createLinkedList(n);
  displayList(HEAD);

  return 0;
}

node *createLinkedList(int n) {
  int i = 0;
  node *head = NULL;
  node *temp = NULL;
  node *p = NULL;

  for (i = 0; i < n; i++) {
    // create node
    temp = (node *)malloc(sizeof(node));
    printf("\nEnter value for node number %d: ", i + 1);
    scanf("%d", &(temp->data));
    temp->next = NULL;

    if (head == NULL) {
      head = temp;
      p = temp; 
    } else {
      p->next = temp; 
      p = p->next;  
    }
  }

  return head;
}

void displayList(node *head) {
  node *p = head;
  while (p != NULL) { 
    printf("\t%d->", p->data);
    p = p->next;
  }
}

