---
sidebar_position: 24
---

# Uninstallation

## Step 1: Deactivating the Module

In the admin panel:

- Navigate to *Extensions ⇒ Modules*  
- Click "Uninstall" next to the **Attribut&pro** module

## Step 2: Removing Modifications

- For OpenCart 3.x: delete files (if it was manually copied to `/system`)

```bash
/system/attributipro.3.ocmod.xml
/system/attributipro.3.filter.ocmod.xml
/system/attributipro.3.product.ocmod.xml
```

  Alternatively, remove the modifications under *Extensions ⇒ Modifications*

## Step 3: Deleting Module Files

- Go to *Extensions ⇒ Extension Installer*  
- Delete all `attributipro3.x.ocmod.zip` entries from the installation history

:::danger
Never perform these actions if **Attribut&co** and **Attribut&pro** are used together.
:::

---

## Database

During installation, additional [tables](technical-specifications/database.md) are created.

:::tip
Uninstalling the module **does not remove** these database tables and fields. If necessary, delete them manually via PhpMyAdmin.
:::
