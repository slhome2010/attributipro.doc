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

**About Possible “Attribute Spillover” Between Categories**

If the same product belongs to several categories at once, its **Attributes** will be counted in *all* of those categories when running the `“Create category attributes”` operation.

Example:  
The product “iPhone 15” is placed in categories:  
→ Smartphones (main)  
→ New arrivals  
→ Promotions  

After running the tool, the attributes of this phone (color, memory, processor, etc.) will also appear in the “New arrivals” and “Promotions” categories — even if they are not needed there.

This is a specific behavior of OpenCart and all attribute-related modules.

## How to reduce spillover (recommended method)

1. On ocStore and all its builds — the module automatically detects this and collects attributes ONLY from the product’s main category. Spillover is almost eliminated!  
2. On clean OpenCart — organize your category structure and leave each product only in one (main) category.

## Recommendations for using the tool

- After the module is installed or after mass importing products — run it **once** for sure.  
- Then run it only when necessary (new products, new attributes, changing the main category).

Don’t forget to remove unnecessary attributes from categories after the task is completed.

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

Once the task is completed, a confirmation message will be displayed, for example:

`✅ Success! Operation completed. Category attributes generated: 12. Attributes added to products: 758.`

Additional details about the tool’s functionality are provided in the FAQ section — [What is the algorithm of actions after parsing?](/faq.mdx).