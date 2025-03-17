---
sidebar_position: 1
---

# Структура архива

```bash

Attributipro_v1.0.0/
│── PHP7.2-7.4/
│       └── upload_v3.x/
│             ├── admin/
│             │    ├── controller/
│             │    ├── language/
│             │    ├── model/
│             │    └── view/
│             ├── catalog/
│             │    ├── controller/
│             │    ├── model/
│             │    └── view/
│             └── system/
│                  └── library/
│                       └── attributico/
│                             ├── attributico.php
│                             └── interlink.php
│
│── ocmod/
│     └── attributipro3.react.ocmod.zip
│     └── attributipro3.frontend.product.ocmod.zip
│     └── attributipro3.frontend.filter.ocmod.zip
│
│── sql/       
│    └── oc_attribute_interlink.sql
│    └── oc_unit.sql
│    └── oc_unit_description.sql
│
├── News1.0.0/
└── readme.txt

```

## Назначение папок и файлов
  
- `upload_v3.x/` папки с файлами собственно модуля для OpenCart версии 3.х;
- `ocmod/` папка с модификаторами для магазинов версии 2.x и 3.x;
- `attributipro3.react.ocmod.zip` файл модификатор для магазинов версии 3.x;
- `attributipro3.frontend.product.ocmod.zip` файл модификатор карточки товара на фронтенде для магазинов версии 3.x;
- `attributipro3.frontend.filter.ocmod.zip` файл модификатор фильтра на фронтенде для магазинов версии 3.x;
- `oc_attribute_interlink.sql` файл таблицы с некоторыми заранее подготовленными настройками для кросс-ссылок;
- `oc_unit.sql` и `oc_unit_description.sql` файлы таблиц для основных единиц измерения;
- `News/` папки с описанием изменений, исправлений и вспомогательными материалами;
- `readme.txt` краткая инструкция по установке и работе модуля;

## Различие версий

Приведенная структура архива соответствует версии модуля \> 1.0.0. Название папки типа `PHP7.1/`, ..., `PHP7.2/` соответствует версии PHP. Разница в ioncube-кодировке некоторых файлов модуля для разных версий PHP. Внутри этих папок находятся папки `upload.../` с OpenCart-структурой модуля для разных версий магазинов.
