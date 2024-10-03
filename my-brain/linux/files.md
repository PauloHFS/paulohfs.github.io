---
id: "files"
title: "Files"
tags: ["linux", "files"]
---

Files are a fundamental concept in Linux and other operating systems. They are used to store data, programs, and other information on disk. In Linux, files are organized into a hierarchical directory structure, with directories containing files and other directories. This structure is similar to a tree, with the root directory at the top and subdirectories branching off from it.

## Device drivers System Calls

One of the most commons system calls that a device driver implements is File Operations.

Linux exposes a device as a file. The common operations over a file is related to a device too.

The file operations are:

- open
- read
- write
- close
- ioctl
- seek

Drivers can be of three types: character, block (fs/drive) and network.
