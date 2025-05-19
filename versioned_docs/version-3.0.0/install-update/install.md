---
sidebar_position: 2
---

# Installation

## Step 1: Downloading the Files

Download the module installation files from your available source. You should receive a ZIP archive:

```bash
Attributipro_v3.0.0.zip
```

The archive structure is described in [this article](/technical-specifications/archive-content.md).

## Step 2: Extracting and Uploading the Files

Extract the archive. Open the folder corresponding to your [PHP version](/technical-specifications/compatibility.md).

In the admin panel:

- Navigate to *Extensions ⇒ Extension Installer*;  
- Upload the file `attributipro.3.x.ocmod.zip` for OpenCart version 3.x from the appropriate folder;
- Upload `attributipro3.frontend.product.ocmod.zip` if modifying product pages on frontend;
- Upload `attributipro3.frontend.filter.ocmod.zip` if modifying OpenCart filters on frontend.

**For OCTEMPLATE users:** Skip this step and the following ones. A separate installation guide is provided below.

## Step 3: Module Activation

In the admin panel:

- Go to *Extensions ⇒ Modules*;  
- Find the module **Attribut&pro**;  
- Install the module;

## Step 4: User Permission Configuration

User permissions are typically configured automatically during activation. If this fails for any reason, set them manually:

In the admin panel:

- Navigate to *System ⇒ Users ⇒ User Groups*  
- Grant "Access" and "Modify" permissions for:
  - `extension/module/attributipro`;
  - `attributipro/interlink`;
  - `attributipro/unit`.

## Step 5: Modifier Refresh

In the admin panel:

- Go to *Extensions ⇒ Modifications*  
- Click "Refresh"  
- Reload the page

Once completed, a new menu item *Attribut&co* will appear under *Catalog ⇒ Attributes*.

:::warning
**Clear your store and browser cache.**  
Cache clearing specifics for OpenCart 3.x are available [here](https://shopiweb.ru/opencart-3/kesh-opencart-3-ochistka-kesha/).
:::

## Special Instructions for OCTEMPLATE

If you are using the OCTEMPLATE theme:

- **Do not perform Step 2**
  - For OpenCart 3.0.x, extract the file `install.xml` and the `upload/` folder from `attributipro.3.x.ocmod.zip`;
  - Rename `install.xml` to `attributipro.3.ocmod.xml`;
  - Copy it to the `/system` directory;
  - For frontend modifiers:
    - Repeat process with `attributipro3.frontend.product.ocmod.zip` → rename to `attributipro.3.product.ocmod.xml`;
    - Repeat process with `attributipro3.frontend.filter.ocmod.zip` → rename to `attributipro.3.filter.ocmod.xml`;
    - Copy both renamed files to `/system` folder.
  - Open the `upload/` folder. Copy the contents corresponding to your OpenCart version over your site's folder structure;
  - Proceed with Steps 3, 4, and 5.
