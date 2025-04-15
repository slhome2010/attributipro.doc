---
sidebar_position: 3
---

# Upgrading

## Step 1: Copying New Files 

1. Download the new version and extract the archive
2. Copy contents from the `upload.../` folder over your site's directory structure

## Step 2: Updating Modifiers

Reinstall `.ocmod.xml` or `.ocmod.zip` modifier files, then refresh them under *Extensions ⇒ Modifications*.

:::tip
For OCTEMPLATE users:

- **Skip this step**
- Follow [special instructions](/install.md) for OCTEMPLATE

:::

## Step 3: Module Reinstallation (If Required)

During upgrades you may need to:

- Deactivate (uninstall) the module
- Reinstall it via *Extensions ⇒ Modules*

This will create new database tables and event handlers.

## Step 4: Cache Clearance

**Mandatory:** Clear both store cache and browser cache.

## Step 5: Configuration Update

Navigate to module settings, adjust parameters as needed, then save changes.
