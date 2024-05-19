---
id: dogot-pausing
title: Pausing
---

Godot has a built-in pausing system that can be used to pause the game. This is useful for when you want to pause the game when the player presses the pause button.

1. Create the pause menu scene.
2. Set the process mode to `When Paused` in the scene.
3. add the pause menu to the scene tree and hidden it.
4. Add the following code to the script of the main scene.

    ```gd
    func pause():
        get_tree().paused = true
        $PauseMenu.show()

    func unpause():
        get_tree().paused = false
        $PauseMenu.hide()
    ```

5. Connect the pause and unpause functions to the pause button.
