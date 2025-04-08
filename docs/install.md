---
sidebar_position: 2
---

# Installation

## Step 1: Downloading Files

Download the module installation files from your available resource. You should receive a ZIP archive:

```bash
Attributipro_v1.0.0.zip
```

The archive structure is described in [this article](/technical-specifications/archive-content.md).

## Step 2: File Extraction and Copying

1. Extract the archive.
2. Open the folder corresponding to [your PHP version](/technical-specifications/compatibility.md).
3. Copy contents from the `upload.../` folder (matching your OpenCart version) over your website's directory structure.

## Step 3: Module Installation

In Administration Panel:

- Navigate to *Extensions ⇒ Modules*
- Find the "Attribut&pro" module
- Install (activate) the module

## Step 4: Configuring User Permissions

In Administration Panel:

- Navigate to *System ⇒ Users ⇒ User Groups*
- Set view/edit permissions for:
  - `extension/module/attributipro`
  - `attributipro/interlink`
  - `attributipro/unit`

## Step 5: Installing Modifiers

In Administration Panel:

- Navigate to *Extensions ⇒ Installer*
- Upload `attributipro3.react.ocmod.zip` for version 3.x stores from the `ocmod` folder
- Upload `attributipro3.frontend.product.ocmod.zip` if modifying product pages on frontend
- Upload `attributipro3.frontend.filter.ocmod.zip` if modifying OpenCart filters on frontend

**OCTEMPLATE Users:** Skip this step. Modifier installation instructions are provided below.

## Step 6: Updating Modifiers

In Administration Panel:

- Navigate to *Extensions ⇒ Modifications*
- Click **Update**

After completing all steps, the *Attribut&pro* entry will appear under *Catalog ⇒ Attributes*.

:::warning
**Clear the store and browser cache.**  
OpenCart 3.x cache management specifics are described [here](https://shopiweb.ru/opencart-3/kesh-opencart-3-ochistka-kesha/).
:::

## Special Instructions for OCTEMPLATE

For OCTEMPLATE users:

- **Skip Step 5**
- For OpenCart 3.0.x:
  1. Extract `install.xml` from `attributipro3.react.ocmod.zip`
  2. Rename to `attributipro.3.ocmod.xml`
  3. Copy to `/system` folder
- For frontend modifiers:
  - Repeat process with `attributipro3.frontend.product.ocmod.zip` → rename to `attributipro.3.product.ocmod.xml`
  - Repeat process with `attributipro3.frontend.filter.ocmod.zip` → rename to `attributipro.3.filter.ocmod.xml`
  - Copy both renamed files to `/system` folder
  