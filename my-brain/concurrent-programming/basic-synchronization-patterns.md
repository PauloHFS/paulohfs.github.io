---
id: basic-synchronization-patterns
title: Basic Synchronization Patterns
tags:
    - Concurrent Programming
    - Synchronization Patterns
    - Semaphore
    - Mutex
    - Exclusion
    - Race Condition
    - Rendezvous        
    - Barrier
    - Reusable Barrier
    - Multiplex
    - Signalizing
    - Busy Waiting    
---

# Basic Synchronization Patterns

This are the basic synchronization patterns that can be used to solve a variety of synchronization problems.

In the examples the `main` function is the main thread, and the `f1` and `f2` are functions that can be run by threads, they run concurrently and can be run in any order.

## Signalizing

Signalizing is a pattern used to a thread wait for another thread to run something. This pattern is used to avoid busy waiting.

Example:

- `f1` must run before `f2`.
- Thread A or B can run before the other.

```py
# main
f1Done = Semaphore(0)
```

```py
# Thread A

f1()
f1Done.signal()
```

```py
# Thread B

f1Done.wait()
f2()
```

In this case the semaphore `f1Done` start with the value `0`. So, if Thread B gain CPU first, in the `wait` the semaphore will be decremented and will become `-1`, so the thread will be blocked. When Thread A gain CPU, the semaphore will be incremented and will become `0`, so the Thread B will be unblocked and will run `f2`.

If Thread A gain CPU first, the semaphore will be incremented and will become `1`, so the Thread B will not be blocked.

Using this pattern, we can guarantee that `f1` will run before `f2`.

## Rendezvous

Rendezvous is synchronization problem that occurs when Thread A has to wait to Thread B and Thread B has to wait to Thread A.

Example:

- `a1` must runs before `b2`;
- `b1` must runs before `a2`;

```py
# main

aArrived = Semaphore(0)
bArrived = Semaphore(0)
```

```py
# Thread A

a1()
aArrived.signal() # signalize that Thread A arrived at rendezvous 
bArrived.wait() # wait to Thread B arrive at rendezvous
a2()
```

```py
# Thread B

b1()
bArrived.signal() # signalize that Thread B arrived at rendezvous
aArrived.wait() # wait to Thread A arrive at rendezvous
b2()
```

## Mutex

Mutex is a solution to enforce mutual exclusion (event cannot happens at the same time) granting that only one thread will access the lines inside the block starting with `mutex.wait()` and `mutex.signal()`, this block of code is called `critical region`. A common problems works with threads is operation on shared variables, a sum like `count = count + 1` take more that 1 operation on the CPU, so only one thread should run this line per time, otherwise the result will be wrong.

Example:

- `count` is a shared variable.
- `count = count + 1` is a critical region.
- only one thread can run the critical region at the same time.

```py
# main

mutex = Semaphore(1)
```

```py
# Thread A

mutex.wait()        # wait to the mutex be free
count = count + 1   # only one thread can run this line per time
mutex.signal()      # signalize that the mutex is free
```

```py
# Thread B

mutex.wait()        # wait to the mutex be free
count = count + 1   # only one thread can run this line per time
mutex.signal()      # signalize that the mutex is free
```

## Multiplex

Multiplex is a solution like Multex, but now we can have `n` threads running the `critical region` at the same time.

Example:

- the `critical region` should be executed only by `n` threads at the same time, in this case lets simulate with `n = 2`.

```py
# main

n = 2
multiplex = Semaphore(n)
```

```py
# Thread A

multiplex.wait()
# critical region
multiplex.signal()
```

```py
# Thread B

multiplex.wait()
# critical region
multiplex.signal()
```

```py
# Thread C

multiplex.wait()
# critical region
multiplex.signal()
```

In this example, only 2 threads can run the `critical region` at the same time. So if Thread A and B run first `mutex.wait()`, then they are running the `critical region`, the Thread C will be blocked in the `mutex.wait()`.

For this example, we can have 3 scenarios:

