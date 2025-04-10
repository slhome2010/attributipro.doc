---
sidebar_position: 5
---

# Defragmentation of Attributes and Groups

During operation, it becomes necessary to delete and add **Attributes** and **Groups**. Due to the nature of database functionality, records are added to the table following an auto-increment rule. This can result in large "gaps" in the numbering of `attribute_group_id`.

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

There’s nothing inherently problematic about gaps between adjacent records. However, an issue arises if `attribute_group_id = 1` is missing, as price list auto-upload modules and parsing modules rely on this specific identifier to place all **Attributes**.

The good news is that this tool restores `attribute_group_id = 1` without compromising data integrity, reordering the table accordingly.

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

Going forward, the **Group** with `attribute_group_id = 1` will be referred to as the **Parsing Group**.

The defragmentation process may take a significant amount of time, particularly for stores with a large number of attributes or products. If hosting resources are insufficient, a timeout may occur. The settings allow for separate defragmentation of **Groups** or **Attributes**.

| ![Defragmentation](/img/tutorial/defrag.png) |
|:--:|
| *Defragmentation tools settings* |

:::info  
To obtain the **Parsing Group**, it is sufficient to defragment only the **Groups**.  
:::

After defragmentation, the **Parsing Group** should appear in all trees, marked with a 🏠 icon. If the icon does not appear, try clearing your browser cache.

:::tip  
If the **Parsing Group** is already in use and contains **Attributes**, but you need to clear it, you can create a new group with the same name, transfer all attributes to it using Drag-and-Drop technology, and then rename the old **Parsing Group**.  
:::

## Defragmentation and Preparation of the Parsing Group

<iframe width="100%" height="515" src="https://www.youtube.com/embed/8OcO_4L7iBU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>