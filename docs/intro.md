---
sidebar_position: 1
---

# Introduction

The **Attribut&pro** module is an extension designed for managing product attributes (referred to as "характеристики" in Russian-language versions) in online stores built on the OpenCart platform. **Attribut&pro** is an enhanced version of [**Attribut&co**](https://slhome2010.github.io/attributico.doc/).

## Module Mission

The module is designed to:

- Simplify the handling of attributes and their values;
- Provide a clearer visual representation of the attribute structure;
- Introduce modern editing technologies;
- Replace tedious manual work with automated operations and batch processing;
- Expand the structure of attributes and their values for future use on the frontend.

## Core Concept

The core idea is to define a consistent set of attributes for a specific product category and link this set to that category. It is assumed that products within the same category typically share a similar set of attributes. Since OpenCart has a well-developed structure of categories and subcategories, linking attributes to a category—rather than to a manufacturer or other parameter—was chosen as the most logical approach.

Logical structure for linking attributes to categories:

```bash
Product Category
  └── Attribute
    └── Value (a list of attribute values)
```

The module also provides:

- A tree view of attributes and their values;
- The ability to assign metadata to each attribute, its value, or default value;
- Management of this metadata as an integral part of the attribute system.

The structure of attributes and their values is visualized as a tree:

```bash
Attribute Group
  └── Attribute
    └── Value (list of attribute values)
```

### For each element, you can define

- A description (tooltip);
- An icon;
- An image;
- Units of measurement.

## Features

- Create new groups and attributes within a unified tree structure.
- Drag-and-drop and copy-paste support:
  - Copy attributes from one group to another;
  - Move attributes between groups (reassign to a different group);
  - Reorder groups and attributes using drag-and-drop;
  - Add attributes to a category via drag-and-drop;
  - Move attributes between categories;
  - Merge attributes without losing their values or links.
- Filter and search through groups, attributes, and values within the tree.
- Edit groups, attributes, templates, and values.
- Use a default template when adding attributes to products.
- Apply the default template in bulk to products when an attribute is added to a category.
- Control how values and templates are assigned to products.
- Instantly view products filtered by specific attributes or values.
- Built-in tools for organizing and managing attributes:
  - Find and remove empty attribute values;
  - Remove links to non-existent attributes;
  - Defragment attribute sets and prepare parsing groups;
  - Delete attributes that are not linked to any products;
  - Merge duplicate attributes without data loss using AI, exact or fuzzy matching;
  - Automatically generate category-based attributes;
  - Bulk-replace separators in attribute values;
  - Change capitalization for group, attribute, and value names;
  - Attach or remove measurement units from attribute names;
  - Create filters based on existing attributes and values;
  - Redistribute and sort attributes to matching groups using AI, exact or fuzzy matching;
  - Export and import data in SQL or CSV format.
- Multilingual support:
  - Work with multiple languages simultaneously;
  - Clone groups, attributes, or values from one language to another.
- Metadata support for each attribute or attribute value:
  - Description;
  - Image;
  - Icon;
  - Units of measurement;
  - Internal linking URL;
  - Status.
- Display metadata on the product page and in frontend filters.
- Integration with the product form without modifying the OpenCart core.
