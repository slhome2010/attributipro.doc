---
sidebar_position: 1
---

# Product Form Integration

The module integration with the OpenCart engine is carried out using `ocmod` modifier files. The purpose of these files is described in the [Archive Structure](/technical-specifications/archive-content.md) section. Information about modifier installation can be found in the [Installation](/install.md) section.

If the modification has been applied correctly, the **Attribut&pro** item should appear in the sidebar of the administrative panel in the *Catalog ⇒ Characteristics* menu, and a tab with the same name should appear in the product form.

By navigating to this tab, you will see a table of product **Attributes** with their **Values**.

The table supports sorting by any column and pagination of **Attributes**. On the left, there are checkboxes for selecting table rows to be deleted.

At the top of the table, there is a special panel with control elements.

:::tip
All data manipulations in the table are immediately written to the Database.
If you haven't made changes on other tabs, pressing the save button is optional.
:::

| ![Product Attributes Table](/img/tutorial/en/product_attribute_table_en.png) |
|:--:|
| *Product Attributes Table* |