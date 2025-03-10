---
sidebar_position: 9
---

# Атрибуты категорий

Этот инструмент будет полезен тем, кто устанавливает модуль на рабочий магазин, особенно с большим количеством категорий и товаров, а также для тех, кто занимается парсингом. Формирование **Атрибутов категорий** вручную является трудоемким процессом, а при парсинге иногда неизвестно, с какими **Атрибутами** придет товар.

| ![Category attributes](/img/tutorial/tools_category_settings.png) |
|:--:|
| *Create category attributes* |

Обязательно отметьте категории в дереве фильтра. Инструмент выберет все **Атрибуты** указанной вами категории из всех товаров, принадлежащих этой категории, и сгруппирует их в виде **Атрибутов категории**.

:::warning
Если товар принадлежит сразу нескольким категориям, то **Атрибуты** всех этих категорий просуммируются для каждой из них. Приведите в порядок структуру категорий или не забудьте удалить ненужные атрибуты из категорий после выполнения задачи.
:::

Если отмечен пункт **Расставить атрибуты категории в товары**, то будет выполнена также задача добавления **Атрибутов** и их **Значений** во все товары выбранной категории.

Расстановка или добавление **Атрибутов** в товары будет производиться в соответствии с настройками [Добавление/удаление атрибутов категории](/settings/category.md).

Добавление **Значений атрибутов категории** в товар происходит в соответствии со [*`Способом`*](/settings/product.md), который установлен в настройках [Добавление значений атрибута в товар](/settings/product.md).

:::tip
Возможно, вы уже создали **Атрибуты категории**, например, с помощью [технологии Drag-and-Drop](/module-features/category-attributes.md) и вам требуется только добавить их в товары. В таком случае пункт **Сформировать набор атрибутов для категории** надо отключить и [запустить задачу](/tools/settings-and-launch.md) только с отмеченным пунктом **Расставить атрибуты категории в товары**!
:::

Добавление [Дежурных шаблонов](/general-info/duty.md) происходит только если сами **Дежурные шаблоны** заполнены информацией. Поэтому, если вам необходимо добавить **Атрибуты** даже с пустыми **Значениями**, выберите [*`Способ`*](/settings/product.md) `Оставлять`.

:::danger
Для больших магазинов.
Не отмечайте сразу много категорий. Есть вероятность, что на хостинге есть ограничения на время выполнения скрипта. Высока вероятность прерывания сервером операции по тайм-ауту.
:::

По окончании работы будет выведено соответствующее сообщение, например:

✅ Успешно! Операция завершена. Сформировано атрибутов категории: 12. Добавлено атрибутов в товары: 758.

Некоторые подробности работы инструмента раскрыты в разделе FAQ — [Какой алгоритм действий после парсинга?](/faq.mdx).
