# Inheritance

| Item | Description |  
|------|-------------|  
| **Add to all subcategories** | When a new **Attribute** is added to a category, it will be recursively added to all child categories (subcategories). The **Values** of the attribute in all products within those subcategories will be filled in according to the section "Adding attribute values to a product." |  
| **Remove from all subcategories** | When an **Attribute** is removed from a category, it will be recursively removed from all subcategories, along with the **Values** from all products in those subcategories. |  
| **Auto-select subcategories with hierarchy** | Recursively selects all child subcategories of the selected category. If all child categories are selected, the parent gets selected automatically. |  

The inheritance algorithm needs some clarification. The first two options are not flexible enough.  
What if an attribute should not be added to *all* subcategories?

You can mark specific target subcategories using checkboxes.  
As long as no category is selected, the recursive add/remove rules apply (if the first two options are enabled).  
Once at least one category is checked, recursion is canceled. All actions will only be applied to the selected categories.

**Auto-select subcategories with hierarchy** allows you to recursively check all subcategories by clicking the parent category’s checkbox.

:::warning
When hierarchy mode is enabled, the reverse logic also applies — selecting all children automatically selects the parent.  
Or — deselecting even one child automatically deselects the parent.
:::

Given the above, if recursion and hierarchy are not needed and you want to work with a custom set of categories, disable the **Auto-select subcategories with hierarchy** option.  
For quick access, this mode can be toggled in the **Categories** tree context menu under **Settings** using the **Respect Hierarchy** option.

| ![Hierarchical multi-selection](/img/tutorial/hier_category.jpg) |
| - |
| *Hierarchical multi-selection* |  

| ![Hierarchical operate](/img/tutorial/hier_operative.jpg) |  
| - |
| *Hierarchical operate* |

:::warning
Actions are always applied to the *target category* regardless of whether it’s checked or not.  
The target is the category where you drop the attribute via Drag-and-Drop or Copy-Paste — it will open on the right side of the tree with all its **Category Attributes**.
:::
