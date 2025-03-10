﻿---
sidebar_position: 2
---

# Установка

## Шаг 1: Скачивание файлов

Скачайте установочные файлы модуля с доступного вам ресурса. В результате у вас должны быть zip архив:

```bash
Attributico_v3.3.3.zip
```

Структура архива описана в [этой](/technical-specifications/archive-content.md) статье.

## Шаг 2: Распаковка и копирование файлов

Распакуйте архив. Откройте папку, соответствующую [вашей версии PHP](/technical-specifications/compatibility.md).
Содержимое папки `upload.../`, соответствующей вашей версии OpenCart, скопируйте поверх структуры папок сайта.

## Шаг 3: Установка модуля

В административной панели:

- Перейдите в *Расширения ⇒ Модули*;
- Найдите модуль "Attribut&pro";
- Установите (активируйте) модуль.

## Шаг 4: Настройка прав пользователей

В административной панели:

- Перейдите в *Система ⇒ Пользователи ⇒ Группы пользователей*;
- Установите разрешения на просмотр и редактирование для:
  - `module/attributico` или `extension/module/attributico` (для магазинов версии >2.2);
  - `attributico/interlink` и `attributico/unit`.

## Шаг 5: Установка модификаторов

В административной панели:

- Перейдите в *Расширения ⇒ Установка расширений*;
- Загрузите файлы `attributico.3.x.ocmod.zip` для магазинов третьей версии (3.x) из папки `ocmod`.

**Для пользователей OCTEMPLATE:** Пропустите этот шаг. Инструкция по установке модификаторов приведена ниже.

## Шаг 6: Обновление модификаторов

В административной панели:

- Перейдите в *Расширения ⇒ Модификаторы*;
- Нажмите "Обновить".

После выполнения всех шагов в меню *Каталог ⇒ Атрибуты* появится пункт *Attribut&pro*.

:::warning
**Очистите кэш магазина и браузера.**
Специфика очистки кэша для OpenCart 3.x описана [здесь](https://shopiweb.ru/opencart-3/kesh-opencart-3-ochistka-kesha/).
:::

## Специальные инструкции для OCTEMPLATE

Если вы используете шаблон OCTEMPLATE:

- **Не выполняйте шаг 5**.
- Для OpenCart 3.0.x извлеките из архива `attributico.3.x.ocmod.zip` файл `install.xml`,
  - Переименуйте его в `attributico.3.ocmod.xml`;
  - Скопируйте его в папку `/system`.
