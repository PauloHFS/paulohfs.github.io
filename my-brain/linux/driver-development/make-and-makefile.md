---
id: "make-and-makefile"
title: "Make and Makefile"
tags: ["make", "makefile"]
---

## Make

`make` is a automation tool that helps we to executing commands in a more organized way. It is used to compile and build large projects, but it can be used for any task that requires executing a series of commands.

Its usefull when we have a project with multiple files and we need to compile them in a specific order. Instead of compiling each file manually, we can use `make` to automate the process.

### Usage

```bash
make [target]

# passing a Makefile

make -f /foo/bar/Makefile [target]

```

## Makefile

A `Makefile` is a file that contains a set of rules used by `make`.

### Syntax

```makefile
target: dependencies
    command
```

- `target`: The name of the target to be executed.
- `dependencies`: The files or targets that the target depends on. If any of the dependencies are newer than the target, the command will be executed.
- `command`: The command to be executed.

### Example

```makefile
hello: hello.c
    gcc -o hello hello.c
```

In this example, we have a target called `hello` that depends on the file `hello.c`. The command `gcc -o hello hello.c` is executed to compile the `hello.c` file.

### Variables

Variables can be defined in a `Makefile` to store values that can be reused throughout the file.

```makefile
CC = gcc
CFLAGS = -Wall -Wextra
PATH += /usr/local/bin # append to PATH

hello: hello.c
    $(CC) $(CFLAGS) -o hello hello.c
```
