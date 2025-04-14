---
sidebar_position: 6
---

# Deleting Values

The operation can be performed via the [context menu](/module-features/context-menu.md) or by pressing the `Del` key. You can delete a **Value**, a **Template**, or several at once (using [multi-selection](/module-features/tree-features.md)).

This operation is not as simple as it seems. You should have a good understanding of the mechanism behind pressing that single key.

Keep in mind that **Values** — the product characteristic descriptions — are plain text fields linked to individual products. They do not have unique IDs. In the database, they are stored as text within each product. This means they can only be deleted from the products themselves.

:::info
Deleting **Values** is essentially the operation of removing an **Attribute** from a product if its **Value** matches the specified sample.
:::

Suppose some products have the **Attribute** `Test attribute 3.1` with the **Value** `test value 3.2.1`.

And other products have the same **Attribute** `Test attribute 3.1` but with the **Value** `test value 3.2.2`.

You need to remove the **Attribute** `Test attribute 3.1` from all products where it has the **Value** `test value 3.2.1`.

If you were doing this manually, you would need to open each product, review the list of **Attributes** and **Values**, and press the **Delete** button if the value matches `test value 3.2.1`.

| ![Manually deleting Values](/img/tutorial/en/delete_value_1_en.png) |
|:--:|
| *Manually deleting Values* |

| ![Manually no deleting Values](/img/tutorial/en/delete_value_2_en.png) |
|:--:|
| *Manually not deleting Values* |

Now this operation can be performed with a single click for all products.

## Deleting Multiple Values {#deleting-multiple-values}

Attributes often contain [multiple **Values**](/general-info/values-templates.md), for example: the **Attribute** `Test attribute 3.1` has the **Value** `test value 3.2.1/test value 3.2.2`.

To prevent ambiguity, the module provides several deletion modes.

Deletion of **Templates** (nodes under the **Templates** parent) is always based on an exact match between the product’s field and the entire **Template**.

Deletion of **Values** (nodes under the **Values** parent) depends on the [Value Comparison](/settings/comparison.md) setting.

This setting allows each **Value** separated by a delimiter to be compared individually with the sample.

| ![Auto deleting Template](/img/tutorial/en/delete_value_3_en.png) |
|:--:|
| *By Exact Match* |

| ![Auto deleting Value](/img/tutorial/en/delete_value_4_en.png) |
|:--:|
| *By Substring Matching* |

## Difference Between Deleting **Templates** and **Values** {#difference-between-deleting-templates-and-values}

:::tip
Deleting a **Template** means removing the product field if it exactly matches the sample.

Deleting a **Value** means removing the field if the sample is found within it.
:::

:::danger
⚠ **Caution!** If you delete a **Value**, all **Templates** containing that **Value** will also be deleted.
:::
