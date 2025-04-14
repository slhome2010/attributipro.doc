---
sidebar_position: 8
---

# Synchronization {#synchronization}

## Language Synchronization {#language-synchronization}

The module supports multilingual functionality, so separate trees are created for each language. By default, the module supports two languages: Russian and English. For convenience, a language suffix is added to tree names (e.g., `.ru` or `.en`). To ensure data consistency, a synchronization mechanism is used between the trees.

:::info
When a new attribute is added to the `.ru` tree, an attribute named "New attribute" is automatically added to the `.en` tree.

When a new attribute is added to the `.en` tree, an attribute named "Новый атрибут" is automatically added to the `.ru` tree.
:::

The same applies to **Attribute Groups**.

## Node Synchronization {#node-synchronization}

Synchronization applies to the following elements:

- Templates  
- Values

When one of these nodes is changed, the other is automatically reloaded with the updates applied.

Default templates are **not synchronized**.

## Tree Synchronization {#tree-synchronization}

Changes are synchronized across all trees where the modified node is present.  
Only the affected nodes are reloaded, not the entire tree.

Language synchronization also applies to all trees.

:::warning
If synchronization is not working, check the multilingual settings and the integrity of the database.
:::
