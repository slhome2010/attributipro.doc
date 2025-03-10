---
sidebar_position: 14
---

# Смена регистра

Инструмент позволяет в пакетном режиме сменить регистр первой буквы в названии **Группы**, **Атрибута**, **Значения** или **Дежурного шаблона**.

В случае множественного **Значения** или **Дежурного шаблона** меняется регистр первой буквы каждого слова, записанного через разделитель. Т.е. инструмент _умеет_ разбирать конструкции типа:  
`китай/Россия/бразилия/Казахстан`.

Для данного инструмента использование фильтра не является обязательным. Если ничего не будет отмечено, то поиск и замена будет производиться по всей БД. Использование фильтра позволит сузить поиск, а значит сократить время работы инструмента или проделать эту задачу поэтапно, что важно для больших магазинов. 

:::info
Фильтр по категориям работает только для **Значений**.
:::

Чтобы активизировать работу инструмента для **Групп** или других узлов, отметьте чекбокс напротив, после чего станет доступным выбор регистра - с большой буквы или с маленькой.

| ![Case](/img/tutorial/case_change.png) |
|:--:|
| *Upper or lower case changing* |

:::warning
В процессе применения инструмента к **Значениям** или **Дежурным шаблонам** будут удалены лишние пробелы вокруг разделителя.

Например:  
`США/ россия /китай/ Бразилия` → `США/Россия/Китай/Бразилия`
:::
