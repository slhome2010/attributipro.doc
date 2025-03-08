---
sidebar_position: 24
---

# Uninstallation

## Step 1: Remove the Module

In the admin panel, go to *Extensions ⇒ Modules* and click "Remove" next to "Attribut&co."

## Step 2: Delete Modification Files

For OpenCart 2.x, delete the following files from `/system`:

```bash
attribut&co.2.x.ocmod.xml
autocomplete.ocmod.xml
```

For OpenCart 3.x, delete `attribut&co.2.x.ocmod.xml` (if manually copied) or remove all "Attribut&co" modifications in *Extensions ⇒ Modifications*.

## Database Information

During installation, additional [database tables](technical-specifications/database.md) are created.

:::tip
Uninstalling the module does **not** remove database tables or fields. If necessary, delete them manually via PhpMyAdmin.
:::
