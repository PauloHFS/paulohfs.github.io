---
id: concurrency-vs-parallelism
title: Concurrency vs Parallelism
tags:
    - Concurrent Programming
    - Process
    - Thread
    - Routine
    - Concurrency
    - Parallelism
---

# Concurrency vs Parallelism

## Definitions

- **Concurrency** is the act of running and managing multiple computations at the same time.
- **Parallelism** is the act of running multiple computations simultaneously.

All parallelism is concurrency, but not all concurrency is parallelism. We can have concurrency without parallelism. Example:

- A single-core CPU can run multiple processes, but only one at a time. So, the processes are running concurrently, but not in parallel.
- A multi-core CPU can run multiple processes simultaneously. So, the processes are running concurrently and in parallel.

## Processes, Threads and Routines

- **Process** is the program in exacution on the OS.
- **Threads** are the units of execution within a process.
- **Coroutine** is similar to a thread, but it is cooperative, not preemptive. The routine must explicitly give up control to the scheduler.

You can have multiple threads in a process, and in the threads you can have multiple coroutines without blocking the thread.

## Litmus Test

How to tell if a program run in concurrent or parallel?

- Single-core CPU: All programs run concurrently, but not in parallel.
- Multi-core CPU: All programs run concurrently and may run in parallel sometimes.
