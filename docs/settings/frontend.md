# Frontend

This documentation describes the interface for configuring the display of [metadata](general-info/metadata.md) for attributes and their values on the frontend.

| ![Frontend Settings](/img/tutorial/en/frontend_settings_en.png) |
|:--:|
| *Frontend metadata settings* |

## Main Interface Elements

**Tabs:**

- Product: Metadata visibility on the product page.
- Filter: Metadata visibility in the filter.
- Reserve: Reserved tab.

**Settings Table:**

Consists of two columns:

- **Attribute**: Visibility settings for product attribute metadata.
- **Value**: Visibility settings for attribute value metadata.

**Each row of the table represents a visibility toggle setting for a specific metadata element:**

| Parameter             | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| Image                 | Enable/disable display of the attribute or value image.                     |
| Icon                  | Add a graphical symbol (e.g., 📦 for packaging).                            |
| Tooltip Icon          | Display ⓘ to trigger a tooltip with a description.                          |
| Description           | Text content for tooltips.                                                  |
| SEO URL               | Display an icon indicating the presence of a deep link to external sources.|
| Auto-generate URL     | [Automatically create](/settings/interlink.md) SEO-optimized URLs.          |
| Units                 | Enable units of measurement (GB, MHz, W).                                   |
| Display Style         | Format for displaying units: `Clockspeed (MHz)` vs `Clockspeed, Megahertz`. |

**Dropdown "Display Style": Allows selecting a display style for units of measurement:**

- Clockspeed (MHz)
- Clockspeed, MHZ
- Clockspeed (Megahertz)
- Clockspeed, Megahertz
- Clockspeed (Megahertz, MHz)
- Clockspeed, Megahertz, MHz

## Frontend Modification

Most stores use design themes, templates, and third-party filter apps for the frontend.  
Therefore, there is no universal way to modify someone else’s design or app.

The approach used in this module is just an example that may be useful to someone.

:::info
All modifiers are intended for native OpenCart design and software.
:::

Modifier files are located in the `ocmod/` [folder](/technical-specifications/archive-content.md).

- `attributipro3.frontend.product.ocmod.zip` – Modifier for the product card on the frontend for version 3.x stores.  
- `attributipro3.frontend.filter.ocmod.zip` – Modifier for the frontend filter for version 3.x stores.

Files interacting with the backend are in the `catalog\` [folder](/technical-specifications/archive-content.md).

All frontend files are provided with open-source code. The result after installing the modifiers, editing metadata, and applying settings is described in this [article](/opencart-integration/frontend.md).
