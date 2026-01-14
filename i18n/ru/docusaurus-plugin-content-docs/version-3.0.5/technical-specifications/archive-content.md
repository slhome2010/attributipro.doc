---
sidebar_position: 1
---

# Структура архива


```bash
Attributipro_v3.0.3/
    │── PHP7.2-7.4/
    │     └── attributipro.3.x.ocmod.zip
    │             ├── install.xml
    │             └── upload/
    │                   ├── admin/
    │                   │    ├── controller/
    │                   │    ├── language/
    │                   │    ├── model/
    │                   │    └── view/
    │                   ├── catalog/
    │                   │    ├── controller/
    │                   │    ├── model/
    │                   │    └── view/
    │                   └── system/
    │                        └── library/
    │                              └── attributico/
    │                                     ├── attributico.php
    │                                     ├── interlink.php
    │                                     └── ...    
    │
    │── sql/       
    │    ├── oc_attribute_interlink.sql
    │    ├── oc_unit.sql
    │    └── oc_unit_description.sql
    │
    ├── News3.0.3/
    └── README.md
```

## Назначение папок и файлов
  
- `upload/` папки с файлами собственно модуля для OpenCart версии 3.х;
- `attributipro.3.x.ocmod.zip` установочный архив для магазинов версии 3.x;
- `oc_attribute_interlink.sql` файл таблицы с некоторыми заранее подготовленными настройками для кросс-ссылок;
- `oc_unit.sql` и `oc_unit_description.sql` файлы таблиц для основных единиц измерения;
- `News/` папки с описанием изменений, исправлений и вспомогательными материалами;
- `README.md` краткая инструкция по установке и работе модуля;

## Различие версий

Приведенная структура архива соответствует версии модуля \> 3.0.0. Название папки типа `PHP7.1/`, ..., `PHP7.2-7.4/` соответствует версии PHP. Разница в ioncube-кодировке некоторых файлов модуля для разных версий PHP. Внутри этих папок находится `attributipro.3.x.ocmod.zip` - установочный архив для магазинов OpenCart версии 3.x.