| Thread A | Thread B | Thread C |
| -------- | -------- | -------- |
| Running | Running | Waiting |
| Running | Waiting | Running |
| Waiting | Running | Running |

## Barrier

Barrier is a generalization of the Rendezvous pattern. In this pattern, we can have `n` threads waiting for each other. So, when `n` threads arrive at the barrier, all threads are unblocked.

Example:

- `n-1` threads must run `barrier.wait()` before all threads can continue.

```py
# main

n = 3
barrier = Barrier(n)
```

```py
# Thread A

a1()
barrier.wait()
a2()
```

```py
# Thread B

b1()
barrier.wait()
b2()
```

```py
# Thread C

c1()
barrier.wait()
c2()
```

Let simulate a execution with this 3 threads:

- The Schedule will order the threads in this order: A -> B -> C;

1. Thread A will run `a1()`;
2. Thread A will run `barrier.wait()`, the barrier will be decremented to `2`, and the thread will be blocked;
3. Thread B will run `b1()`;
4. Thread B will run `barrier.wait()`, the barrier will be decremented to `1`, and the thread will be blocked;
5. Thread C will run `c1()`;
6. Thread C will run `barrier.wait()`, the barrier will be decremented to `0`, and all threads will be unblocked;

Lets implement a Barrier using a Semaphore:

```py
class Barrier() 
    def __init__(self, n):
        self.count = n
        self.mutex = Semaphore(1) # mutex to protect the count
        self.barrier = Semaphore(0)

    def wait(self):
        self.mutex.wait() 
        self.count -= 1
        if self.count != 0:
            self.barrier.wait() # block n - 1 first threads, the last thread never run this line
        self.mutex.signal()
        self.barrier.signal() # the last thread will be the first to run this line, will unblock one thread and the other threads will run this line in sequence
```

## Reusable Barrier

> Need to study more about this pattern.


## Queue

> Need to study more about this pattern.

Queue is a pattern where a thread can wait for another thread to run something. We want that on thread run a code alongside other runs another.

Example:

- `f1` must run alongside `f2`;
- Thread A or B can run before the other.

```py
# main

f1Queue = Semaphore(0)
f2Queue = Semaphore(0)
```

```py
# Thread A

f2Queue.signal() # Thread A signalize that it wants to run f1 alongside f2
f1Queue.wait() # Thread A wait to Thread B signalize that it can run f1
f1()
```

```py
# Thread B

f1Queue.signal() # Thread B signalize that it wants to run f2 alongside f1
f2Queue.wait() # Thread B wait to Thread A signalize that it can run f2
f2()
```

*This is like a Rendezvous*

Lets simulate a execution with this 2 threads:

- The Schedule will order the threads in this order: A -> B;

1. Thread A will run `f2Queue.signal()`, the semaphore `f2Queue` will be incremented to `1`;
2. Thread A will run `f1Queue.wait()`, the semaphore `f1Queue` will be decremented to `-1`, and the thread will be blocked;
3. Thread B will run `f1Queue.signal()`, the semaphore `f1Queue` will be incremented to `0`;
4. Thread B will run `f2Queue.wait()`, the semaphore `f2Queue` will be decremented to `0`;
5. Now both threads are unblocked and can run `f1` and `f2` alongside.

### Exclusive Queue

Exclusive Queue is a pattern where the thread that is blocking is only running with the thread that signalize it.

```py
# main

f1Counter = f2Counter = 0
mutex = Semaphore(1)
f1Queue = Semaphore(0)
f2Queue = Semaphore(0)
rendezvous = Semaphore(0)
```

```py
# Thread A

mutex.wait()
if f1Count > 0:
    f1Counter--
    f1Queue.signal()
else:
    f2Counter++
    mutex.signal()
    f2Queue.wait() #t1

f1()
rendezvous.wait()
mutex.signal()
```

```py
# Thread B

mutex.wait()
if f2Counter > 0:
    f2Counter--
    f2Queue.signal()
else:
    f1Counter++
    mutex.signal()
    f1Queue.wait()

f2()
rendezvous.signal()
```
