---
sidebar_position: 4
---

# Database

During module installation, the following database queries will be executed:

```SQL
CREATE TABLE IF NOT EXISTS oc_category_attribute (
  category_id INT(11) NOT NULL,
  attribute_id INT(11) NOT NULL,
  PRIMARY KEY (category_id, attribute_id)
)
```

and

```SQL
ALTER TABLE oc_attribute_description ADD COLUMN `duty` TEXT NOT NULL
```

This will create:
  
1. A new **category_attribute** table with `` `category_id` `` and `` `attribute_id` `` fields - the core table for working with [Category Attributes](/general-info/theory.md).  
2. A `` `duty` `` column in the standard OpenCart **attribute_description** table to store [Duty Templates](general-info/duty.md).  
   This column is maintained for backward/forward compatibility between **Attribut&pro** and **Attribut&co**.  

Additional tables will be created to support [metadata](general-info/metadata.md) functionality.

## Core Tables

| **Tables** |
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

:::info  
Tables are only created if they don't already exist. Your existing data will not be affected.  
:::  

## Schema Overview  

To simplify the diagram:

- The *`language`* table is omitted  
- Relationships are only shown for *`attribute_id`*  

| ![Database diagram](/img/tutorial/db_pro.svg) |
|:--:|  
| *Database schema visualization* |  