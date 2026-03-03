---
sidebar_position: 1
---

# General Settings

| ![Attributico general settings](/img/tutorial/en/v306/settings_general_306_en.png) |
|:--:|
| *Attributico general settings* |

| Item | Description |
|------|-------------|
| **License Key** | Enables all features of **Attribut&pro**. More details in [Licensed and _free_ version](/license/free-version.md). |
| **Attribute Separator** | Used when a product can have multiple different values for the same attribute. More details in [Terms and Definitions](/general-info/values-templates.md). |
| **Respect Sort Order** | If enabled, trees are built based on user-defined order; otherwise, alphabetically. |
| **Smart Scrolling** | Enables auto-scrolling of tree nodes within a fixed area. |
| **Show Empty Values** | Show or hide empty attribute values. More: [Delete Empty Values](/tools/empty-values.md). |
| **Product in New Window** | Open the product page in a new window. |
| **Lazy Load** | Child nodes are loaded on demand. More: [Node Loading](/general-info/lazy-load.md). |
| **Attribute Tree Cache** | Trees are loaded from cache instead of the database. More: [Clear Tree Cache](/tools/cache.md). |
| **All Stores** | If enabled, includes categories from all stores in the list. |

:::info
Modify scrolling dimensions.  
The height of the scrolling area can be changed in `/admin/view/stylesheet/attributico.css` by editing the property:

```css
.smart-scroll {height: 250px;}
```

:::

:::danger
Be careful when opening the product form in a new window.  
Changes in the product form are saved to the DB, but the module "picks them up" only after reload.  
Without refreshing, the data may be inconsistent.
:::
