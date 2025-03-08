---
sidebar_position: 11
---

# Problems and Errors

## License Installation Errors {#error-licence}

```php
Notice: Undefined variable: vendor...
```

**Cause**  
This error occurs because the `/system/license/sllic.lic` file is missing. You may not have installed the license file, or it was installed incorrectly.

**Solution**  
Read the [License](/license/license-install.md) section of the documentation and reinstall the license according to the instructions.

```php
This is not a licensed copy of attributico
```

**Cause**  
This error occurs because your domain name does not match the one registered in the license file.

**Solution**  
Read the [License](/license/license-install.md) section of the documentation, verify the domain name, and reinstall the license accordingly.

## Module Installation Errors {#error-install}

```php
Fatal error: Uncaught exception 'Exception'...
```

**Cause**  
This error occurs because the `category_attribute` table is missing in the database. You may have installed the modifier but not activated the module itself.

**Solution**  
Read the [Installation](/install.md) section of the documentation, paying special attention to step 3.

```php
The module is not activated or the database structure is corrupted!  
Activate (or re-activate) the module in Extensions → Modules.
```

**Cause**  
This error occurs because a required database table or column is missing. It may have been accidentally deleted by you or third-party software.

**Solution**  
Deactivate the module and activate it again. See [Installation](/install.md).

## Conflicts with Other Modules {#error-conflict}

If you are using multiple modules that work with attributes, keep in mind that most of them, like **Attribut&co**, modify the product editing form or replace it with their own version. In such cases, **Attribut&co** integration may not function correctly, and database conflicts may occur.

Additionally, compatibility issues have been identified with modules that use different versions of `jquery.ui`, such as `Admin_quick_edit_product_opencart1.5x.vqmod`. This issue has been resolved in recent versions.

## Runtime Errors {#error-run-time}

```php
Load error! (SyntaxError: Unexpected token < in JSON at position 0)
```

**Cause**  
This is most likely a data structure issue. For example, an `attribute_id` in the `category_attribute` table might be referencing a non-existent record in another database table. The most common causes are operator errors, software failures during database queries, or conflicts with third-party modules.

**Solution**  
Try reverting to a previous working state. Sometimes, re-saving affected entries (such as the category where the error occurred) helps. It’s always best to have a database backup.

:::note
**Tip:**  
If you have already purchased **Attribut&co**, use it to manage attributes.  
It’s more convenient than manually editing OpenCart’s standard forms and helps prevent database errors.
:::

```php
PHP Notice: Undefined offset: 1
```

**Cause**  
This is a module code error. It will likely appear in the **System → Tools → Error Log** and in the browser console.

**Solution**  
Contact the developer.

## Server Errors {#error-server}

```php
Load error! (Internal Server Error)
```

**Cause**  
This error may occur in large stores due to a timeout. It can also be caused by an **Ioncube Loader** version mismatch between the module and the license file.

**Solution**  

- Check your hosting and MySQL settings.
- Add the following line to `.htaccess`: `php_value max_execution_time 300` (if allowed by your hosting provider).
- Enable "Lazy Loading" and caching.
- Disable one of the child nodes in tree settings.
- Select the correct distribution folder from the archive [here](/technical-specifications/archive-content.md).

## Modifier Installation Errors {#error-ocmod}

```php
Two Attribut&co menu items appear...
```

**Cause**  
You have two modifiers installed: one in the `system/` folder and another installed via **Extensions → Extension Installer**.

**Solution**  
Read the [Installation/Update](/install.md) section and remove the extra modifier.
