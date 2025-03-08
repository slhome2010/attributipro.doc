---
sidebar_position: 23
---

# Update

## Step 1: Copy New Files

Extract the archive and copy the `upload.../` folder (matching your OpenCart version) over the site's folder structure.

## Step 2: Reinstall Modifications

For OpenCart 2.x and 3.x, you **must** reinstall the modifications (`...ocmod.xml` or `...ocmod.zip`). Then, go to *Extensions ⇒ Modifications* and update them.

## Step 3: Reactivate the Module

When upgrading to a new version, you may need to deactivate (uninstall) and immediately reactivate the module in *Extensions ⇒ Modules*. This will create additional database tables and new event handlers if required.

## Step 4: Clear Cache

**Don't forget to clear the** [**store cache**](https://shopiweb.ru/opencart-3/kesh-opencart-3-ochistka-kesha/) **and browser cache.**

## Step 5: Reconfigure Settings

Re-edit and save the module settings.
