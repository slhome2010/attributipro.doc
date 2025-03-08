---
sidebar_position: 2
---

# Installation

## Steps

### Step 1: Download the Module

Download the installation files from the available source. You should have zip archive: `Attributico_v3.3.3.zip`. The archive structure is described in [this article](/technical-specifications/archive-content.md).

### Step 2: Extract and Copy Files

Extract the archive and open the folder corresponding to [your PHP version](/technical-specifications/compatibility.md). Copy the contents of the `upload.../` folder (matching your OpenCart version) over the site's folder structure.

### Step 3: Activate the Module

In the admin panel, navigate to *Extensions ⇒ Modules*, where the "Attribut&co" module should appear. Install (activate) it.

### Step 4: Set Permissions

In the admin panel, go to *System ⇒ Users ⇒ User Groups* and set view/edit permissions for:

- `module/attributico` or `extension/module/attributico` (for OpenCart >2.2)
- `attributico/interlink`
- `attributico/unit`

### Step 5: Upload Modifications

In the admin panel, go to *Extensions ⇒ Installer* and upload `attributico.3.x.ocmod.zip` (for OpenCart 3.x) from the `ocmod` folder.

#### For OCTEMPLATE Users:

Do NOT perform this step. See the modification installation instructions below.

### Step 6: Refresh Modifications

In the admin panel, go to *Extensions ⇒ Modifications* and update the modifications.

After this, a new menu item should appear: *Catalog ⇒ Attributes ⇒ Attribut&co*.

:::warning
**Clear the cache!**
Clear both the store cache and your browser cache. The specifics of clearing the cache for OpenCart 3.x are described [here](https://shopiweb.ru/opencart-3/kesh-opencart-3-ochistka-kesha/).
:::

:::warning
If you previously used an older version of the module and installed modifications directly in the `system` folder, remove them.

Make sure the following files are NOT in the `system` folder:

```bash
attribut&co.2.x.ocmod.xml
autocomplete.ocmod.xml
```

:::

:::info
Some OpenCart translations may use different terminology:

- "Extensions" may appear as "Add-ons."
- "Modifications" may be listed as "Modification Manager."
- "Attributes" might be translated as "Characteristics."

:::

:::tip
**For OCTEMPLATE Users!**

OCTEMPLATE uses many modifications, which may cause ocmod to run out of resources. To bypass this:

- **Skip Step 5.**
- Extract `install.xml` from `attributico.3.x.ocmod.zip`, rename it to `attributico.3.ocmod.xml`, and copy it to the `system` folder.

:::
