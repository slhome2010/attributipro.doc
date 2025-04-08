---
sidebar_position: 26
---

# Attribut&pro vs Attribut&co

## Feature Comparison Table

| Feature | **Attribut&pro** | **Attribut&co** |
|:--|:--|:--|
| Create new groups/attributes within single tree | ✓ | ✓ |
| Edit groups, attributes, templates, and values in-tree | ✓ | ✓ |
| Filter/search groups, attributes, and values in-tree | ✓ | ✓ |
| Drag'n'Drop & Copy-Paste functionality: copying, group switching, sorting, category assignment/merging | ✓ | ✓ |
| Category attribute creation/management | ✓ | ✓ |
| Default template substitution when adding attributes to products/categories | ✓ | ✓ |
| Quick product preview filtered by attributes/values | ✓ | ✓ |
| Multi-language support with cloning across languages | ✓ | ✓ |
| Empty attribute value search/removal | ✓ | ✓ |
| Orphaned attribute reference cleanup | ✓ | ✓ |
| Attribute defragmentation and parsing group preparation | ✓ | ✓ |
| Removal of unused attributes | ✓ | ✓ |
| Duplicate attribute merging with relationship preservation | ✓ | ✓ |
| Automatic category attribute generation | ✓ | ✓ |
| Batch attribute value separator replacement | ✓ | ✓ |
| First-letter case modification for groups/attributes/values | ✓ | ✓ |
| Filter creation based on existing attributes/values | ✓ | ❌ |
| SQL/CSV data import/export | ✓ | ❌ |
| Metadata support: descriptions, images, icons, units, internal links | ✓ | ❌ |
| Frontend display of metadata in product pages/filters | ✓ | ❌ |
| Unit of measurement attachment/removal | ✓ | ❌ |

## OpenCart Integration Differences

| **Attribut&pro** | **Attribut&co** | Solution |
|:--|:--|:--|
| Dedicated product form tab | Modified existing product form tab | HTML markup conflicts with other modifiers |
| On-demand form loading/lazy list generation | Full data loading during form initialization | Increased product form load times |
| Pagination and custom table sorting | Limited to OpenCart engine capabilities | Navigation complexity with large attribute sets |
| Real-time database updates | Save-button triggered updates | Prevents data loss on unsaved exits/page refreshes |

## Coexistence

**Attribut&pro** and **Attribut&co** can coexist when using **Attribut&co** v3.3.2 or newer. 

:::warning
Simultaneous use of product form modifiers will negate all **Attribut&pro** advantages listed above.
:::
