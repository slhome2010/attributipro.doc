---
sidebar_position: 6
---

# Value Comparison

This setting defines the algorithm for updating **Values** after editing them. The mode names speak for themselves.

| Mode |
| --- |
| **By Substring Matching** |
| **By Exact Match** |

Saving or updating **Values** occurs when the single-line editor is closed unless the action is canceled with the `Esc` key. At this moment, the system searches for the edited sample among all **Values** of the given **Attribute** and replaces it with the newly edited state.  

By default, the search and replace function updates all occurrences of the edited sample (substring) within the **Value** (string).  

For example, consider the following entries:

```php
MP4/AVI, MP4-MPEG4/MP4-MPG/VOB, MP4/AVI/MKV, MP4/AVI/MKV/VOB
```

After replacing `MP4` with `MP3`, the result will be:

```php
MP3/AVI, MP3-MPEG4/MP3-MPG/VOB, MP3/AVI/MKV, MP3/AVI/MKV/VOB
```

That is, all occurrences of `MP4` are updated to `MP3`.

Now, let's consider a case where such an update is undesirable. Suppose an **Attribute** has a set of **Values** (**Templates**):

```php
50, 50-100, 50/500/500-5000, 500
```

After replacing `50` with `50gr`, we get an unexpected result:

```php
50gr, 50gr-100, 50gr/50gr0/50gr0-50gr00, 50gr0
```

Although this is a specific case, it can be accounted for. To ensure correctness, enable the **By Exact Match** setting. With this mode, the result will be:

```php
50gr, 50-100, 50gr/500/500-5000, 500
```

## Difference Between Editing **Templates** and **Values**

:::info  
The above setting applies to editing **Values**.  

**Templates** are always updated by exact match of the edited sample with the entire **Template**.  
:::

## Impact on Product Selection

This setting also affects the selection of products that contain a specific **Attribute Value**.

For example, if the **By Substring Matching** mode is enabled, clicking on the **Attribute Value** `20`
will display products with **Values** `20`, `120`, `200` in the product tree.

If the **By Exact Match** mode is enabled, clicking on **Attribute Value** `20`
will display only products with **Value** `20`.

## Impact on **Value** Deletion

This setting also affects [value deletion](/module-features/delete-value.md).

Suppose there is a product or multiple products where the **Attribute** `Test Attribute 3.1` has a **Value** `test value 3.2.1`.

If the **By Exact Match** mode is enabled, only **Attributes** with **Value** `test value 3.2.1` will be deleted.
In **By Substring Matching** mode, **Attributes** with **Values** such as `test value 3.2.1/test value 3.2.2` will also be deleted.

