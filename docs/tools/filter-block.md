---
sidebar_position: 2
---

# Filter Block

Starting from this and future versions, the filter has been moved to a separate block shared across all tools.

| ![Tools filter](/img/tutorial/Tools_filter.jpg) |
|:--:|
| *Tools filter open* |

For some tools, the filter is mandatory, for others optional, and for some, it is not needed at all. The table below shows how each tool interacts with the filter and its behavior when applied.

| **Tool** | **Filter** | **Tree** | **Behavior** |
|:--|:--|:--|:--|
| Remove Empty Values | Not needed |  |  |
| Remove Broken Links | Not needed |  |  |
| Attribute Defragmentation | Not needed |  |  |
| Attribute Sorting | Not needed |  |  |
| Remove Unlinked Attributes | Required | Attribute Groups | If nothing is selected, the task will not run |
| Merge Duplicates | Required | Attribute Groups | If nothing is selected, the task will not run |
| Category Attributes | Required | Categories | If nothing is selected, the task will not run |
| Clone Language | Not needed |  |  |
| Separator Replacement | Optional | Attribute Groups + Categories | If nothing is selected, search and replacement will run across the entire database |
| Case Conversion | Optional | Attribute Groups + Categories | If nothing is selected, search and replacement will run across the entire database |
