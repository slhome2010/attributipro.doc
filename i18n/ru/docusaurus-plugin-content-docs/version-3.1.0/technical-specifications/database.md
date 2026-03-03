---
sidebar_position: 4
---

# База данных

В процессе установки модуля  будут выполнены запросы к базе данных.

```SQL
CREATE TABLE IF NOT EXISTS oc_category_attribute (
  category_id INT(11) NOT NULL,
  attribute_id INT(11) NOT NULL,
  PRIMARY KEY (category_id, attribute_id)
)
```

и

```SQL
ALTER TABLE oc_attribute_description ADD COLUMN `duty` TEXT NOT NULL
```

В результате будет создана новая таблица **category_attribute** с полями `` `category_id` `` и `` `attribute_id` ``. Это основная таблица модуля для работы с [Атрибутами категорий](/general-info/theory.md).

А в стандартной таблице OpenCart **attribute_description** добавится поле `` `duty` `` для хранения [Дежурных шаблонов](general-info/duty.md).
Это поле остается для поддержки совместимости будущих и предыдущих версий и совместной работы **Attribut&pro** и **Attribut&co**.

Кроме того будут созданы несколько дополнительных таблиц.
Расширенный набор таблиц предназначен для поддержки [метаданных](general-info/metadata.md).

## Список основных таблиц

| **Таблица** |
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
Таблицы создаются только в том случае если их до этого не существовало, поэтому беспокоиться по поводу удаления имеющихся данных не надо.
:::

## Общая диаграмма

Чтоб не перегружать диаграмму информацией, на ней не показана таблица *`language`*, а связи показаны только по *`attribute_id`*.

| ![Database diagram](/img/tutorial/db_pro.svg) |
|:--:|
| *Database diagram* |
