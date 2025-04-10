---
sidebar_position: 5
---

# Overriding the Value Insertion Method

When working with **Values** or **Templates**, data is inserted into products according to the **`Method`** configured in [Adding Attribute Values to Products](/settings/product.md) settings.

To avoid changing base settings repeatedly, you can temporarily *override* the **`Value Insertion Method`**. This setting persists for the current session only.

| ![Values Insert Mode](/img/tutorial/value_insert_mode.png) |
|:--:|
| *Values Insert Mode* |

The **`Method`** affects all operations with **Duty Templates** in the product form.

**Duty Template** insertion occurs synchronously for all languages during:

1. Category [*assignment*](/opencart-integration/category-attributes.md)
2. New **Attribute** selection

**Method options:**
| `Clear` |
| `Keep` |
| `Overwrite` |
| `Empty only` |

:::tip
Use `Empty only` to add new values while protecting existing entries.
:::
