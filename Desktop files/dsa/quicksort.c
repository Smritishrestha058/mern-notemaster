#include <stdio.h>

void swap(int* a, int* b) 
{ 
    int temp = *a; 
    *a = *b; 
    *b = temp; 
}

int partition(int arr[], int low, int high) 
{ 
    
    int pivot = arr[low]; 
    int i = low + 1; 
    int j = high; 
  
    while (i <= j) { 
        while (i <= high && arr[i] <= pivot) { 
            i++; 
        }
        while (j >= low && arr[j] > pivot) { 
            j--; 
        }
        // Swap elements if i is less than j
        if (i < j) { 
            swap(&arr[i], &arr[j]); 
        } 
    } 
    // Swap the pivot with the element at index j
    swap(&arr[low], &arr[j]); 
    return j; 
}


void quickSort(int arr[], int low, int high) 
{ 
    if (low < high) { 
        int partitionIndex = partition(arr, low, high); 
  
        quickSort(arr, low, partitionIndex - 1); 
        quickSort(arr, partitionIndex + 1, high); 
    } 
}

int main() 
{ 
    int arr[] = { 9, 15, 19, 3, 7, 1, 13, 5, 17, 11 }; 
    int n = sizeof(arr) / sizeof(arr[0]); 
    int i;
    printf("Smriti Shrestha\n");
    printf("Original array: "); 
    for (i = 0; i < n; i++) { 
        printf("%d ", arr[i]); 
    } 
  

    quickSort(arr, 0, n - 1); 
  
    printf("\nSorted array: "); 
    for (i = 0; i < n; i++) { 
        printf("%d ", arr[i]); 
    } 
  
    return 0; 
}

