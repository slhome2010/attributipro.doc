---
sidebar_position: 4
---

# Переопределение способа вставки значений

До сих пор **Значения** или **Шаблоны** в товар вставлялись в соответствии со **`Способом`**, который установлен в настройках [Добавление значений атрибута в товар](/settings/product.md).

Чтобы каждый раз не менять базовые настройки, добавлена возможность оперативно *переопределить* **`Способ`** вставки значений.

| **Способ вставки** |
|:--|
| `Очищать` |
| `Не менять` |
| `Заменять дежурным` |
| `Только в пустые` |

**`Переопределенный Способ`** имеет приоритет, но действует только на время работы в форме товара. При перезагрузке страницы или загрузке другого товара он будет сброшен к [действующей настройке](/settings/product.md) модуля. Действие **`Переопределенного Способа`** распространяется на **все операции** с **Дежурными шаблонами** в форме товара.

Вставка **Дежурного шаблона** производится синхронно для всех языков в момент привязки к категории или выбора нового **Атрибута**.

Если фильтр переключен в положение `Дежурные`, а переключатель управления видом списка находится в положении `Шаблоны`, то в списке будут только **Дежурные шаблоны**, и в момент выбора из списка произойдет синхронная подстановка в другие языки соответствующих им **Дежурных шаблонов**.

Если вы хотите защитить ранее введенные **Значения**, выбирайте способ вставки `Только в пустые`.

