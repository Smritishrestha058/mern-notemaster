#include <stdio.h>
#include <stdlib.h>

typedef struct Entry {
    int key;
    int value;
    struct Entry* next;
} Entry;

typedef struct HashTable {
    Entry** table;
    int size;
    int count;
    int split_pointer;
    int level;
} HashTable;

unsigned int hash(int key, int level, int size) {
    return key % size;
}

HashTable* create_table(int size) {
    HashTable* hashTable = (HashTable*)malloc(sizeof(HashTable));
    hashTable->table = (Entry**)calloc(size, sizeof(Entry*));
    hashTable->size = size;
    hashTable->count = 0;
    hashTable->split_pointer = 0;
    hashTable->level = 0;
    return hashTable;
}

void rehash(HashTable* hashTable) {
    int old_size = hashTable->size;
    int i;
    Entry** old_table = hashTable->table;

    hashTable->size = 2 * old_size;
    hashTable->table = (Entry**)calloc(hashTable->size, sizeof(Entry*));
    hashTable->split_pointer = 0;
    hashTable->level++;

    for (i = 0; i < old_size; i++) {
        Entry* entry = old_table[i];
        while (entry != NULL) {
            Entry* next = entry->next;
            unsigned int new_index = hash(entry->key, hashTable->level, hashTable->size);
            entry->next = hashTable->table[new_index];
            hashTable->table[new_index] = entry;
            entry = next;
        }
    }
    free(old_table);
}

void insert(HashTable* hashTable, int key, int value) {
    if ((float)hashTable->count / hashTable->size > LOAD_FACTOR) {
        rehash(hashTable);
    }

    unsigned int index = hash(key, hashTable->level, hashTable->size);
    Entry* newEntry = (Entry*)malloc(sizeof(Entry));
    newEntry->key = key;
    newEntry->value = value;
    newEntry->next = hashTable->table[index];
    hashTable->table[index] = newEntry;
    hashTable->count++;
}

Entry* search(HashTable* hashTable, int key) {
    unsigned int index = hash(key, hashTable->level, hashTable->size);
    Entry* entry = hashTable->table[index];
    while (entry != NULL) {
        if (entry->key == key) {
            return entry;
        }
        entry = entry->next;
    }
    return NULL;
}

void delete_entry(HashTable* hashTable, int key) {
    unsigned int index = hash(key, hashTable->level, hashTable->size);
    Entry* entry = hashTable->table[index];
    Entry* prev = NULL;

    while (entry != NULL && entry->key != key) {
        prev = entry;
        entry = entry->next;
    }

    if (entry == NULL) {
        printf("Key not found\n");
        return;
    }

    if (prev == NULL) {
        hashTable->table[index] = entry->next;
    } else {
        prev->next = entry->next;
    }

    free(entry);
    hashTable->count--;
}

void display(HashTable* hashTable) {
    for (int i = 0; i < hashTable->size; i++) {
        Entry* entry = hashTable->table[i];
        if (entry != NULL) {
            printf("Index %d: ", i);
            while (entry != NULL) {
                printf("(%d, %d) -> ", entry->key, entry->value);
                entry = entry->next;
            }
            printf("NULL\n");
        }
    }
}

int main() {
    HashTable* hashTable = create_table(INITIAL_TABLE_SIZE);

    insert(hashTable, 1, 10);
    insert(hashTable, 2, 20);
    insert(hashTable, 3, 30);
    insert(hashTable, 4, 40);
    insert(hashTable, 5, 50);
    insert(hashTable, 6, 60);

    display(hashTable);

    Entry* entry = search(hashTable, 3);
    if (entry != NULL) {
        printf("Found key 3 with value %d\n", entry->value);
    } else {
        printf("Key 3 not found\n");
    }

    delete_entry(hashTable, 3);
    display(hashTable);

    return 0;
}

