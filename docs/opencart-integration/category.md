---
sidebar_position: 2
---

# Categories

On the left side of the control panel, there are two windows for managing categories. One displays categories and their subcategories as a tree, and the other shows the categories associated with the product as chips.

| ![Category management](/img/tutorial/product_category.png) |
|:--:|
| *Category management* |

To assign a product to a selected category, double-click on that category in the tree. The category will appear as a chip in the adjacent window.

If the `Add attributes automatically` checkbox is checked, **Category Attributes** along with their **metadata** and **Default Templates** will be added to the product at the same time.

Adding **Default Templates** to a product is carried out according to the [**`Value Insertion Method`**](/opencart-integration/method-inserting.md).

A category can be removed (unlinked) by clicking the cross icon on the corresponding chip.

Whether to also remove the **Category Attributes** is up to you. Removing **Attributes** requires confirmation in a pop-up window.

If the `Remove attributes automatically` checkbox is checked, the removal will happen without confirmation.

:::tip
ocStore users can additionally set a main category. To do this, click on the desired chip.
:::

:::warning
Everything you do on this tab with categories is saved directly to the Database. At the same time, changes are reflected on affiliated tabs, but this linkage does not apply when working on other tabs.

Therefore, changes to categories made, for example, on the *`Links`* tab will take effect only after saving and refreshing the page.
:::
