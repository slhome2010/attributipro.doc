---
sidebar_position: 1
---

# Archive Structure

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
    │
    │── sql/       
    │    ├── oc_attribute_interlink.sql
    │    ├── oc_unit.sql
    │    └── oc_unit_description.sql
    │
    ├── News3.0.3/
    └── README.md
```

## Folder and File Descriptions

- `upload/` – Core module files for OpenCart 3.x;
- `attributipro.3.x.ocmod.zip` – The installation archive for the OpenCart versions 3.x;
- `oc_attribute_interlink.sql` – Preconfigured cross-link settings table;
- `oc_unit.sql` & `oc_unit_description.sql` – Unit of measurement tables;
- `News/` - Folders with descriptions of changes, fixes and supporting materials;
- `README.md` - Brief instructions on installing and using the module;

## Version Differences

The provided archive structure corresponds to the module version > 3.3.2. The folder name like `PHP7.1/`, ..., `PHP7.2-7.4/` corresponds to the PHP version. The difference is in the ioncube-encoding of some module files for different PHP versions. Inside these folders is `attributipro.3.x.ocmod.zip` - the installation archive for the OpenCart versions 3.x.
