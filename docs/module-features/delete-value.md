---
sidebar_position: 6
---

# Deleting Values

The operation can be performed via the [context menu](/module-features/context-menu.md) or using the `Del` key. You can delete a **Value**, a **Template**, or multiple items at once (using [multi-selection](/module-features/tree-features.md)).

This operation is actually quite complex. You need to fully understand the mechanism behind pressing a single key.

Remember that **Values** or product characteristic descriptions are regular text fields linked to a specific product. They do not have unique IDs. This means they are stored as plain text within each product in the database. Therefore, they can only be deleted from products.

:::info
Essentially, deleting **Values** is the operation of removing an **Attribute** from a product if the **Value** of this **Attribute** matches the specified sample.
:::

Suppose there is a product or products where the **Attribute** `Test attribute 3.1` has the **Value** `test value 3.2.1`.

And there is a product or products where the **Attribute** `Test attribute 3.1` has the **Value** `test value 3.2.2`.

We need to remove the **Attribute** `Test attribute 3.1` from all products if it has the **Value** `test value 3.2.1`.

If we were to do this manually, we would have to open each product, review the list of **Attributes** and **Values**, and click the **Delete** button if the value matched `test value 3.2.1`.

| ![Manually deleting Values](/img/tutorial/en/delete_value_1_en.png) |
| :-----------------------------------------------------------------: |
|                     _Manually deleting Values_                      |

| ![Manually no deleting Values](/img/tutorial/en/delete_value_2_en.png) |
| :--------------------------------------------------------------------: |
|                        _Skipping upon mismatch_                        |

Now, this operation can be performed with a single click for all products.

## Deleting Multiple Values

Everything would be fine if the product had only one **Value** (one characteristic for a single **Attribute**), but often, there are [multiple values](/general-info/values-templates.md). What should we do if we have a product or products where the **Attribute** `Test attribute 3.1` has a compound **Value** `test value 3.2.1/test value 3.2.2`? Delete it or keep it?

| ![Deleting multiple values](/img/tutorial/product3.jpg) |
| :-----------------------------------------------------: |
|               _Deleting multiple values_                |

To avoid ambiguity, the module provides several deletion modes.

Deleting **Templates** (nodes with the parent **Templates**) is always done by an exact match of the field in the product with the entire **Template**.

Deleting **Values** (nodes with the parent **Values**) depends on the [Value Comparison](/settings/comparison.md) setting. In any case, this is deletion by the occurrence of a sample (**Value**) within the product field. The setting allows comparing each **Value** written separated by a delimiter against the sample.

| ![Auto deleting Template](/img/tutorial/en/delete_value_3_en.png) |
| :---------------------------------------------------------------: |
|                         _By Exact Match_                          |

| ![Auto deleting Value](/img/tutorial/en/delete_value_4_en.png) |
| :------------------------------------------------------------: |
|                    _By Substring Matching_                     |

## Difference Between Deleting **Templates** and **Values**

:::tip
Deleting a **Template** means deleting by an exact match of the field in the product with the sample.

Deleting a **Value** means deleting by the occurrence of the sample in the product field.
:::

:::danger
⚠ **Caution!** If you delete **Values**, all **Templates** containing the selected **Value** will also be deleted.  
:::
