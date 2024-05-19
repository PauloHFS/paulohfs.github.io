---
id: godot-groups
title: Groups
---

In Godot, we can use groups to organize our nodes. We can add nodes to a group and then access all nodes in that group.

It's useful when we want to apply the same logic to multiple nodes like:

- Send a signal to all nodes in a group.
- Call a function in all nodes in a group.
- Get a list of all nodes in a group.

For example, we can create a group called `enemies` and add all enemies to this group. Then we can call a function to damage all enemies in the group.
