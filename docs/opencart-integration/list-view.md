---
sidebar_position: 10
---

# List View Management

This setting determines whether the dropdown list displays **Templates** or **Values**.

| ![attribute](/img/tutorial/en/list_view_mode_en.png) |
|:--:|
| *List View Switch* |

For detailed information about **Values** and **Templates**, see [Values and Templates](/general-info/values-templates.md).

Here, **Values** represent *parsed* **Templates** divided by a [separator](/general-info/values-templates.md).

## List Generation

The script generates the list by querying the Database to collect all **Values** associated with a specific **Attribute** from all products containing that **Attribute**.

### Example Workflow

When starting with a new store:

1. Create several products and **Attributes**
2. Navigate to the **Attributes** tab in the product form (initially empty)
3. Add an **Attribute** - a blank text area appears on the right (except when applying the **Duty Template**)
4. Input **Value(s)** using a separator, e.g., `Range1/Range2/Range3`

Saved entries will appear in the list upon reopening the product form. The list grows as more products are created and text fields populated.

### Template View Example

| ![attribute](/img/tutorial/template_list.png) |
|:--:|
| *Template List Display* |

### Value View Behavior

When `Values` list view is selected:

- Script splits **Templates** using the separator
- Single **Values** are added directly to the list

| ![attribute](/img/tutorial/value_list.png) |
|:--:|
| *Value List Display* |

:::tip
**Template Creation Rules:**

1. New **Templates** are built from **Values**
2. Select values sequentially - separator is auto-inserted
3. Re-selecting a **Value** removes it from the generated string

Missing **Values** can be added manually by editing the text area.  
**Duty Templates** are applied automatically when no custom input exists.
:::
