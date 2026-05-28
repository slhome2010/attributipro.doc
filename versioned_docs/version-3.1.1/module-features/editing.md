---
sidebar_position: 3
---

# Editing

Editing mode is activated on the selected **node** via `Shift + Click` or through the [context menu](/module-features/context-menu.md).

This method launches a single-line editor. Pressing `Shift + Click` again will launch a modal window with a form for editing [**Metadata**](general-info/metadata.md). The form can be launched without entering the single-line editor mode by using `F2` or through the context menu.

:::info
The form will only launch for **Nodes** that have metadata. **Value Metadata** can be edited in the product form, individually for each product.
:::

Data editing occurs in each tree and for each language separately. Synchronization is triggered when necessary to ensure data integrity.

<iframe width="100%" height="515" src="https://www.youtube.com/embed/jBcowwJZlPY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Difference Between Editing **Templates** and **Values**  

:::tip
If you make changes to a **Value**, the changes will occur in all products where this **Value** is present, and consequently in all **Templates**.  
This means that if a **Value** is present in several **Templates**, the changes will affect all of them.  
:::

:::tip
If changes are made to a **Template**, it affects all products where this **Attribute** is present and its value exactly matches the **Template** being edited. Other products and **Templates** will not be affected.  
:::

:::warning
Be sure to consider the peculiarities of editing **Values** in the description of the [Multiple Values ​​(Templates)](/settings/multivalue.md) setting.
:::

<iframe width="100%" height="515" src="https://www.youtube.com/embed/_K9NL4JgAdw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>