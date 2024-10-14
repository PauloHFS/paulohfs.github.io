---
id: "arrays-and-hashing"
title: "Arrays and Hashing"
---

## Dynamic Array

Dynamic array is an array that grows in size as more elements are added to it. It is implemented by creating a new array with double the size of the original array and copying the elements from the original array to the new array.

```python
class DynamicArray:
    def __init__(self):
        self.capacity = 1
        self.size = 0
        self.arr = [0] * self.capacity

    def add(self, element):
        if self.size == self.capacity:
            self.capacity *= 2
            new_arr = [0] * self.capacity
            for i in range(self.size):
                new_arr[i] = self.arr[i]
            self.arr = new_arr
        self.arr[self.size] = element
        self.size += 1

    def get(self, index):
        if index < 0 or index >= self.size:
            return -1
        return self.arr[index]

    def remove(self, index):
        if index < 0 or index >= self.size:
            return
        for i in range(index, self.size - 1):
            self.arr[i] = self.arr[i+1]
        self.size -= 1
```

## Two Pointers

Two pointers is a technique where two pointers are used to solve a problem. The two pointers can be used to solve problems where we need to find a pair of elements that satisfy a condition.

```python
def two_pointers(arr, target):
    left = 0
    right = len(arr) - 1
    while left < right:
        if arr[left] + arr[right] == target:
            return [left, right]
        elif arr[left] + arr[right] < target:
            left += 1
        else:
            right -= 1
    return [-1, -1]
```

## Hash Usage

Hash is a data structure that stores key-value pairs. It is used to store elements in a way that allows for fast retrieval of elements.

```python
hash_map = {}
hash_map[1] = "one"
hash_map[2] = "two"
hash_map[3] = "three"

print(hash_map[1]) # one
print(hash_map[2]) # two
print(hash_map[3]) # three
```

## Hash Implementation

Hash can be implemented using an array of linked lists. The key is hashed to an index in the array and the value is stored in the linked list at that index.

```python
class Hash:
    def __init__(self):
        self.capacity = 10
        self.arr = [None] * self.capacity

    def hash(self, key):
        return key % self.capacity

    def put(self, key, value):
        index = self.hash(key)
        if self.arr[index] is None:
            self.arr[index] = []
        self.arr[index].append((key, value))

    def get(self, key):
        index = self.hash(key)
        if self.arr[index] is None:
            return None
        for k, v in self.arr[index]:
            if k == key:
                return v
        return None

    def remove(self, key):
        index = self.hash(key)
        if self.arr[index] is None:
            return
        for i, (k, v) in enumerate(self.arr[index]):
            if k == key:
                self.arr[index].pop(i)
                return
```

## Hash Collision

Hash collision is when two keys hash to the same index in the hash table. It can be resolved by using a linked list to store the key-value pairs at that index.

```python
class Hash:
    def __init__(self):
        self.capacity = 10
        self.arr = [None] * self.capacity

    def hash(self, key):
        return key % self.capacity

    def put(self, key, value):
        index = self.hash(key)
        if self.arr[index] is None:
            self.arr[index] = []
        for i, (k, v) in enumerate(self.arr[index]):
            if k == key:
                self.arr[index][i] = (key, value)
                return
        self.arr[index].append((key, value))

    def get(self, key):
        index = self.hash(key)
        if self.arr[index] is None:
            return None
        for k, v in self.arr[index]:
            if k == key:
                return v
        return None

    def remove(self, key):
        index = self.hash(key)
        if self.arr[index] is None:
            return
        for i, (k, v) in enumerate(self.arr[index]):
            if k == key:
                self.arr[index].pop(i)
                return
```

## Hash Set

Hash set is a set that stores unique elements. It is implemented using a hash table where the key is the element and the value is a dummy value.

```python
class HashSet:
    def __init__(self):
        self.capacity = 10
        self.arr = [None] * self.capacity

    def hash(self, key):
        return key % self.capacity

    def add(self, key):
        index = self.hash(key)
        if self.arr[index] is None:
            self.arr[index] = []
        for k in self.arr[index]:
            if k == key:
                return
        self.arr[index].append(key)

    def contains(self, key):
        index = self.hash(key)
        if self.arr[index] is None:
            return False
        for k in self.arr[index]:
            if k == key:
                return True
        return False

    def remove(self, key):
        index = self.hash(key)
        if self.arr[index] is None:
            return
        for i, k in enumerate(self.arr[index]):
            if k == key:
                self.arr[index].pop(i)
                return
```

## Prefix Sums

Prefix sums is a the technique of storing the sum of all elements in the array.

```python

arr = [1, 2, 3, 4, 5]
prefix_sum = [0] * len(arr)

prefix_sum[0] = arr[0]
for i in range(1, len(arr)):
    prefix_sum[i] = prefix_sum[i-1] + arr[i]

print(prefix_sum[2]) # 6 = 3 + 3 = prefix_sum[1] + arr[2] = arr[0] + arr[1] + arr[2] = 1 + 2 + 3
print(prefix_sum[4]) # 15 = 10 + 5 = prefix_sum[3] + arr[4] = arr[0] + arr[1] + arr[2] + arr[3] + arr[4] = 1 + 2 + 3 + 4 + 5 
```
