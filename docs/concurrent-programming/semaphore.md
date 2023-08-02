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

<!-- 
mutex
semaforo
exclusão mutuas
condição de corrida
rendezvouz -->

# Semaphore

Before understand what is a semaphore, we need to understand some concepts:

- Synchronization: Event A must happen before event B.
- Mutual Exclusion: Event A and B must not happen at the same time.

That are called synchronization constraints. So, because of the [process synchronization of the Operation System (OS)](https://www.scaler.com/topics/operating-system/process-synchronization-in-os/), we can't guarantee that a process will run in a specific order. So, we need to use some techniques to guarantee that a process will run in a specific order. And this is the main goal of the semaphore.

