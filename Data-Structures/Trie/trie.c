#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define NUM_CHAR 256

typedef struct trienode {
  struct trienode *children[NUM_CHAR];
  bool terminal;
} trienode;

trienode *createnode() {
  trienode *newnode = malloc(sizeof *newnode);

  for (int i = 0; i < NUM_CHAR; i++) {
    newnode->children[i] = NULL;
  }
  newnode->terminal = false;
  return newnode;
}
bool trieinsert(trienode **root, char *signedtext) {
  if (*root == NULL) {
    *root = createnode();
  }

  unsigned char *text = (unsigned char *)signedtext;
  trienode *tmp = *root;

  int length = strlen(signedtext);

  for (int i = 0; i < length; i++) {
    if (tmp->children[text[i]] == NULL) {
      tmp->children[text[i]] = createnode();
    }
    tmp = tmp->children[text[i]];  // Update the tmp pointer to move down the trie
  }
  
  if (tmp->terminal) {
    return false;
  } else {
    tmp->terminal = true;
    return true;
  }
}


void printtrie_rec(trienode *node, unsigned char *prefix, int length) {
  unsigned char newprefix[length + 2];
  memcpy(newprefix, prefix, length);
  newprefix[length + 1] = 0;

  if (node->terminal) {
    printf("word: %s\n", prefix);
  }

  for (int i = 0; i < NUM_CHAR; i++) {
    if (node->children[i] != NULL) {
      newprefix[length] = i;
      printtrie_rec(node->children[i], newprefix, length + 1);
    }
  }
}

void printtrie(trienode *root) {
  if (root == NULL) {
    printf("empty trie\n");
    return;
  }
  printtrie_rec(root, NULL, 0);
}
bool triesearch(trienode *root, char *signedtext) {
  if (root == NULL) {
    return false;
  }

  unsigned char *text = (unsigned char *)signedtext;
  trienode *tmp = root;

  int length = strlen(signedtext);

  for (int i = 0; i < length; i++) {
    if (tmp->children[text[i]] == NULL) {
      return false; // The word is not in the trie
    }
    tmp = tmp->children[text[i]];
  }

  return tmp->terminal; // Check if the word is a complete word in the trie
}

int main() {
    trienode *root = NULL;

    trieinsert(&root, "KIT");
    trieinsert(&root, "CATTLE");
    trieinsert(&root, "KIN");
    trieinsert(&root, "CAT");
    trieinsert(&root, "HAPPY");

    printtrie(root);

    // Search examples
    if (triesearch(root, "KIT")) {
        printf("Word 'KIT' found in the trie.\n");
    } else {
        printf("Word 'KIT' not found in the trie.\n");
    }

    if (triesearch(root, "CAR")) {
        printf("Word 'CAR' found in the trie.\n");
    } else {
        printf("Word 'CAR' not found in the trie.\n");
    }

    // Inserting a new word
    if (trieinsert(&root, "CAR")) {
        printf("Word 'CAR' inserted successfully.\n");
    } else {
        printf("Word 'CAR' already exists in the trie.\n");
    }

    // Display the updated trie
    printf("Updated trie:\n");
    printtrie(root);

    return 0;
}

