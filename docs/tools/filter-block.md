---
sidebar_position: 2
---

# Filter Block

In this and subsequent versions, the filter has been moved to a separate block common for all tools.

| ![Tools filter](/img/tutorial/tools_filter.png) |
|:--:|
| *Tools filter open* |

For some tools, the filter is mandatory, for some it is optional, and for others it is not needed at all. The table below shows the correspondence of the filter and tool behavior when it is applied.

| **Tool** | **Filter** | **Tree** | **Behavior** |
|:--|:--|:--|:--|
| Delete empty values | Not needed |  |  |
| Delete invalid links | Not needed |  |  |
| Attribute defragmentation | Not needed |  |  |
| Attribute sorting | Not needed |  |  |
| Delete not linked to product | Mandatory | Attribute groups | If nothing is selected, the task is not performed |
| Merge duplicates | Mandatory | Attribute groups | If nothing is selected, the task is not performed |
| Category attributes | Mandatory | Categories | If nothing is selected, the task is not performed |
| Clone language | Not needed |  |  |
| Separator replacement | Optional | Attribute groups + Categories | If nothing is selected, search and replace is performed across the entire DB |
| Case change | Optional | Attribute groups + Categories | If nothing is selected, search and replace is performed across the entire DB |