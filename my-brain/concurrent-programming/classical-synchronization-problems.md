---
id: classical-synchronization-problems
title: Classical Synchronization Problems
tags:
    - Concurrent Programming
    - Synchronization Patterns
---
# Classical Synchronization Problems

## Producer-Consumer Problem

### Solving using Semaphores

```py
# main
MAX_SIZE = 2 # buffer size

class Buffer:
    def __init__(self, size):
        self.buffer = [None for _ in range(size)]
        self.size = size
        self.fill = 0
        self.use = 0
        self.mutex = Semaphore(1)
        # TEST if using 1 or 2 semaphores is better

    def put(v):
        self.mutex.wait()
        self.buffer[self.fill] = v
        self.fill = (self.fill + 1) % self.size
        self.mutex.signal()

    def get():
        self.mutex.wait()
        v = self.buffer[self.use]
        self.use = (self.use + 1) % self.size
        self.mutex.signal()
        return v

buffer = Buffer(MAX_SIZE)
producerDone = Semaphore(0)
consumerDone = Semaphore(MAX_SIZE)
```

```py
# Thread A

def producer():
    for i in range(0, 100):
        consumerDone.wait()
        buffer.put(i)
        producerDone.signal()
```

```py
# Thread B

def consumer():
    for i in range(0, 100):
        producerDone.wait()
        v = buffer.get()
        print(v)
```

## Solving using Conditional Variable

```c
// main

int *buffer;
mutex_t buffer_mutex;
cond_t fill;
cond_t empty

sem_init(&buffer_mutex, 1);
```

```c
// Producer

for (int i; i < 100; i++) {
    mutex_lock(&buffer_mutex) 
    while (buffer_is_full(&buffer) {
        cond_wait(&empty, &buffer_mutex) 
    }
    put(&buffer, i) 
    cond_signal(&fill)  
    mutex_unlock(&buffer_mutex) 
}
```

```c
// Consumer

for (int i; i < 100; i++) {
    mutex_lock(&buffer_mutex) 
    while (buffer_is_empty(&buffer) {
        cond_wait(&fill, &buffer_mutex) 
    }
    take(&buffer)
    cond_signal(&empty)
    mutex_unlock(&buffer_mutex)
}
```
