---
sidebar_position: 4
---

# Overriding the Value Insertion Method

Until now, **Values** or **Templates** were inserted into a product according to the **`Method`** set in the settings of [Adding Attribute Values to a Product](/settings/product.md).

To avoid changing the default settings every time, an option has been added to *override* the **`Method`** of value insertion in real time.

| **Insertion Method** |
|:--|
| `Clear` |
| `Do not change` |
| `Replace with default` |
| `Only in empty fields` |

The **`Overridden Method`** takes priority but is only active while working within the product form. When the page is reloaded or another product is loaded, it resets to the [current module setting](/settings/product.md). The effect of the **`Overridden Method`** applies to **all operations** with **Default Templates** in the product form.

Insertion of the **Default Template** is performed synchronously for all languages at the moment of category assignment or when selecting a new **Attribute**.

If the filter is set to `Default`, and the list view switch is set to `Templates`, then only **Default Templates** will be displayed in the list. Selecting an item from the list will trigger the synchronous insertion of the corresponding **Default Templates** into other languages.

If you want to protect previously entered **Values**, choose the insertion method `Only in empty fields`.
