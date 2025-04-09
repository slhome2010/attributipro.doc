---
sidebar_position: 5
---

# Events

Events are designed to reduce the need for modifying OpenCart core engine code through OCMOD extensions, while also enabling _tracking_ of data changes made through native OpenCart functionality.

## How the Event Handling System Works in OpenCart

OpenCart utilizes an event-driven system that allows developers to "subscribe" to specific actions within the store. When an event is triggered, the system notifies all subscribed modules, enabling them to execute custom code.

## Event Handlers in Attribut&pro

| **Handler** | **Action** |
|:--|:--|
| `attributipro_add_attribute_after` | Data synchronization after adding a new attribute |
| `attributipro_add_product_after` | Data synchronization after adding a new product |
| `attributipro_copy_product_after` | Data synchronization after duplicating a product |
| `attributipro_delete_attribute_after` | Data synchronization after deleting an attribute |
| `attributipro_edit_attribute_after` | Data synchronization after editing an attribute |
| `attributipro_edit_attribute_before` | Data synchronization before editing an attribute |
| `attributipro_edit_product_after` | Data synchronization after editing a product |
| `attributipro_edit_product_before` | Data synchronization before editing a product |

:::warning
Changes made by third-party extensions are not tracked or processed by the system.
:::

:::info
When using Attribut&pro and Attribut&co together, only the handlers from the last installed module will remain active.  
This prevents duplication since both modules share identical event handlers.
:::
