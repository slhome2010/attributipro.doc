---
sidebar_position: 1
---

# A Bit of Theory

## Differences Between Options and Attributes in OpenCart

In OpenCart, **options** and **attributes** serve different functions. Below are the main differences between them.

---

### 1. Functional Purpose

#### Options

- Used to create product variations that affect price, inventory, weight, or bonus points.
- Examples: size, color, delivery date, file upload.
- Can change the final product price (for example, +$10 for choosing white color).
- Mandatory for selection before adding a product to the cart (if marked as "Required").

:::tip
Options allow you to create variable products, such as clothing in different sizes or phones in different colors.
:::

#### Attributes

- These are static technical parameters that describe product properties but do not affect the order.
- Examples: material, weight, screen resolution, country of manufacture.
- Displayed on the product page to inform the customer.

:::note
Attributes help customers better understand product characteristics but do not affect the purchasing process.
:::

---

### 2. Selection Requirements

- **Options** can be mandatory (such as size for clothing) or optional (such as name engraving). If an option is mandatory, users cannot add the product to the cart without selecting it.
- **Attributes** are always optional for interaction — they only serve to describe the product.

---

### 3. Data Types and Configuration

#### Options {#options-overview}

- Support various input types:
  - **Selection** (radio buttons, dropdown list, checkboxes),
  - **File** (user file uploads),
  - **Date/time**,
  - **Text fields**.
- Configured in the *Catalog → Options* section, then assigned to a product via the "Options" tab in the product card.

#### Attributes {#attributes-overview}

- Have only text format.
- Created in the *Catalog → Attributes* section and added to products via the "Attributes" tab.

:::info
Options are more flexible as they allow configuration of various data input types.
:::

---

### 4. Impact on Cart and Order

- **Options** are displayed in the cart and affect the final price, stock quantity, or order weight. For example, selecting size 46 reduces stock availability.
- **Attributes** are not displayed in the cart and are not considered during checkout.

---

### 5. Usage Flexibility

- **Options** allow linking products through modules (such as "Option as product link"), creating related variations without duplicating product cards.
- **Attributes** are used for filtering products on the site, but their functionality is limited without additional modules.

---

### Example for Clarity

#### Product: Smartphone

- *Options*: color (black/white, +$20 for white), memory capacity (128GB/256GB).
- *Attributes*: screen diagonal (6.5 inches), weight (200g), OS (Android).

---

### Summary

- **Options** — a tool for managing product variability and the purchasing process.
- **Attributes** — a way to provide detailed information about the product.

:::tip
For advanced usage (such as dynamic price changes when selecting options), additional modules may be required.
:::

## Attribute Structure in OpenCart

### Main Hierarchy

OpenCart uses a three-level structure for working with attributes:

```markdown
Attribute Group
└── Attribute
    └── Attribute Value (text field)
```

:::tip Important!
Attribute values are linked to specific products. If a value is not specified — attribute analysis is not possible.
:::

### Connection with Products

Structure for an individual product:

```markdown
Product
  ├── Reference to attribute (from a group)
  └── Attribute value (may contain multiple variants through a separator)
```

:::note Example:
Attribute "Color" → Values "Red; Blue; Green"
:::

### Features of Working with Attributes

1\. Multiple Values
Any product can have multiple attributes.

Any attribute can contain multiple values (through a separator in the text field).

2\. Attribut&pro Module

```markdown
Attribute Group
└── Attribute
      └── Value 1
      └── Value 2
      └── Value 3
```

Visualizes the structure as a tree list.

Simplifies navigation and attribute editing.

:::info
The module does not change the data storage structure, it only improves the administration interface.
:::

### Connecting Attributes to Categories

Logical structure:

```markdown
Product category
└── Attribute
     └── Value (list of values) of the attribute
```

Implementation:

The `category_attribute` database table is used to store connections.

Allows linking a specific set of attributes to a particular category.

Example of `category_attribute` table structure:

|category_id|attribute_id|
|---|---|
|15|27|
|15|34|
|22|41|

Columns of the `category_attribute` table

:::tip Practical Application
This allows automatically assigning attributes to all products in a category (for example, "Screen Diagonal" for the "TVs" category).
:::

#### Final Scheme

- **Attribute Groups** → for systematization.
- **Attributes** → technical parameters of products.
- **Values** → specific data (required for analysis).
- **Categories** → connection of attributes with product groups.

:::warning
Without filled values, attributes remain "empty labels" and do not carry useful information.
:::