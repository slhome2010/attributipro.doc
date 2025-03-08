---
sidebar_position: 2
---

# Context Menu
The context menu is opened by right-clicking on a **Node**.

Actions that are allowed for the selected **Nodes** in the tree will be active in the context menu.  
These actions can also be triggered using "hotkeys."

The main manipulations with **Groups** and **Attributes** are available through Drag&Drop, the context menu, and hotkeys.  
All actions are listed in the [summary table](/module-features/summary-table.md).

|   | **Action** | **Hotkeys** | **Description** |
|---|------------|------------|-----------------|
| ✏️ | Edit | `Shift + Click` | Enables single-line editor mode. Any **Node** can be edited. |
| 🗑️ | Delete | `Del` | Deletes the selected **Node** or multiple selected **Nodes** in the tree. |
| ✂️ | Cut | `Ctrl + X` | Copies the selected **Node** to the clipboard. After pasting or merging, the **Node** is removed. |
| 📄 | Copy | `Ctrl + C` | Copies the selected **Node** to the clipboard. It can be pasted elsewhere. |
| 📋 | Paste | `Ctrl + V` | Pastes the **Node** stored in the clipboard. |
| 🔗 | Merge | `Alt + V` | Merges the **Node** from the clipboard with the selected target **Node**. |
| ⏩ | Clone | `Alt + C` | Fills **Default Templates** for all languages with identical content. |
| 📂 | Expand/Collapse | `Ctrl + B` | Toggles between expanding all collapsed nodes or collapsing expanded nodes. |
| 🔄 | Refresh | `Shift + R` | Reloads the selected tree. |
| ⚙️ | Settings | — | Opens the tree settings dialog. Allows managing "Sorting Order" and expand/collapse mode. |
| ➕ | New Group | `Ctrl + M` | Adds a new **Group** and enables the single-line editor. Synchronously added to all trees. |
| ➕ | New Attribute | `Ctrl + Q` | Adds a new **Attribute** to the selected **Group** and enables the single-line editor. Synchronously added to all trees. |

## Quick Settings Menu {#using-dialog}

If the **"Settings"** option is selected from the *context menu*, a quick management dialog for the tree will appear.

| **Option** | **Purpose** |
|-----------|------------|
| **Auto-collapse** | Enabled by default, meaning that when an element in the tree is expanded, the nearest related elements (on the same level) collapse. This reduces screen clutter. If multiple expanded elements need to be visible simultaneously, disable this option. This setting affects the *context menu* options **"Expand"** and **"Collapse"**. |
| **Sorting Order** | Allows temporarily disabling sorting in a specific tree. If disabled, everything is sorted alphabetically. |
| **Lazy Loading** | Quick control over the tree loading mode. If enabled, child nodes load on demand. If disabled, the entire tree loads fully. More details in the section [Node Loading](/general-info/lazy-load.md). |
| **Consider Hierarchy** | Works only in the category tree. Allows managing recursive subcategory selection. |
| **Discrepancies** | Works only in the product tree. Allows managing [product selection](/general-info/product-filter.md). |
