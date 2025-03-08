---
sidebar_position: 4
---

# Inheritance

| Item | Description |  
| --- | --- |  
| **Add to all subcategories** | When adding a new **Attribute** to a category, it will be recursively added to all child categories (subcategories). The **Values** of the attribute in all products within these subcategories will be filled according to the section "Adding attribute values to a product." |  
| **Remove from all subcategories** | When deleting an **Attribute** from a category, it will be recursively removed from all subcategories, along with its **Values** from all products in those subcategories. |  
| **Auto-selection of subcategories with hierarchy consideration** | Recursively selects all child subcategories of the marked category. If all child categories are marked, the parent is automatically selected. |  

The inheritance algorithm requires some clarification. The first two settings provide a rather inflexible approach. What if an attribute does not need to be added to all subcategories?  

Starting from version 2.1.0, it became possible to mark target subcategories using checkboxes. If nothing is selected, the recursive addition/removal rules apply (if the first two options are enabled). However, if at least one category is selected, recursion is canceled. That is, the first two settings no longer apply. Actions will only be performed on the selected categories.  

Moreover, even without the first two settings, all subcategories can be recursively selected by clicking the checkbox of the parent category. For this, the **Auto-selection of subcategories with hierarchy consideration** option must be enabled.  

:::warning  
When hierarchy mode is enabled, the reverse rule also applies – if all child categories are selected, the parent is automatically selected. Likewise, if at least one child category is deselected, the parent is also deselected.  
:::

Given the above, if recursion and hierarchy are not needed, and a custom set of categories is required, the **Auto-selection of subcategories with hierarchy consideration** mode should be disabled. For quick control over this mode, in the **Categories** tree, the **Settings** context menu includes the **Consider hierarchy** option.  

| ![Hierarchical multi-selection](/img/tutorial/en/inheritance_en.png) |
| - |
| *Hierarchical multi-selection* |  

| ![Hierarchical operate](/img/tutorial/en/inheritance_set_en.png) |  
| - |
| *Hierarchical operate* |

:::warning  
Actions are always performed in relation to the target category, regardless of whether it is selected. The target category is the one where you drag and drop or copy-paste an attribute, which then opens on the right side of the tree with all its **Category Attributes**.  
:::

