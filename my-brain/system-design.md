---
id: system-design
title: System Design
tags:
    - System Design
    - Distributed Systems
    - Design Patterns    
---


Contents that I want to learn about distributed systems:

| Name | Type | Link |
| --- | --- | --- |
| Designing Data Intensive Applications | Book | [⛓️](https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321) |
| Design Patterns for Distributed Systems | Article |  [⛓️](https://www.freecodecamp.org/news/design-patterns-for-distributed-systems) |
| How Message Queues Work in Distributed Systems | Article | [⛓️](https://www.freecodecamp.org/news/how-message-queues-work-in-distributed-systems-2f469d6c5179/) |
| System Design for Beginners Course | Course | [⛓️](https://youtu.be/m8Icp_Cid5o) |
| System Design by Gaurav Sen | Playlist | [⛓️](https://youtube.com/playlist?list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX) |
| Distributed Systems: Principles and Paradigms by Tanenbaum | Book | [⛓️](https://www.amazon.com.br/Distributed-Systems-Principles-Paradigms-2nd/dp/0132392275) |
| Distributed System course USP | Course | [⛓️](https://edisciplinas.usp.br/course/view.php?id=105816) |

## Some notes (will become a content to learn)

- Subscribe in Rinha de Backend
- Learn about Scheduler
- Learn about Event Driven
- Learn about Webhook
- Learn about Mutex, Semaphore, Distributed Lock
- Learn about Materialized Views
  - how to update the view in a fast and reliable way, real-time preferably
- Learn about CAP Theorem
- Entra na rinha de backend também

## Some problems to solve

- A database with 3 replica set and work eventual consistency
- Synchronization of data between 2 microservices and database
- Imagine that you have a Ledger that controls the balance of accounts.
  - How do you ensure that only 1 request changes the balance at a time?
  - How do you ensure that you do not duplicate payments?
- How do you implement rate limit?
- How do you handle only being able to have 1000 requests per 10 minutes?
