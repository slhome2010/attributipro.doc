---
sidebar_position: 1
---

# Archive Structure

```bash

Attributico_v3.3.2/
│── PHP7.2/
│       └── upload_v3.x/
│             ├── admin/
│             │    ├── controller/
│             │    ├── language/
│             │    ├── model/
│             │    └── view/
│             └── system/
│                  └── library/
│                       └── attributico/
│                             ├── attributico.php
│                             └── interlink.php
│── PHP7.1│       
│       └── upload_v3.x/
│
│── ocmod/
│     └── attributico.3.x.ocmod.zip
│
├── News3.3.2/
└── readme.txt

```

## Folder and File Purpose

- `upload_v3.x/` folders with the module files for different OpenCart versions;
- `ocmod/` folder with modifiers for stores version 2.x and 3.x;
- `attributico.3.x.ocmod.zip` modifier file for stores version 3.x;
- `News/` folders with descriptions of changes, fixes and supporting materials;
- `readme.txt` brief instructions on installing and using the module;

## Version Differences

The provided archive structure corresponds to the module version > 3.3.2. The folder name like `PHP7.1/`, ..., `PHP7.2/` corresponds to the PHP version. The difference is in the ioncube-encoding of some module files for different PHP versions. Inside these folders are `upload/` folders with the OpenCart structure of the module for different store versions.

:::tip
The `PHP7.2/` folder is suitable for PHP versions 7.2 - 7.4.
:::
