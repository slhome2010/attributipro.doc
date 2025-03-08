---
sidebar_position: 4
---

# Deleting Values

The operation can be performed via the [context menu](/module-features/context-menu.md) or using the `Del` key. You can delete a **Value**, **Template**, or multiple items at once (using [multi-select](/module-features/tree-features.md)).

This operation is actually quite complex. You need to fully understand the mechanism behind pressing a single key.

Remember that **Values** or product characteristic descriptions are regular text fields linked to a specific product. They do not have unique IDs. This means they are stored as plain text in each product's database entry. Therefore, they can only be deleted from products. Essentially, deleting **Values** means removing the **Attribute** from the product if the **Attribute's Value** matches the given sample.

For example, suppose there are products where the **Attribute** `Test Attribute 3.1` has the **Value** `test value 3.2.1`.

And other products where the **Attribute** `Test Attribute 3.1` has the **Value** `test value 3.2.2`.

We need to remove **Attribute** `Test Attribute 3.1` from all products where it has the **Value** `test value 3.2.1`.

If we did this manually, we would have to open each product, review the list of **Attributes** and **Values**, and click **Delete** if the value matches `test value 3.2.1`.

| ![Manually deleting Values](/img/tutorial/en/delete_value_en.png) |
|:--:|
| *Manually deleting Values* |

| ![Manually no deleting Values](/img/tutorial/en/no_delete_value_en.png) |
|:--:|
| *Manually no deleting Values* |

Now, this operation can be performed with a single click for all products.

Everything would be simple if a product had only one **Value** per **Attribute**, but often, there are [multiple values](/general-info/values-templates.md). What if we also have products where **Attribute** `Test Attribute 3.1` has **Value** `test value 3.2.1/test value 3.2.2`? Should we delete it or keep it?

| ![Deleting multiple values](/img/tutorial/en/delete_or_not_delete_en.png) |
|:--:|
| *Deleting multiple values* |

To avoid ambiguity, the module provides several deletion modes.

Deleting **Templates** (nodes under **Templates**) is always done by exact field matching in the product.

Deleting **Values** (nodes under **Values**) depends on the [Value Comparison](/settings/comparison.md) setting.

In any case, deletion is performed by checking if the **Value** sample exists in the product's field. The setting allows comparison with each **Value** separated by a delimiter.

| ![Auto deleting Template](/img/tutorial/en/by_exact_match_en.png) |
|:--:|
| *By Exact Match* |

| ![Auto deleting Value](/img/tutorial/en/by_substring_match_en.png) |
|:--:|
| *By Substring Matching* |

## Difference Between Deleting **Templates** and **Values**

:::tip
Deleting a **Template** means removing an exact match of the field in the product.

Deleting a **Value** means removing the sample wherever it appears in the product field.
:::

:::danger
⚠ **Caution!** If you delete **Values**, all **Templates** containing the selected **Value** will also be deleted.  
:::

