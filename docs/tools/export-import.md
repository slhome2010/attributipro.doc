---
sidebar_position: 18
---

# Экспорт / Импорт

Функции экспорта и импорта работают для двух форматов данных `SQL` и `CSV`.

| ![Export / Import Tools](/img/tutorial/export_import.png) |
|:--:|
| *Export / Import Tools* |

## SQL

Для экспорта и импорта данных в формате SQL используются встроенные утилиты OpenCart, но список таблиц ограничен только теми, которые имеют отношение к **Атрибутам**, **Значениям** и их метаданным.

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

## CSV

Этот формат больше подходит для переноса информации между сайтами, где установлен модуль **Attribut&pro**.  При импорте будут корректно добавляться отсутствующие **Группы**, **Атрибуты** со всеми метаданными. Добавятся так же товары, в которых **Значения** будут со своими метаданными.

Во время импорта используется автоматический *маппинг* (определение соответствия) языков.
