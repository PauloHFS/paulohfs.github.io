---
id: semaphore
title: Semaphore
tags:
    - Concurrent Programming
    - Semaphore
    - Mutex
    - Exclusion
    - Race Condition
    - Rendezvous        
---

# Semaphore

Before understand what is a semaphore, we need to understand some concepts:

- Synchronization: Event A must happen before event B.
- Mutual Exclusion: Event A and B must not happen at the same time.

That are called synchronization constraints. So, because of the [process synchronization of the Operation System (OS)](https://www.scaler.com/topics/operating-system/process-synchronization-in-os/), we can't guarantee that a process will run in a specific order. So, we need to use some techniques to guarantee that a process will run in a specific order. And this is the main goal of the semaphore.

## Definition

Semaphore is a data structure created by Dijkstra that is useful for solving a variety of synchronization problems. It's like a integer, but with some peculiarities.

- When you create a Semaphore you can initialize it with any integer.
- Unlike a integer, you can only increment `(+1)` and decrement `(-1)` the value.
- You can't read the current value of the semaphore.
- When a thread decrement the semaphore, its check if the result of the operation is negative, if true the thread blocks itself (notify the kernel scheduler that it can't proceed) and cannot continue until another thread increment the thread.
- When a thread increment the semaphore, its check if there are other threads waiting, one of then gets unblocked.

By definition we can infer some facts:

- Cause we don't know the semaphore value there is no way to know if a decrement will block the thread.
- After a thread increment a semaphore and another thread gets unlock/woken up, both threads now continue running concurrently. Theres is no way to now what thread will runs immediately (Thread A may unlock Thread B and lost CPU at that time, then the scheduler can set Thread B to get the CPU).
- When increment a semaphore you don't know if there is a thread waiting, so the number os threads that you can unlock maybe `0` or `1`.

About what the value of the semaphore means:

- `< 0` - negative; this is the number of threads blocked and are waiting.
- `0` - there is no thread waiting, but if a threads tries to decrements it will be blocked.
- `> 0` - positive; this is the number of threads that can decrement without blocking.

### Syntax

The constructor sometimes can show up like:

```
function1Done = Semaphore(1)
```

The increment:

```
function1Done.increment()
function1Done.signal()
function1Done.up()
function1Done.V() // Dijkstra proposed this, insane!
```

The decrement:

```
function1Done.decrement()
function1Done.wait()
function1Done.down()
function1Done.P() // Dijkstra again ;-; 
```
