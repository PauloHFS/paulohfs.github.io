---
id: "drive-development"
title: "Driver Development"
tags: ["linux", "driver", "development"]
---

The most simple drive code had to have the functions `module_init` and `module_exit` to initialize and finalize the module. This are C macros that are defined in the `linux/init.h` header file.

```c

### module_init

This register the constructor function of the module. This function is called when the module is loaded into the kernel. In this function we can register the device driver, allocate resources, and initialize the driver.

### module_exit

This register the destructor function of the module. This function is called when the module is removed from the kernel. In this function we can unregister the device driver, free resources, and finalize the driver.
