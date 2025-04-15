---
sidebar_position: 18
---

# Export / Import

Export and import functions work for two data formats: `SQL` and `CSV`.

| ![Export / Import Tools](/img/tutorial/en/export_import_en.png) |
|:--:|
| *Export / Import Tools* |

## SQL

Built-in OpenCart utilities are used for exporting and importing data in SQL format, but the list of tables is limited to only those related to **Attributes**, **Values**, and their metadata.

| **Table** |
|:--:|
| attribute_group |
| attribute_group_description |
| attribute |
| attribute_pro |
| attribute_description |
| attribute_description_pro |
| product_attribute |
| product_attribute_pro |
| category_attribute |
| unit |
| unit_description |
| attribute_interlink |

## CSV

This format is more suitable for transferring information between sites where the **Attribut&pro** module is installed. During import, missing **Groups** and **Attributes** with all metadata will be correctly added. Products will also be added, in which **Values** will have their metadata.

During import, automatic *mapping* (determining correspondence) of languages is used.
