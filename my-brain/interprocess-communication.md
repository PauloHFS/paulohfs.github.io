# Inter-Process Communication (IPC)

All the time the processes need to communicate with each other to exchange information, like a server with a database, this process is called **Inter-Process Communication**.

There various methods to implements IPC, like:

## Shared Memory

To communicate with shared memory, a process create a space in the memory with other process can access.

Advantages:

- fast, the processes don't need to copy the data to send to other process they access the same area in memory.

Disadvantages:

- not scalable, the processes need to be in the same machine.
- the processes need to be synchronized to access the shared memory, you had to guarantee the mutual exclusion.

## Sockets

Sockets are a common way to communicate between processes, usually the processes are in different machines (network sockets). The processes communicate at one time and exchange some data then the connection is closed.

Advantages:

- scalable, the processes can be in different machines.
- the processes can be in different languages, the only thing they need to know is the protocol to communicate.
- communications is asynchronous based in events.

Disadvantages:

- each process need to connect simultaneously to communicate.

Examples:

- real time chats
- [Web Sockets](https://en.wikipedia.org/wiki/WebSocket)

## Message Queues

Message queues are like sockets, but the processes don't need to be connected at the same time, the process send a message to a queue and the other process read the message from the queue.

Advantages:

- scalable, the processes can be in different machines.
- the processes can be in different languages, the only thing they need to know is the protocol to communicate.
- asynchronous, the processes don't need to be connected at the same time.
- the message can be stored in the queue until the other process read it.

Disadvantages:

- the message can be lost if the queue is not persistent.

### references

<https://en.wikipedia.org/wiki/Inter-process_communication>
