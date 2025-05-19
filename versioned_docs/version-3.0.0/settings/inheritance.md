---
sidebar_position: 4
---

# Inheritance {#inheritance}

| Item | Description |  
| --- | --- |  
| **Add to all subcategories** | When a new **Attribute** is added to a category, it will be recursively added to all child categories (subcategories). The **Values** of the attribute in all products of these subcategories will be populated according to the section “Adding attribute values to a product.” |  
| **Remove from all subcategories** | When an **Attribute** is removed from a category, it will be recursively removed from all subcategories, and its **Values** will be removed from all products in those subcategories. |  
| **Auto-select subcategories with hierarchy** | Recursively selects all child subcategories of a selected category. If all child categories are selected, the parent category is automatically selected as well. |  

The inheritance algorithm requires some clarification. The first two settings provide a rigid algorithm. But what if you don't want to add a particular attribute to every subcategory?

You can mark the target subcategories using checkboxes. As long as no subcategory is selected, the rules of recursive addition/removal apply (if the first two options are enabled). Once at least one category is selected, recursion is canceled. Actions will only affect the selected categories.

## Hierarchy {#hierarchy}

**Auto-select subcategories with hierarchy** allows you to recursively select all subcategories by clicking the checkbox of the parent category.

:::warning
When the hierarchy mode is enabled, the reverse rule also applies: if all child categories are selected, the parent is automatically selected.  
Or — if at least one child is deselected, the parent is automatically deselected.
:::

| ![Hierarchical multi-selection](/img/tutorial/en/hierarchy_en.png) |
|:--:|
| *Hierarchical multi-selection* |

If an arbitrary set of categories is needed, the **Auto-select subcategories with hierarchy** mode should be disabled.  
For quick control over this mode, there is a **Consider hierarchy** option in the **Settings** context menu of the **Categories** tree.

| ![Hierarchical operate](/img/tutorial/en/hierarchy_operative_en.png) |  
|:--:|
| *Hierarchical operate* |

:::warning
Drag-and-Drop or Copy-Paste operations will apply to all selected categories and the target category, even if the target is not selected.  
The target is the category where you are dropping the attribute using Drag-and-Drop or Copy-Paste.
:::
