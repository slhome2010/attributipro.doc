---
sidebar_position: 4
---

# Database

During the module installation, database queries will be executed.

```sql
CREATE TABLE IF NOT EXISTS oc_category_attribute (
  category_id INT(11) NOT NULL,
  attribute_id INT(11) NOT NULL,
  PRIMARY KEY (category_id, attribute_id)
)
```

and

```sql
ALTER TABLE oc_attribute_description ADD COLUMN `duty` TEXT NOT NULL
As a result, a new table category_attribute will be created with fields `category_id` and `attribute_id`.
```

And in the standard OpenCart table attribute_description, a field `duty` will be added to store Default Templates.
This field remains for backward and forward compatibility.

In addition, several additional tables will be created.
The extended set of tables is designed to work with the enhanced version of the module and is created to maintain the integrity of all connections in case of simultaneous operation of both versions.

:::info
Tables are created only if they did not exist before, so there is no need to worry about deleting existing data.
:::

General Diagram of Tables and Relationships
To avoid overloading the diagram with information, the language table is not shown on it, and relationships are shown only for attribute_id.

| ![Database diagram](/img/tutorial/db_pro.svg) |
|:--:|
| *Database diagram* |
