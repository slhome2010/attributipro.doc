---
sidebar_position: 2
---

# Context Menu

Invoke the context menu by right-clicking any **node**.

Actions permitted for selected **nodes** in the tree will appear as active menu items.  
These actions can also be triggered via keyboard shortcuts.

Core operations with **Groups** and **Attributes** are accessible through Drag&Drop, context menu, and hotkeys.  
All actions are summarized in the [reference table](/module-features/summary-table.md).

|   | **Action** | **Hotkeys** | **Description** |
|---|------------|--------------------|--------------|
| ✏️ | Edit | `Shift + Click` | Activates single-line editor mode. Editable for any **node**. |
| 📰 | Form | `F2` | Opens modal window with **Metadata** editing form. |
| 🗑️ | Delete | `Del` | Deletes selected **node(s)**. |
| ✂️ | Cut | `Ctrl + X` | Copies **node** to clipboard. Removed after pasting/merging. |
| 📄 | Copy | `Ctrl + C` | Copies **node** to clipboard for pasting. |
| 📋 | Paste | `Ctrl + V` | Pastes **node** from clipboard. |
| 🔗 | Merge | `Alt + V` | Merges clipboard **node** with target **node**. |
| ⏩ | Clone | `Alt + C` | Populates **Default templates** with identical content across all languages. |
| 📂 | Expand/Collapse | `Ctrl + B` | Toggle: expands all collapsed nodes or collapses expanded ones. |
| 🔄 | Refresh | `Shift + R` | Reloads selected tree. |
| ⚙️ | Settings | — | Opens tree configuration dialog for managing sorting order and expand/collapse behavior. |
| ➕ | New Group | `Ctrl + M` | Adds **Group** and activates single-line editor. Added synchronously to all trees. |
| ➕ | New Attribute | `Ctrl + Q` | Adds **Attribute** to selected **Group** and activates editor. Added synchronously to all trees. |

## Quick Settings Menu {#using-dialog}

Selecting **"Settings"** in the context menu opens a dialog for real-time tree management.

| **Option** | **Purpose** |
|-----------|--------------|
| **Auto Collapse** | Enabled by default. Collapses sibling nodes when expanding an element to reduce visual clutter. Disable to view multiple expanded elements simultaneously. Affects **"Expand"**/**"Collapse"** context menu items. |
| **Sort Order** | Temporarily disables custom sorting in a tree. When disabled, alphabetical sorting applies. |
| **Lazy Load** | Controls tree loading mode. Enabled: child nodes load on demand. Disabled: full tree loads immediately. See [Node Loading](/general-info/lazy-load.md). |
| **Given the Hierarchy** | Category tree only. Manages recursive selection of subcategories. |
| **Mismatch Mode** | Applies only to the product tree. [Filters products](/general-info/product-selection.md) that do not contain the selected attribute, value, or template. |
