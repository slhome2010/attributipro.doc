---
sidebar_position: 12
---

# Metadata Display on the Frontend

This guide demonstrates how metadata settings for attributes and their values affect the visual representation of product features on the website. Examples are illustrated with screenshots showing the results of applying various configurations.

## Core Configuration Features

Settings are managed through the module interface on the *`Settings`* tab in the [*`Frontend`*](/settings/frontend.md) section.

Recall that the **Settings Table** contains two columns:  

- **Attribute** — global settings for all attribute values  
- **Value** — individual settings for specific values  

### Available Options

| Parameter              | Description                                                                  |
|------------------------|------------------------------------------------------------------------------|
| Image                  | Enable/disable display of an image for the attribute or its value            |
| Icon                   | Add a graphical symbol (e.g., 📦 for packaging)                               |
| Tooltip Icon           | Display ⓘ to trigger a pop-up with additional description                    |
| Description            | Text content for tooltips                                                    |
| SEO URL                | Display a hyperlink for linking to external resources                        |
| Auto-generate URL      | Automatically create SEO-friendly URLs                                       |
| Units                  | Enable display of measurement units (GB, MHz, W)                             |
| Display Style          | Format of unit output: `Clockspeed (MHz)` vs `Clockspeed, Megahertz`         |

---

## Implementation Examples

### Product Page

Settings for the product page allow you to create a structured feature table with interactive elements.

#### Result after configuration on the product page

| ![Product card example](/img/tutorial/en/frontend_product_en.png) |
|:--:|
| *Frontend metadata settings* |

**Highlights:**  

- ⓘ icons open detailed descriptions (e.g., Wi-Fi standards)  
- Values with hyperlinks (🔗) redirect to external pages (e.g., interface descriptions)  
- Units of measurement appear in the selected format (`350 (W)` instead of `350 W`)  

| ![Tooltip example](/img/tutorial/en/frontend_product_tooltip_en.png) |
|:--:|
| *Frontend product tooltip* |

### Category Filter

Settings for filters make the selection process more intuitive and user-friendly.

#### Result after configuration in filters

| ![Filter example](/img/tutorial/en/frontend_filter_en.png) |
|:--:|
| *Frontend filter* |

**Highlights:**  

- Attributes with icons (⚡ for power consumption) improve visual recognition  
- Tooltip icons ⓘ explain parameter meanings (e.g., “Input voltage”)  
- Measurement units add context and allow dimension control (`220–240 (V)`)  

| ![Filter tooltip example](/img/tutorial/en/frontend_filter_tooltip_en.png) |
|:--:|
| *Frontend filter tooltip* |

---

## Benefits of Using Advanced Settings

### For the Product Page

1. **Improved UX**:  
   - Tooltips reduce the need to navigate to the “Description” section  
   - Graphic icons simplify understanding of technical specs  

2. **SEO Optimization**:  
   - Auto-generated URLs help link to authoritative sources  
   - Structured data improves indexing by search engines  

3. **Flexible Presentation**:  
   - Allows unit formatting tailored to the target audience (e.g., `Hz` vs `Hertz`)  

### For Category Filters

1. **Effective Search**:  
   - Range values (`250–300 (W)`) help quickly narrow down options  
   - Icons in filters visually highlight key parameters  

2. **Reduced Bounce Rate**:  
   - Detailed tooltips ⓘ decrease user uncertainty when selecting products  

3. **Consistent Design**:  
   - Centralized configuration ensures a uniform display style across the site  

---

## Technical Implementation Details

To apply changes, use the modifier files from the `ocmod/` folder:

- `attributipro3.frontend.product.ocmod.zip` — for the product page  
- `attributipro3.frontend.filter.ocmod.zip` — for filters  

**Important**: All modifiers are adapted to the native OpenCart 3.x design. When using third-party themes or plugins, additional adjustments may be required.

---

## Summary

Proper metadata configuration enables you to:

- Create informative and interactive product pages  
- Simplify the filtering process for users  
- Boost conversion by clearly presenting product features  

Use the provided examples as a starting point for configuring your own store!
