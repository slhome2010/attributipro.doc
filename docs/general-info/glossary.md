---
sidebar_position: 2
---

# Glossary

|Term|Description|
|---|---|
|Attribute Separator|More accurately called an Attribute Value Separator. To reiterate, a product can have multiple attributes and multiple attribute values. The value is stored in a `TEXT` type field in the Database. To separate one value from another, a separator is used. Typically this is `"/"` or `":"` or `";"`. Modern filters, such as Mega Filter Pro, can parse these structures.|
|Group|Attribute Group is used for systematizing the Attributes themselves.|
|Attribute|The actual Attribute or product characteristic.|
|Category Attribute|An attribute that is mapped to a specific category. An attribute can be mapped to multiple categories. A category can be mapped to multiple attributes. So when we talk about Category Attributes, we mean the list of Attributes mapped to ("belonging to") the category.|
|Template|A set of Attribute Values separated by a separator. For example, an entry like `Value1/Value2/Value3`|
|Value|A single value of an Attribute, extracted from a Template. Often a Template consists of a single Value.|
|Duty Template|Can also be called the template by default. This is a Template that is stored "together" with the Attribute, contains a frequently used set of Values, and can be automatically "assigned" to a product according to the [**`Method`**](/settings/product.md) specified in the settings.|

## Trees

A tree is a set of objects called nodes. Each node contains a value or data, and it may or may not have a child node. The first node of the tree is called the root.

Child nodes are nodes that are one level below. Any nodes beyond one level of nesting are usually called descendants.

Sibling nodes are nodes that are at the same level of the tree.

A parent node or ancestor is a node that is at the first level of the hierarchy.

### Tree Notation

|#|Tab|Name|Description|
|---|---|---|---|
|`1`|Attributes|Attribute Groups|The main tree where you can perform all manipulations with Groups, Attributes, and Values - editing, sorting, searching, deleting, adding.|
|`2`|Category Attributes|Categories|Category structure shown as a tree.|
|`3`|Category Attributes|Attributes|A tree similar to Attribute Groups, used for dragging a selected attribute to the desired category using Drag-and-Drop technology or copying using Copy-Paste. It's advisable to include the child node _Duty Templates_ in the structure to remind which Values will be added to the product when adding an Attribute to a category.|
|`4`|Category Attributes|Category Attributes|A tree that shows a category with all its assigned Attributes and their Templates and Values. Here it's possible to add or remove attributes.|
|`5`|Products|Product Attributes|A tree similar to Attribute Groups, used to select an Attribute, Template, or Value and filter products by the selected item.|
|`6`|Products|Products|A tree displaying products for the selected Attribute, Template, or Value. To the right of the product name, the product ID in the database and model are shown in parentheses. Double-clicking on a selected product redirects to the product card.|

### Attributes Tab

| ![Trees](/img/tutorial/en/tree1_en.png) |
|-|

### Category Attributes Tab

| ![Trees](/img/tutorial/en/tree2_3_4_en.png) |
|-|

### Products Tab

| ![Trees](/img/tutorial/en/tree5_6_en.png) |
|-|