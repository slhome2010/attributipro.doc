---
sidebar_position: 4
---

# Uninstallation

## Step 1: Uninstalling the Module

In the admin panel:

- Navigate to *Extensions ⇒ Modules*
- Click "Delete" next to the **Attribut&pro** module

## Step 2: Removing Modifiers

- For OpenCart 3.x: Delete these files (if copied to `/system`):

```bash
/system/attributipro.3.ocmod.xml
/system/attributipro.3.filter.ocmod.xml
/system/attributipro.3.product.ocmod.xml
```

- Or remove the `Attributipro`, `Attributipro frontend product`, and `Attributipro frontend filter` modifiers via *Extensions ⇒ Modifiers*

---

## Database

The module creates additional [tables](technical-specifications/database.md) during installation.

:::tip
Database tables and fields **are not automatically removed** during uninstallation. If required, delete them manually using PhpMyAdmin.
:::
