---
id: changing-scenes
title: Changing Scenes
---

In Godot, we have two ways to change scenes:

### `change_scene_to_file()`

```gd
get_tree().change_scene_to_file(path)
```

### `change_scene_to_packed()`

```gd
var packed_scene = load(path)
get_tree().change_scene_to_packed(packed_scene)
```
