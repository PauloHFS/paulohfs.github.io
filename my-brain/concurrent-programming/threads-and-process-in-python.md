---
id: threads-and-process-in-python
title: Threads and Process in Python
tags:
  - Concurrent Programming
---

## Introduction

To apply concurrency in python we can use threads or processes. To exemplify I will use parallel loops to demonstrate the technics.

## Threads

We can create a new thread for each iteration of a loop.

```py
# SuperFastPython.com
# example of a parallel for loop with the Thread class
from threading import Thread

# execute a task
def task(value):
    # add your work here...
    # ...
    # all done
    print(f'.done {value}')

# protect the entry point
if __name__ == '__main__':
    # create all tasks
    threads = [Thread(target=task, args=(i,)) for i in range(20)]
    # start all threads
    for thread in threads:
        thread.start()
    # wait for all threads to complete
    for thread in threads:
        thread.join()
    # report that all tasks are completed
    print('Done')
```

### Keep in mind

- This is good to small number of tasks.
- Don't scale well, if you have a lot of tasks it will slow down cause they will compete for the CPU.
- The results from tasks can't be returned easily.

## ThreadPool

We can use a thread pool to reuse threads. This is programming pattern that handles the creation and management of threads for us.

```py
# SuperFastPython.com
# example of a parallel for loop with the ThreadPool class
from multiprocessing.pool import ThreadPool

# execute a task
def task(value):
    # add your work here...
    # ...
    # return a result, if needed
    return value

# protect the entry point
if __name__ == '__main__':
    # create the pool with the default number of workers
    with ThreadPool() as pool:
        # issue one task for each call to the function
        for result in pool.map(task, range(100)):
            # handle the result
            print(f'>got {result}')
    # report that all tasks are completed
    print('Done')

```

### Keep in mind

- This is good to runs tasks that involve calling the same function many times with different arguments.
- You can use functions instead of `map` to run different functions in parallel, using lazy, multiples args, async, etc.

## ThreadPoolExecutor

We can create a pool of worker threads using the ThreadPoolExecutor class with a modern executor interface.

This allows tasks to be issued as one-off tasks via the submit() method, returning Future object that provides a handle on the task. It also allows the same function to be called many times with different arguments via the map() method.

```py
# SuperFastPython.com
# example of a parallel for loop with the ThreadPoolExecutor class
import concurrent.futures

# execute a task
def task(value):
    # add your work here...
    # return a result, if needed
    return value

# protect the entry point
if __name__ == '__main__':
    # create the pool with the default number of workers
    with concurrent.futures.ThreadPoolExecutor() as exe:
        # issue some tasks and collect futures
        futures = [exe.submit(task, i) for i in range(50)]
        # handle results as tasks are completed
        for future in concurrent.futures.as_completed(futures):
            print(f'>got {future.result}')
        # issue one task for each call to the function
        for result in exe.map(task, range(50)):
            print(f'>got {result}')
    # report that all tasks are completed
    print('Done')
```

### Keep in mind

- This is the preferred approach to run parallel for-loops.
- This is good to run one-off tasks as well as many calls to the same function with different arguments.

## Processes

We can create a new child process for each iteration of the loop.

```py
# SuperFastPython.com
# example of a parallel for loop with the Process class
from multiprocessing import Process

# execute a task
def task(value):
    # add your work here...
    # ...
    # all done
    print(f'.done {value}', flush=True)

# protect the entry point
if __name__ == '__main__':
    # create all tasks
    processes = [Process(target=task, args=(i,)) for i in range(20)]
    # start all processes
    for process in processes:
        process.start()
    # wait for all processes to complete
    for process in processes:
        process.join()
    # report that all tasks are completed
    print('Done')
```

### Keep in mind

- This is good to small number of tasks.
- Don't scale well, if you have more tasks that CPU cores it will slow down cause they will compete for the CPU.
- The results from tasks can't be returned easily.

## Pool

We can create a pool of worker processes that can be reused for many tasks.

This can be achieved using the Pool class that will create one worker for each logical CPU core in the system.

The Pool class can be created using the context manager interface, which ensures that it is closed and all workers are released once we are finished with it.

