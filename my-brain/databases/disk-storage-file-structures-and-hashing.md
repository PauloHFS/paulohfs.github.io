---
id: disk-storage-file-structures-and-hashing
title: Disk Storage, Basic File Structures and Hashing
tags:
  - database
  - disk-storage
  - file-structures
  - hashing  
---

This are the notes that I during a DB class on College

This examples are using the OracleDB!

We can slice the database in 2 parts:

- Locical: the interface that the develop use to interact with the database
- Physical: the way that the data is stored in the disk

> store index separately from the data!

Schema: is a collection of logical structures of data, or schema objects. A schema is owned by a database user and has the same name as that user. Each user owns a single schema.

Tablespace: is a logical storage unit within an Oracle database. It is the highest level of logical storage abstraction, consisting of one or more datafiles. A database's data is collectively stored in the datafiles that constitute eawch tablespace of the database.

Rollback: is a mechanism for undoing changes to the database. The undo records used to undo these changes are collectively referred to as rollback data.

One Tablespace can have multiple datafiles, but one datafile can only be in one tablespace.
