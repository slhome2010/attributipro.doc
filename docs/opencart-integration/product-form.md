---
sidebar_position: 1
---

# Integration with the Product Form

The module integrates with the OpenCart engine using `ocmod` modification files. The purpose of these files is described in the section [Archive Structure](/technical-specifications/archive-content.md). Instructions for installing modifications can be found in the section [Installation](/install.md).

:::danger
All actions described below, performed using this modifier, do not make changes to the Database. All modifications occur only in the browser, on the product form page.

Changes to the Database occur only after you click the `Save` button. Saving is carried out using OpenCart's standard mechanisms.

You are the one who decides whether to save the changes or not.
:::

If the modification is applied correctly, the **Attribut&co** menu item should appear in the *Catalog ⇒ Attributes* section of the admin panel sidebar, and additional control buttons should appear in the product form.

| ![attribute](/img/tutorial/en/service_panel_en.png) |
|:--:|
| *Service panel* |

On the right side of the table, above the text area for each language, a **Value** selection field from a dropdown list should appear.

| ![attribute](/img/tutorial/en/select_in_textarea_en.png) |
|:--:|
| *Modified textarea* |

The following **operations** will become available:

- Inserting **Templates** or **Values** from a dropdown list;
- Inserting **Default Templates** when selecting an **Attribute**;
- Inserting **Attributes** with their **Default Templates** when linking or relinking a product to a category on the **Links** tab;
- Inserting all **Category Attributes** with their **Default Templates** using a single button;
- Inserting all **Attributes** from a selected group with their **Default Templates**.

## Video Examples

<iframe width="100%" height="515" src="https://www.youtube.com/embed/kN91LkmpN_c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>