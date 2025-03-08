---
sidebar_position: 4
---

# Synchronization

Since the module is multilingual, separate trees will be created for each language. For convenience, we will append language suffixes such as `.ru` or `.en` to tree names where necessary for explanation. To maintain database integrity, synchronization between trees is applied. For example, when a new Attribute is added to the `Attribute Groups.ru` tree, a new Attribute named "New attribute" will be synchronously added to the `Attribute Groups.en` tree. The same applies to Attribute Groups. However, Templates, Values, and Default Templates are not added synchronously.

Synchronization also occurs when editing Groups, Attributes, Templates, and Values. In all trees where the modified Node is present, changes happen synchronously according to the selected language.
