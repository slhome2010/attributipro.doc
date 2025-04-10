---
sidebar_position: 3
---

# Remove Empty Values

Empty **Values** typically arise due to operator errors. The most common reasons include:

1. During manual editing of a product form, the "Save" button is pressed after adding an **Attribute** without entering a corresponding **Value**.

2. Using Attribut&pro to add an **Attribute** with an unfilled [Duty Template](/general-info/duty.md) to a category.

| ![Empty values1](/img/tutorial/empty4.jpg) |
|:--:|
| *Empty values in product form* |

| ![Empty values2](/img/tutorial/empty5.jpg) |
|:--:|
| *Empty values in Duty Template* |

As a result, products end up with empty **Values** for attributes. These empty values look unattractive in the store’s filter and can mislead customers.

To avoid manually searching the entire database for products with empty **Values**, this tool can be used to remove references to such products.

:::info  
The module maintains a consistent data structure synchronized across all languages. Therefore, only records where **Values** are empty for all languages will be deleted.  
:::

:::tip  
If the frontend filter handles this issue independently, it’s better not to use this tool.  
:::
