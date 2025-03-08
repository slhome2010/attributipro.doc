---
sidebar_position: 4
---

# Duty Template

:::tip

The Duty Template is the default value

:::

A natural expectation is that when adding an **Attribute** to a product, a **Value** or a set of **Values** should be added synchronously. This is especially useful when **Values** are the same and need to be applied multiple times.

These **Values** need to be stored somewhere. This is the purpose of the **Duty Template**. It stores **Values** that will be automatically assigned to a product as soon as you add the **Attribute**.

To ensure the automatic assignment happens, do not forget about the [**settings**](/settings/product.md). Depending on the value assignment settings, the following options are available:

- **Clear** – Remove all **attribute values** when adding.
- **Keep (do not modify)** – Do not change existing **values**.
- **Overwrite with Duty (forcefully)** – Replace existing **values** with those from the **Duty Template**.
- **Overwrite with Duty if empty** – Assign **values** from the **Duty Template** only if the field is empty.

:::note

Values for assignment are taken from the **Duty Template**, if it is not empty.

:::

The **Duty Template** can be modified multiple times to insert different **values** into different products without affecting existing ones. To do this, use the setting `Apply Duty Template only to empty fields`.

The **Duty Template** can be [**deleted**](/module-features/duty-features.md).

---
