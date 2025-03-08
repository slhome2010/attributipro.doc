---
sidebar_position: 3
---


# Values & Templates

To better understand what a **Value** is, remember that it is simply text describing a product characteristic (**Attribute**). A **Value** is stored in a `TEXT` field in the **Database**. You can enter any text, for example: `"Lorem ipsum dolor sit amet..."`. In the product form, this is the `Textarea` field to the right of the **Attribute**.

Of course, in practice, we enter something more meaningful, describing our product. Moreover, we want the **Value** to be the same across all products that contain it, allowing us to filter and find our products based on these **Values**.

From an **OpenCart** developer’s perspective, the structure *Product->Attribute->Value* is sufficient, but in practice, it is often not enough. A more common structure is *Product->Attribute->Set of Values*.

:::tip

A **Template** is a set of **Attribute Values** recorded using a separator. It is sometimes called "Multiple Values".

:::

For example, I sell **modules** for **OpenCart** and want to indicate compatibility with different versions such as `1.5.x`, `2.0.1`, `2.1.x`, while others may also be compatible with `2.3.x`, `3.0.x`. I will list these versions in the **Attribute Value** for `Compatibility` by separating them with a **separator**—comma or slash, e.g., `v1.5.x/2.0.1/2.1.x` and `v1.5.x/2.0.1/2.1.x/2.3.x/3.0.x`.

**OpenCart** does not process this structure—it simply displays it as a single string in the product card. However, **smart filters** allow product structuring and searching by **Values**.

## **Template Processing**

### **In the Product Card**

![Template explain1](/img/tutorial/opencart.jpg)

### **In the Module**

| ![Template explain2](/img/tutorial/compatibility.jpg) |
|-|

### **In the Filter**

| ![Template explain3](/img/tutorial/filterpro.jpg) |
|-|

## **Separator**

**OpenCart** does not natively support multiple **Values**, so everything is stored in the database as a single text field.

:::note

If a **filter** does not support multiple **Values**, it is better to avoid using them.

:::

### **Separator Settings**

The **Value separator** can be set in the **General module settings**. Letters, numbers, quotation marks, and square brackets cannot be used.

Here’s how the **separator** appears in popular **filters**:

### **Mega Filter Pro**

| ![Splitter explain1](/img/tutorial/megafilter.jpg) |
|-|

### **FilterPro**

| ![Splitter explain2](/img/tutorial/filterprosepar.jpg) |
|-|

It is important to note that each **Value** is unique to a product. If you change a single letter in a **Value** for one product, it will not affect others, even if they previously matched. The same applies to **Templates**.

