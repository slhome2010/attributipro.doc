---
sidebar_position: 2
---

# Managing List View

Depending on which button is pressed, either **Templates** or **Values** will be displayed in the selection field.

| ![attribute](/img/tutorial/en/list_view_switch_en.png) |
|:--:|
| *List View Switch* |

More details about **Templates** and **Values** can be found in the section [Values and Templates](/general-info/values-templates.md).

In this case, **Values** are *parsed* **Templates** based on a [delimiter](/general-info/values-templates.md).

## List Generation

To generate the list, the script queries the Database to collect all **Values** associated with a given **Attribute** from all products that contain this **Attribute**.

Imagine that you have just started working with the store. You have created a few products and several **Attributes**. When you go to the **Attributes** tab in the product form, you will see an empty page. After adding an **Attribute**, an empty text area will appear on the right. To generate at least one **Template**, you need to enter something into this field—specifically, a **Value** or multiple **Values** separated by a delimiter. For example: `Range1/Range2/Range3`.

Once you save the changes and re-enter the product form, a selection field will appear on the right, allowing you to choose a single entry. As more products are created and text fields are filled, the **Templates** list will expand.

If the list view mode is set to `Values`, the script will split **Templates** using the delimiter, while standalone **Values** will be added directly to the list.

:::tip
A new template can always be "assembled" from **Values**. The delimiter will be inserted automatically. Missing **Values** can be added manually by editing the text area.
:::