```py
# SuperFastPython.com
# example of a parallel for loop with the Pool class
from multiprocessing import Pool

# execute a task
def task(value):
    # add your work here...
    # ...
    # return a result, if needed
    return value

# protect the entry point
if __name__ == '__main__':
    # create the pool with the default number of workers
    with Pool() as pool:
        # issue one task for each call to the function
        for result in pool.map(task, range(100)):
            # handle the result
            print(f'>got {result}')
    # report that all tasks are completed
    print('Done')
```

### Keep in mind

- This is good to runs tasks that involve calling the same function many times with different arguments.
- You can use functions instead of `map` to run different functions in parallel, using lazy, multiples args, async, etc.

### ProcessPoolExecutor

we can create a pool of worker processes using the ProcessPoolExecutor class with a modern executor interface.

This allows tasks to be issued as one-off tasks via the `submit()` method, returning Future object that provides a handle on the task. It also allows the same function to be called many times with different arguments via the `map()` method.

```py
# SuperFastPython.com
# example of a parallel for loop with the ProcessPoolExecutor class
import concurrent.futures

# execute a task
def task(value):
    # add your work here...
    # return a result, if needed
    return value

# protect the entry point
if __name__ == '__main__':
    # create the pool with the default number of workers
    with concurrent.futures.ProcessPoolExecutor() as exe:
        # issue some tasks and collect futures
        futures = [exe.submit(task, i) for i in range(50)]
        # process results as tasks are completed
        for future in concurrent.futures.as_completed(futures):
            print(f'>got {future.result}')
        # issue one task for each call to the function
        for result in exe.map(task, range(50)):
            print(f'>got {result}')
    # report that all tasks are completed
    print('Done')
```

### Keep in mind

- This is the preferred approach to run parallel for-loops.
- This is good to run one-off tasks as well as many calls to the same function with different arguments.

## What to use?

When you Threads or Processes depends of the problem you are trying to solve.

**Thread-based concurrency is good for I/O-bound tasks**, such as reading and writing files, network communication, database access, interact with devices, etc. This is note good for CPU-bound tasks because the GIL will prevent the threads from running in parallel, so threads are better, cause when one is waiting for I/O the GIL is release and another thread can run.

**Process-based concurrency is good for CPU-bound tasks** like calculating, parsing, encoding and modeling, such as image processing, video encoding, machine learning, etc. If you do this type of operations in threads, each task will be locked by GIL.

Prefer to use the `ThreadPoolExecutor` or `ProcessPoolExecutor` classes to run parallel for-loops.

- Better interface to run the tasks.
- Better performance by run only the number of tasks that can be run in parallel.
- Better performance by reusing threads or processes.
- When submitting tasks, they are queued and run as soon as a worker is available.

## References

1. [Thread](https://superfastpython.com/threading-in-python/)
2. [ThreadPool](https://superfastpython.com/threadpool-python/)
3. [ThreadPoolExecutor](https://superfastpython.com/threadpoolexecutor-in-python/?ck_subscriber_id=2308580045&utm_source=convertkit&utm_medium=email&utm_campaign=Lesson+03%3A+Parallel+Loops+with+ThreadPoolExecutor%20-%205160219)
4. [Process](https://click.convertkit-mail2.com/n4upknex0efquq2opna6h7mrlwgg/3ohphduq5g5w7nup/aHR0cHM6Ly9TdXBlckZhc3RQeXRob24uY29tL211bHRpcHJvY2Vzc2luZy1pbi1weXRob24v)
5. [Pool](https://click.convertkit-mail2.com/r8u5ozvd0vb9udk5rwi2hxkp3n66/7qh7h2u027w3l7c9/aHR0cHM6Ly9TdXBlckZhc3RQeXRob24uY29tL211bHRpcHJvY2Vzc2luZy1wb29sLXB5dGhvbi8=)
6. [ProcessPoolExecutor](https://superfastpython.com/processpoolexecutor-in-python/?ck_subscriber_id=2308580045&utm_source=convertkit&utm_medium=email&utm_campaign=Lesson+06%3A+Parallel+Loop+with+ProcessPoolExecutor%20-%205160227)
