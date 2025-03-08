---
sidebar_position: 1
---

# General Settings

| ![Attributico General Settings](/img/tutorial/en/main_settings_en.png) |
|:--:|
| *Attributico general settings* |

| Option | Description |
|--------|------------|
| **License Key** | Enables full access to **Attribut&pro** features. More details: [Licensed and Free Version](/license/free-version.md). |
| **Attribute separator** | Used when a product can have multiple different values for the same attribute. More details in [Terms and Definitions](/general-info/values-templates.md). |
| **Consider sorting order** | If enabled, trees are formed according to the user-defined order; otherwise, they are sorted alphabetically. |
| **Smart scrolling** | Enables automatic scrolling of tree nodes within a fixed area. |
| **Show empty values** | Show or hide empty attribute values. More details: [Remove Empty Values](/tools/empty-values.md). |
| **Product in a new window** | Open the product page in a new window. |
| **Lazy loading** | Child nodes are loaded on demand. More details: [Node Loading](/general-info/lazy-load.md). |
| **Attribute tree cache** | Trees are loaded from cache instead of the database. More details: [Clear Tree Cache](/tools/cache.md). |
| **All stores** | Includes categories from all stores in the list when enabled. |

:::info
Adjust scrolling size.  
The scroll area height can be changed in the `/admin/view/stylesheet/attributico.css` file by modifying the property:

```css
.smart-scroll {height: 250px;}
```

:::

:::danger
Be cautious when opening the product form in a new window.
Changes in the product form are saved in the database, but the module only "picks them up" after reloading. Without a refresh, the data may be incorrect.
:::
