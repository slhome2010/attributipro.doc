---
sidebar_position: 1
---

# Archive Structure

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
│     ├── attributipro3.react.ocmod.zip
│     ├── attributipro3.frontend.product.ocmod.zip
│     └── attributipro3.frontend.filter.ocmod.zip
│
│── sql/       
│    ├── oc_attribute_interlink.sql
│    ├── oc_unit.sql
│    └── oc_unit_description.sql
│
├── Changelog1.0.0/
└── readme.txt
```

## Folder and File Descriptions

- `upload_v3.x/` – Core module files for OpenCart 3.x.
- `ocmod/` – Modifiers for OpenCart 2.x/3.x stores.
- `attributipro3.react.ocmod.zip` – Backend modifier for OpenCart 3.x.
- `attributipro3.frontend.product.ocmod.zip` – Frontend product page modifier.
- `attributipro3.frontend.filter.ocmod.zip` – Frontend filter modifier.
- `oc_attribute_interlink.sql` – Preconfigured cross-link settings table.
- `oc_unit.sql` & `oc_unit_description.sql` – Unit of measurement tables.
- `Changelog/` – Version history and supplementary materials.
- `readme.txt` – Installation and usage guide.

## Version Differences

The structure corresponds to **module versions >1.0.0**. Folders like `PHP7.2/` denote PHP version compatibility (ionCube-encoded files differ per PHP version). The `upload.../` subfolders contain OpenCart module files for specific store versions.
