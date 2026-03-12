#include <stdio.h>
#include <stdlib.h>

struct node {
    struct node *prev;
    struct node *next;
    int data;
};

struct node *head;

void insertion_beginning();
void insertion_last();
void insertion_specified();
void deletion_beginning();
void deletion_last();
void deletion_specified();
void display();
void search();

int main() {
    int choice = 0;
    printf("\n*********Main Menu*********\n");
    printf("\nChoose one option from the following list ...\n");
    printf("\n===============================================\n");
    printf("\n1. Insert in beginning\n2. Insert at last\n3. Insert at any random location\n4. Delete from Beginning\n5. Delete from last\n6. Delete the node after the given data\n7. Search\n8. Show\n9. Exit\n");

    while (choice != 9) {
        printf("\nEnter your choice: ");
        scanf("%d", &choice);
        switch (choice) {
            case 1:
                insertion_beginning();
                break;
            case 2:
                insertion_last();
                break;
            case 3:
                insertion_specified();
                break;
            case 4:
                deletion_beginning();
                break;
            case 5:
                deletion_last();
                break;
            case 6:
                deletion_specified();
                break;
            case 7:
                search();
                break;
            case 8:
                display();
                break;
            case 9:
                exit(0);
                break;
            default:
                printf("Please enter a valid choice.");
        }
    }
    return 0;
}

void insertion_beginning() {
    struct node *ptr;
    int item;
    ptr = (struct node *)malloc(sizeof(struct node));
    if (ptr == NULL) {
        printf("\nOVERFLOW");
    } else {
        printf("\nEnter Item value: ");
        scanf("%d", &item);

        ptr->data = item;
        ptr->prev = NULL;
        ptr->next = head;

        if (head != NULL) {
            head->prev = ptr;
        }
        head = ptr;
        printf("\nNode inserted\n");
    }
}

void insertion_last() {
    struct node *ptr, *temp;
    int item;
    ptr = (struct node *)malloc(sizeof(struct node));
    if (ptr == NULL) {
        printf("\nOVERFLOW");
    } else {
        printf("\nEnter value: ");
        scanf("%d", &item);
        ptr->data = item;
        ptr->next = NULL;

        if (head == NULL) {
            ptr->prev = NULL;
            head = ptr;
        } else {
            temp = head;
            while (temp->next != NULL) {
                temp = temp->next;
            }
            temp->next = ptr;
            ptr->prev = temp;
        }
        printf("\nNode inserted\n");
    }
}

void insertion_specified() {
    struct node *ptr, *temp;
    int item, loc, i;
    ptr = (struct node *)malloc(sizeof(struct node));
    if (ptr == NULL) {
        printf("\nOVERFLOW");
    } else {
        temp = head;
        printf("Enter the location: ");
        scanf("%d", &loc);

        for (i = 1; i < loc; i++) {  // Changed to i = 1 since loc is a 1-based index
            temp = temp->next;
            if (temp == NULL) {
                printf("\nThere are less than %d elements", loc);
                return;
            }
        }

        printf("Enter value: ");
        scanf("%d", &item);
        ptr->data = item;
        ptr->next = temp->next;
        ptr->prev = temp;

        if (temp->next != NULL) {
            temp->next->prev = ptr;
        }
        temp->next = ptr;
        printf("\nNode inserted\n");
    }
}

void deletion_beginning() {
    struct node *ptr;
    if (head == NULL) {
        printf("\nUNDERFLOW");
    } else {
        ptr = head;
        head = head->next;
        if (head != NULL) {
            head->prev = NULL;
        }
        free(ptr);
        printf("\nNode deleted\n");
    }
}

void deletion_last() {
    struct node *ptr;
    if (head == NULL) {
        printf("\nUNDERFLOW");
    } else if (head->next == NULL) {
        free(head);
        head = NULL;
        printf("\nNode deleted\n");
    } else {
        ptr = head;
        while (ptr->next != NULL) {
            ptr = ptr->next;
        }
        ptr->prev->next = NULL;
        free(ptr);
        printf("\nNode deleted\n");
    }
}

void deletion_specified() {
    struct node *ptr, *temp;
    int val;
    printf("\nEnter the data after which the node is to be deleted: ");
    scanf("%d", &val);
    ptr = head;
    while (ptr != NULL && ptr->data != val) {
        ptr = ptr->next;
    }

    if (ptr == NULL || ptr->next == NULL) {
        printf("\nCan't delete\n");
    } else {
        temp = ptr->next;
        ptr->next = temp->next;
        if (temp->next != NULL) {
            temp->next->prev = ptr;
        }
        free(temp);
        printf("\nNode deleted\n");
    }
}

void display() {
    struct node *ptr;
    printf("\nPrinting values...\n");
    ptr = head;
    while (ptr != NULL) {
        printf("%d\n", ptr->data);
        ptr = ptr->next;
    }
}

void search() {
    struct node *ptr;
    int item, i = 0, flag = 0;
    ptr = head;
    if (ptr == NULL) {
        printf("\nEmpty List\n");
    } else {
        printf("\nEnter item which you want to search: ");
        scanf("%d", &item);
        while (ptr != NULL) {
            if (ptr->data == item) {
                printf("\nItem found at location %d", i + 1); // Changed to 1-based index
                flag = 1;
                break;
            }
            i++;
            ptr = ptr->next;
        }
        if (flag == 0) {
            printf("\nItem not found\n");
        }
    }
}

