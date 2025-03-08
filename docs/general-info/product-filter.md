---
sidebar_position: 5
---

# Product Selection

Depending on the selected node in the **Product Attributes** tree and the context menu settings, the product filtering logic can be adjusted.

## Match Mode

|Selection|Matching Products|
|---|---|
|Attribute|All products that have this Attribute. The selection is based on the attribute ID, not the name. Therefore, if another Group has an Attribute with the same name, the products linked to it will not be included in the selection.|
|Template|All products that have the parent Attribute and whose characteristics field exactly matches the selected Template.|
|Value|All products that have the parent Attribute and whose characteristics field contains the selected Value.|

| ![Settings](/img/tutorial/matches.jpg) |
|-|

## Mismatch Mode

|Selection|Matching Products|
|---|---|
|Attribute|All products that do not have this Attribute.|
|Template|All products that have the parent Attribute but whose characteristics field does not exactly match the selected Template.|
|Value|All products that have the parent Attribute but whose characteristics field does not contain the selected Value.|

| ![Settings](/img/tutorial/diver.jpg) |
|-|

In Mismatch Mode, folder icons in the product tree change color.
