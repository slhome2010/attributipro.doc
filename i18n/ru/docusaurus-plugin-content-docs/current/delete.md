---
sidebar_position: 24
---

# Удаление

## Шаг 1: Удаление модуля

В административной панели:

- Перейдите в *Расширения ⇒ Модули*;
- Напротив модуля **Attribut&pro** нажмите "Удалить".

## Шаг 2: Удаление модификаторов

- Для OpenCart 3.x: удалите файлы (если копировали в `/system`):

```bash
/system/attributipro.3.ocmod.xml
/system/attributipro.3.filter.ocmod.xml
/system/attributipro.3.product.ocmod.xml
```

- Либо удалите модификаторы `Attributipro`, `Attributipro frontend product`, `Attributipro frontend filter` в *Расширения ⇒ Модификаторы*.

---

## База данных

При установке модуля создаются дополнительные [таблицы](technical-specifications/database.md).

:::tip
При удалении модуля таблицы и поля в БД **не удаляются**. Если необходимо, удалите их вручную через PhpMyAdmin.
:::
