---
sidebar_position: 1
---

# Working with the Tree

To activate a tree element, click on it with the left mouse button.

To expand (open) a tree element, double-click on it with the left mouse button.

Right-clicking on any **node** will open the [context menu](/module-features/context-menu.md).

You can drag **nodes** via Drag'n'Drop both within a single tree and between different trees, if allowed by the context of the action and the control mechanisms like `levelcontrol`, `selectcontrol`, and others.

Each possible action will be described in detail in the following articles.

## Multi-selection {#using-select}

All **Drag'n'Drop** and **Copy-Paste** actions can be performed not only on a single *node*, but also on multiple *nodes* at once.

To select multiple *nodes*, hold down **Ctrl** and click on the desired items (`Ctrl + Click`).

To prevent errors, the module includes a `selectcontrol` mechanism. For example, you cannot select both *Groups* and *Attributes* at the same time.

## Tree Differences

Trees with **Groups** and **Attributes** are present on three tabs — *`Attributes`*, *`Category Attributes`*, and *`Products`* — and may look similar, but there are differences.

| **Tab** | **Allowed Actions** | **Limitations** |
|--------|----------------------|-----------------|
| *`Attributes`* | All Drag'n'Drop actions, context menu, and hotkeys | No limitations |
| *`Category Attributes`* | All Drag'n'Drop actions, context menu, and hotkeys | Window scrolling is disabled during Drag'n'Drop |
| *`Products`* | Only navigation through tree nodes is allowed | Only one node can be selected |
