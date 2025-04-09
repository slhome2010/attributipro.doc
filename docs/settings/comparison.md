# Value Comparison

This setting defines the update algorithm for **Values** after editing. The mode names are self-explanatory.

| Mode |
|------|
| **Substring Match** |
| **Exact Match** |

Saving or updating **Values** happens when the single-line editor is closed, unless canceled with the `Esc` key.  
At that moment, the edited sample is searched among all **Values** of the given **Attribute** and replaced with the new, edited version.

By default, all occurrences of the edited sample (substring) within the **Value** (string) are found and replaced.

For example, consider these entries:

```php
MP4/AVI, MP4-MPEG4/MP4-MPG/VOB, MP4/AVI/MKV, MP4/AVI/MKV/VOB
```

After replacing `MP4` with `MP3`, you get:

```php
MP3/AVI, MP3-MPEG4/MP3-MPG/VOB, MP3/AVI/MKV, MP3/AVI/MKV/VOB
```

In other words, all occurrences of `MP4` were updated to `MP3`.

Now, consider a case where this behavior is not acceptable.  
Suppose an **Attribute** has the following **Values** (**Templates**):

```php
50, 50-100, 50/500/500-5000, 500
```

After replacing `50` with `50g`, the result is unexpected:

```php
50g, 50g-100, 50g/50g0/50g0-50g00, 50g0
```

Even though this is a special case, it can be accounted for.  
To do this, enable the **Exact Match** setting. In that mode, the result will be correct:

```php
50g, 50-100, 50g/500/500-5000, 500
```

## Difference Between Editing **Templates** and **Values**

:::info  
The setting described above applies to editing **Values**.

**Templates** are always updated using an exact match between the edited sample and the full **Template**.
:::

## Impact on Product Selection

This setting also affects how products are filtered by a specific **Attribute Value**.

For example, in **Substring Match** mode, clicking on **Attribute Value** `20`  
will show products with **Values** like `20`, `120`, `200`.

In **Exact Match** mode, clicking on `20` will only show products with that exact **Value**.

## Impact on Deleting **Values**

This setting also affects [deleting values](/module-features/delete-value.md).

Suppose there are products where the **Attribute** `Test Attribute 3.1` has the **Value** `test value 3.2.1`.

In **Exact Match** mode, only **Attributes** with the exact **Value** `test value 3.2.1` will be deleted.  
In **Substring Match** mode, those with **Values** like `test value 3.2.1/test value 3.2.2` will be deleted too.

## Impact of Units of Measurement

All functions that use comparison take into account the possible presence of units of measurement in the content.

Units are effectively *masked* so they don’t affect the comparison result.  
This is true for cases where the compared elements contain known units from the `unit_description` table.

This behavior applies to functions like split, merge, and replace.
