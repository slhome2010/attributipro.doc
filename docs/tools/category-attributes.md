---
sidebar_position: 9
---

# Category Attributes

This tool is especially useful for those installing the module on an existing store, particularly one with a large number of categories and products, as well as for those working with data parsing. Manually creating **Category Attributes** is a time-consuming process, and when parsing, it's often unclear which **Attributes** a product will include.

| ![Category attributes](/img/tutorial/tools_category_settings.png) |
|:--:|
| *Create category attributes* |

Be sure to select categories in the filter tree. The tool will collect all **Attributes** from the products belonging to the selected category and group them into **Category Attributes**.

:::warning
If a product belongs to multiple categories, the **Attributes** of all these categories will be combined for each of them. Make sure your category structure is well-organized, or remember to remove any unnecessary attributes after the task is completed.
:::

If the **Assign category attributes to products** option is enabled, the tool will also add **Attributes** and their **Values** to all products in the selected category.

The assignment or addition of **Attributes** to products follows the settings in [Adding/Removing Category Attributes](/settings/category.md).

Adding **Category Attribute Values** to products follows the [*`Method`*](/settings/product.md) specified in [Adding Attribute Values to Products](/settings/product.md).

:::tip
You may have already created **Category Attributes**, for example, using the [Drag-and-Drop method](/module-features/category-attributes.md), and only need to add them to products. In this case, disable the **Generate a set of attributes for the category** option and [run the task](/tools/settings-and-launch.md) with only the **Assign category attributes to products** option enabled!
:::

Adding [Duty Templates](/general-info/duty.md) only occurs if the **Duty Templates** themselves contain information. If you need to add **Attributes** even with empty **Values**, choose the [*`Method`*](/settings/product.md) `Keep`.

:::danger
For large stores:  
Do not select too many categories at once. Hosting environments may have execution time limits, increasing the risk of operation failure due to timeouts.
:::

Once the task is completed, a confirmation message will be displayed, for example:

✅ Success! Operation completed. Category attributes generated: 12. Attributes added to products: 758.

For more details on how this tool works, see the FAQ section — [What steps should be taken after parsing?](/faq.mdx).
