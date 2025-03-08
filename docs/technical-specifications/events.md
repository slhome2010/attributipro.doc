---
sidebar_position: 5
---

# Events

Events are needed to reduce interference with the OpenCart engine code through modifiers, and also to _track_ changes in data that are made using standard OpenCart engine tools.

## How the Event Processing Subsystem Works in OpenCart

OpenCart uses an event system that allows developers to "subscribe" to specific actions that occur in the store. When an event occurs, the system notifies all subscribers, allowing them to execute custom code.

## What Handlers Attribut&co Has

| **Handler** | **Action** |
|:---|:---|
| `attributico_add_attribute_after` | Data synchronization after adding a new attribute |
| `attributico_add_product_after` | Data synchronization after adding a new product |
| `attributico_copy_product_after` | Data synchronization after adding a new product by copying |
| `attributico_delete_attribute_after` | Data synchronization after deleting a product |
| `attributico_edit_attribute_after` | Data synchronization after editing an attribute |
| `attributico_edit_attribute_before` | Data synchronization before editing an attribute |
| `attributico_edit_product_after` | Data synchronization after editing a product |
| `attributico_edit_product_before` | Data synchronization before editing a product |

:::warning
Changes made by third-party extensions are not tracked and processed.
:::
