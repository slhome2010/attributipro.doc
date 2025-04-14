---
sidebar_position: 9
---

# Category Attributes

This tool is particularly useful for those installing the module on an active store, especially one with a large number of categories and products, as well as for those involved in parsing. Manually creating **Category Attributes** is a time-consuming process, and during parsing, it’s often unclear which **Attributes** a product will include.

| ![Category attributes](/img/tutorial/en/tools_category_settings_en.png) |
|:--:|
| *Create category attributes* |

Be sure to select categories in the filter tree. The tool will retrieve all **Attributes** from the specified category across all products belonging to that category and group them as **Category Attributes**.

:::warning  
If a product belongs to multiple categories, the **Attributes** from all those categories will be aggregated for each one. Ensure your category structure is organized, or remember to remove unnecessary attributes from categories after completing the task.  
:::

If the **Assign category attributes to products** option is selected, the tool will also add **Attributes** and their **Values** to all products in the chosen category.

The assignment or addition of **Attributes** to products will follow the settings outlined in [Adding/Removing Category Attributes](/settings/category.md).

The addition of **Category Attribute Values** to a product is performed according to the [*`Method`*](/settings/product.md) specified in the settings under [Adding Attribute Values to Products](/settings/product.md).

:::note  
**Attribute Values** for substitution are sourced from the [**Duty Template**](/general-info/duty.md), provided it is not empty.

If you need to add **Attributes** even with empty **Values**, select the [*`Method`*](/settings/product.md) `Keep`.  
:::

:::tip  
If you’ve already created **Category Attributes**, for example, using the [Drag-and-Drop technology](/module-features/category-attributes.md), and only need to assign them to products, disable the **Generate a set of attributes for the category** option and [run the task](/tools/settings-and-launch.md) with only the **Assign category attributes to products** option selected!  
:::

:::danger  
For large stores:  
Do not select too many categories at once. There’s a risk that hosting restrictions on script execution time could cause the server to interrupt the operation due to a timeout.  
:::

Upon completion, a corresponding message will be displayed, for example:

`✅ Success! Operation completed. Category attributes generated: 12. Attributes added to products: 758.`

Additional details about the tool’s functionality are provided in the FAQ section — [What is the algorithm of actions after parsing?](/faq.mdx).