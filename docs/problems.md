---
sidebar_position: 15
---

# Issues and Errors

## License Installation Errors {#error-licence}

```php
Notice: Undefined variable: vendor...
```

**Cause**  
The error occurs due to a missing `/system/license/sllic.lic` file. This might happen if the license file wasn't installed or was installed incorrectly.

**Solution**  
Review the [License Installation](/license/license-install.md) documentation section. Reinstall the license following the instructions.

```php
This is not licensed copy of attributipro
```

**Cause**  
Your domain name doesn't match the license file configuration.

**Solution**  
Check the [License Installation](/license/license-install.md) documentation. Verify your domain name and reinstall the license accordingly.

## Module Installation Errors {#error-install}

```php
Fatal error: Uncaught exception 'Exception'...
```

**Cause**  
Missing `category_attribute` table in the database. This usually occurs when modifiers are installed but the main module remains inactive.

**Solution**  
Follow the [Installation Guide](/install-update/install.md), paying special attention to Step 3.

```php
Module not activated or database structure corrupted!
Reactivate the module via Extensions->Modules.
```

**Cause**  
Missing database tables/columns, possibly due to accidental deletion by user/third-party software, or after module updates.

**Solution**  
Deactivate and reactivate the module. See [Installation Guide](/install-update/install.md).

## Conflicts with Other Modules {#error-conflict}

When using multiple attribute management modules alongside **Attribut&pro**, note that most modify product edit forms or inject custom pages. This may cause integration issues and database conflicts.

Additionally, compatibility issues have been observed with modules using different `jquery.ui` versions (e.g., `Admin_quick_edit_product_opencart1.5x.vqmod`). These are resolved in recent **Attribut&pro** versions.

## Runtime Errors {#error-run-time}

```php
Load error! (SyntaxError: Unexpected token < in JSON at position 0)
```

**Cause**  
Data structure corruption. Example: `attribute_id` in `category_attribute` table references non-existent records. Typically caused by operator errors, database query failures, or third-party module conflicts.

**Solution**  
Restore from backup or repair corrupted entries (e.g., re-saving affected categories). Always maintain database backups.

:::note
**Tip**  
If you've purchased **Attribut&pro**, use it for attribute management instead of manual OpenCart form edits. This reduces database error risks.
:::

```php
PHP Notice: Undefined offset: 1
```

**Cause**  
Module code error. Check **System ⇒ Tools ⇒ Error Logs** and browser console for details.

**Solution**  
Contact developer support.

## Server Errors {#error-server}

```php
Load error! (Internal Server Error)
```

**Cause**  
Common on large stores due to timeout issues or **Ioncube loader** version mismatches between module and license file.

**Solution**  

- Verify hosting/MySQL configuration
- Add to `.htaccess`: `php_value max_execution_time 300` (if allowed by host)
- Enable lazy loading and caching
- Disable one child node in tree configuration
- Select correct distribution folder from [archive](/technical-specifications/archive-content.md)

## Modifier Installation Errors {#error-ocmod}

```php
Duplicate Attribut&pro menu items...
```

**Cause**  
Duplicate modifiers: one in `system/` folder, another installed via **Extensions ⇒ Installer**.

**Solution**  
Follow the [Installation/Update Guide](/install-update/install.md). Remove redundant modifier.
