---
sidebar_position: 9
---

# Units of Measurement

Using [units of measurement](/general-info/units.md) in **Attributes** and **Attribute Values** ensures accuracy, convenience, and universality, giving your store solidity. Consistency in displaying units of measurement across all products, filters, and other pages of your store is especially important.

You can manage the display style of units of measurement on the [frontend](/settings/frontend.md) or place units of measurement directly in the name of an **Attribute** or **Value** using the [tool](/tools/unify-attributes/units.md).

Uniformity of units of measurement can be ensured if they are selected from a single list.

## Units of Measurement Table

You can add, modify, and delete units of measurement. Actions are selected using the buttons to the right of the selection field.

| ![Deleting or creating units](/img/tutorial/unit_settings.png) |
|:--:|
| *Unit manage* |

The editing form allows you to change the full and short notation of the unit of measurement, and also takes into account localization for multilingual stores.

| ![Editing units](/img/tutorial/unit_form.png) |
|:--:|
| *Unit form* |

## SQL Migration

You can use ready-made tables that contain the most common units of measurement. These tables are included in the [delivery package](/technical-specifications/archive-content.md).

Import the `oc_unit.sql` and `oc_unit_description.sql` tables into your database.

:::warning
It's quite likely that language identifiers may not match. In the provided tables, the `language_id` for Russian is `1`, for English it's `3`.
:::

If after migration you experience problems with any language, you need to determine which identifiers are used on your site, after which you can execute a sequence of SQL queries, first filling in the mapping map.

```SQL
-- Create a temporary mapping table
CREATE TEMPORARY TABLE language_mapping (
    old_id INT,
    new_id INT
);

-- Fill the table with the necessary values
INSERT INTO language_mapping (old_id, new_id) VALUES 
(1, 2),
(3, 1),
(4, 5);  -- and other correspondences you may have

-- Create a temporary copy of the data
CREATE TEMPORARY TABLE temp_unit_description AS
SELECT unit_id, 
       COALESCE((SELECT new_id FROM language_mapping WHERE old_id = language_id), language_id) AS language_id,
       title, 
       unit
FROM oc_unit_description;

-- Clear the main table
TRUNCATE TABLE oc_unit_description;

-- Upload data with corrected language_id
INSERT INTO oc_unit_description
SELECT * FROM temp_unit_description;

-- Delete temporary tables
DROP TEMPORARY TABLE language_mapping;
DROP TEMPORARY TABLE temp_unit_description;
```

In this example:

- Russian was first in the table, will be second in the DB;
- English was third in the table, will be first in the DB;
- Chinese was fourth in the table, will be fifth in the DB;

:::warning
Keep in mind.

Tables have the prefix *`oc_`*. If this is not suitable for your DB, correct it yourself.
:::
