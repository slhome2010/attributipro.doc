---
sidebar_position: 1
---

# Introduction

The Attribut&co module is an extension for managing product attributes (referred to as "characteristics" in Russian-language versions) in online stores running on the OpenCart platform.

## Module Mission

To simplify working with attributes and their values. To display the structure of attributes more clearly. To apply more modern editing technologies. To replace routine manual labor with automated operations and move to batch processing of changes.

## Main Idea

Creating a set of attributes that are the same for a certain product category and linking this set to the category. It is assumed that products of the same category have, roughly, the same set of attributes. The structure of categories and subcategories in Opencart is quite well developed, so the link to the category was chosen, not to the manufacturer, for example. Bringing the structure of attributes and their values to the form:

```bash

Product Category
    └── Attribute
          └── Value (list of values) of the attribute

```

Representing the structure of attributes and values in the form of trees.

## Capabilities

- Creating new groups and attributes in the same tree;
- Drag-and-drop and copy-paste technologies:
  - Copying attributes from one group to another;
  - Moving attributes from group to group (changing the group);
  - Drag-and-drop sorting of groups and attributes within a group;
  - Drag-and-drop adding attributes to a category;
  - Moving attributes from one category to another (changing the category);
  - Merging attributes (combining) without losing values and links;
- Filtering and searching for groups, attributes and attribute values in the tree;
- Editing groups, attributes, templates and values;
- Substituting the "Default Template" when adding an attribute to a product;
- Batch substitution of the "Default Template" in products, when adding an attribute to a category;
- Managing the method of adding values ​​and templates to the product;
- Quick viewing of products filtered by attribute or value;
- A set of tools for ordering attributes:
  - Finding and deleting empty attribute values;
  - Removing links to non-existent attributes;
  - Defragmentation of attributes. Preparing a group for parsing;
  - Deleting attributes not associated with any product;
  - Merging attribute duplicates without losing links;
  - Automatic formation of category attributes;
  - Batch replacement of the attribute value separator;
  - Changing the case of the first letter of groups, attributes and attribute values;
- Multilingualism, the ability to work with multiple languages in parallel;
  - The ability to clone attributes, groups or values of one language into another;
  