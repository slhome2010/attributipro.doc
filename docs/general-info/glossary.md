---
sidebar_position: 2
---

# Glossary

|Term|Description|
|---|---|
|Attribute Separator|More precisely, it should be called an Attribute Value Separator. As mentioned earlier, a product can have multiple attributes and multiple attribute values. The value is stored in a `TEXT` field in the database. A separator is used to distinguish one value from another. Typically, this is `"/"`, `":"`, or `";"`. Modern filters, such as Mega Filter Pro, can parse such constructions.|
|Group|An Attribute Group is used to organize Attributes systematically.|
|Attribute|An Attribute or product characteristic.|
|Category Attribute|An Attribute associated with a specific category. An Attribute can be linked to multiple categories, and a category can be associated with multiple Attributes. When we refer to Category Attributes, we mean the list of Attributes assigned ("belonging") to a category.|
|Template|A set of Attribute Values separated by a delimiter, e.g., `Value1/Value2/Value3`.|
|Value|A single Attribute Value extracted from a Template. Often, a Template consists of a single Value.|
|Default Template|Also known as the default template. This is a Template that is stored "together" with an Attribute, contains a frequently used set of Values, and can be automatically "assigned" to a product according to the [**`Method`**](/settings/product.md) specified in the settings.|

## Trees

A tree is a set of objects called nodes. Each node contains a value or data and may or may not have a child node. The first node of a tree is called the root.

Child nodes are nodes that are one level lower. Any nodes beyond a single level of nesting are typically referred to as descendants.

Sibling nodes are nodes that are on the same level of the tree.

A parent node or ancestor is a node located at the first level of hierarchy.

### Tree Representation

|№|Tab|Name|Description|
|---|---|---|---|
|`1`|Attributes|Attribute Groups|The main tree where all manipulations with Groups, Attributes, and Values can be performed—editing, sorting, searching, deleting, and adding.|
|`2`|Category Attributes|Categories|A category structure displayed in a tree format.|
|`3`|Category Attributes|Attributes|A tree similar to Attribute Groups, used for dragging and dropping a selected attribute into the desired category using Drag-and-Drop or copying via Copy-Paste. It is recommended to include the _Default Templates_ child node in the structure to remind users which Values will be added to the product when an Attribute is added to a category.|
|`4`|Category Attributes|Category Attributes|A tree that shows a category with all its assigned Attributes, Templates, and Values. Here, Attributes can be added or removed.|
|`5`|Products|Product Attributes|A tree similar to Attribute Groups, used for selecting an Attribute, Template, or Value and filtering products based on the selection.|
|`6`|Products|Products|A tree that displays products for a selected Attribute, Template, or Value. To the right of the product name, the product ID in the database and model are displayed in parentheses. Double-clicking on a selected product redirects to the product page.|

### Attributes Tab

| ![Trees](/img/tutorial/tree1.png) |
|-|

### Category Attributes Tab

| ![Trees](/img/tutorial/tree3_3_3_2.png) |
|-|

### Products Tab

| ![Trees](/img/tutorial/tree4_3_3_2.png) |
|-|
