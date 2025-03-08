---
sidebar_position: 5
---

# Attribute and Group Defragmentation

During operation, **Attributes** and **Groups** are frequently added and removed. Due to the way databases work, records in a table are inserted following an auto-increment rule. As a result, large gaps can appear in the `attribute_group_id` numbering.

## Example Table Before Defragmentation

| `attribute_group_id` | `sort_order` |
|----------------------|-------------|
| 7  | 4  |
| 8  | 5  |
| 12  | 3  |
| 37  | 2  |
| 68  | 1  |
| 146 | 9  |
| 363 | 7  |
| 364 | 6  |
| 366 | 8  |

Gaps between records are generally not an issue. However, a problem arises if `attribute_group_id = 1` is missing, as price list import modules and parsing tools rely on this identifier to store all **Attributes**.

The good news is that this tool restores `attribute_group_id = 1` while preserving data integrity and reorganizing the table.

## Example Table After Defragmentation

| `attribute_group_id` | `sort_order` |
|----------------------|-------------|
| 1  | 4  |
| 2  | 5  |
| 3  | 3  |
| 4  | 2  |
| 5  | 1  |
| 6  | 9  |
| 7  | 7  |
| 8  | 6  |
| 9  | 8  |

From this point forward, the **Group** with `attribute_group_id = 1` will be referred to as the **Parsing Group**.

Defragmentation can take a significant amount of time, especially in stores with a large number of attributes or products. If hosting resources are insufficient, timeouts may occur. The tool allows separate defragmentation of **Groups** and **Attributes**.

| ![Defragmentation](/img/tutorial/defrag.png) |
|:--:|
| *Defragmentation tools settings* |

:::info
To create a **Parsing Group**, you only need to defragment **Groups**.
:::

After defragmentation, the **Parsing Group** should appear in all trees, marked with the 🏠 icon. If the icon does not appear, try clearing your browser cache.

:::tip
If the **Parsing Group** is already in use and contains **Attributes**, but needs to be cleared, you can create a new group with the same name and use the Drag-and-Drop method to transfer all attributes there. Then, rename the old **Parsing Group**.
:::

## Defragmentation and Parsing Group Setup

<iframe width="100%" height="515" src="https://www.youtube.com/embed/8OcO_4L7iBU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
