---
sidebar_position: 8
---

# Merging Attributes

There is often a situation where different attribute names denote the same thing. For example, **"Country of Manufacture"**, **"Manufacturer"**, and **"Manufacturing Country"** are actually the same attribute. In such cases, it makes sense to combine them under one name, such as **"Country of Manufacture"**. Such inconsistencies are called *implicit duplicates*. It's impossible to combine them automatically, so this needs to be done manually. However, Drag-and-Drop technology significantly simplifies the process.  

If you drag one **node** into another using Drag-and-Drop while holding **Ctrl**, the dragged **node** (let's call it the **source**) will be merged with the target. If you drag **nodes** without **Ctrl**, only sorting or changing the **Group** is performed. Thus, the combination `Ctrl + Drag-and-Drop` is used for merging **Attributes**.  

## What Happens When Merging Attributes?  

Connections with products or categories are not lost, so attribute **Values** are preserved. If the same product is linked to both the target and the merged **Attribute**, its **Values** are added to the target. For example, if the target attribute had **"Russia/France"**, after merging they will become **"Russia/France/Germany"**. New **Values** are added using a [separator](/settings/main-settings.md). If products were not linked to the target attribute, their connection simply changes from the merged attribute to the target. For clarity, you can watch the video example.  

<iframe width="100%" height="515" src="https://www.youtube.com/embed/Z1w8sFOJy_E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can merge several **Attributes** with the target at once using [multiple selection](/module-features/tree-features.md). Merging **Attributes** from different **Groups** is allowed.

Metadata in the target **node** does not change during merging. But keep in mind that **sources** are deleted along with their metadata.

## Merging Groups  

You can also merge **Groups**. In this case, all **Attributes** of the selected **Group** will be moved to the target, and the **Group** itself will be deleted.  

:::danger
After merging, **nodes** marked as mergeable will be **deleted without the possibility of recovery**. If the merge did not go as expected, only a database backup can help fix the situation.  
:::
