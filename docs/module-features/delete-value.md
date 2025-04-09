---
sidebar_position: 6
---

# Value Deletion

This operation can be performed via [context menu](/module-features/context-menu.md) or using the `Del` key. You may delete **Values**, **Templates**, or multiple items simultaneously (using [batch selection](/module-features/tree-features.md)).

## Underlying Mechanism

**Values** (product attribute entries) are text fields tied to specific products without unique IDs. They exist as raw text in database records. Deleting a **Value** equates to removing the entire **Attribute** from products if their **Value** matches the target pattern.

### Example Scenario

1. Product(s) with **Attribute** `Test Attribute 3.1` → **Value** `test value 3.2.1`  
2. Product(s) with **Attribute** `Test Attribute 3.1` → **Value** `test value 3.2.2`  

**Goal**: Remove `Test Attribute 3.1` from all products where its **Value** equals `test value 3.2.1`.

## Manual vs Automated Deletion

| ![Manual Value Deletion](/img/tutorial/product1.jpg) |
|:--:|
| *Manual Attribute Removal* |

| ![Attribute Retention](/img/tutorial/product2.jpg) |
|:--:|
| *Attribute Preservation* |

**Automation Benefit**: Execute bulk deletions in one action instead of manual product-by-product edits.

## Complex Cases

When products contain **multiple values** for the same attribute (e.g., `test value 3.2.1/test value 3.2.2`):

| ![Multi-Value Deletion](/img/tutorial/product3.jpg) |
|:--:|
| *Multi-Value Handling* |

## Deletion Modes

1. **Template Deletion** (nodes under **Templates**):  
   Requires exact match between product field and template.  

2. **Value Deletion** (nodes under **Values**):  
   Depends on [Value Comparison](/settings/comparison.md) settings.  
   Performs substring matching against values separated by delimiters.

| ![Template Deletion](/img/tutorial/product4.jpg) |
|:--:|
| *Exact Match Mode* |

| ![Value Deletion](/img/tutorial/product5.jpg) |
|:--:|
| *Substring Match Mode* |

:::tip Key Difference

- **Template Deletion**: Removes attributes with **exact** value matches  
- **Value Deletion**: Removes attributes containing **partial** value matches  
:::

:::danger Critical Warning
Deleting **Values** will also remove all **Templates** containing those values. Verify selections before confirmation!
:::
