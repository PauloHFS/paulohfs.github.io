---
id: "linux-kernel"
title: "Linux Kernel"
---

The Linux kernel is the core of the Linux operating system. It is responsible for managing hardware resources, scheduling processes, and providing a secure environment for applications to run.

The kernel is a abstraction layer between the hardware and the software. It is the first program that runs when the computer is turned on.

![alt text](image.png)

In a computer we have a cpu, ram, dram, ssd, etc.

The kernel has

- scheduler to manage the processes on cpu
- manages the hardware (kernel drivers, kernel infrastructure)

Every hardware conects to the machine needs to be know by the kernel. The code that does this is called a driver.

### Where is stored?

In the hard drive, in the /boot folder.

### Boot

When the computer is turned on, the bios loads the bootloader in the ram, which loads the kernel in the ram. The bios is stored in a chip in the motherboard (rom). The bootloader and the kernel is stored in the hard drive.

The kernel came with some basics drivers, like the keyboard and the screen.

## DTB (Device Tree Blob)

The kernel needs to know the hardware that is connected to the machine. The DTB is a datastructure file that contains the information about the hardware.

The bootloader loads the kernel and the DTB in the ram.
