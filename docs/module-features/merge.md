---
sidebar_position: 8
---

# Merging Attributes

It is common to encounter situations where different attribute names represent the same concept. For example, **"Country of Origin"**, **"Manufacturer"**, and **"Country of Production"** are essentially the same attribute. In such cases, it makes sense to merge them under a single name, such as **"Country of Origin"**. These inconsistencies are called *implicit duplicates*. Automatic merging is not possible, so it must be done manually. However, the Drag-and-Drop technology significantly simplifies the process.  

If you drag one **node** into another using Drag-and-Drop while holding **Ctrl**, the dragged **node** will be merged with the target node. If you drag **nodes** without **Ctrl**, it only sorts or changes the **group**. Thus, the combination **Ctrl + Drag-and-Drop** is used for merging **attributes**.  

## What Happens When Attributes Are Merged?  

Links to products or categories are not lost, so the **values** of the attributes remain intact. If the same product is linked to both the target and the merged **attribute**, its **values** are added to the target. For example, if the target attribute had **"Russia/France"**, after merging, it will become **"Russia/France/Germany"**. New values are added using a delimiter. If the products were not linked to the target attribute, their link simply changes from the merged attribute to the target. A video example illustrates this process.  

<iframe width="100%" height="515" src="https://www.youtube.com/embed/Z1w8sFOJy_E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Multiple **attributes** can be merged with a target attribute simultaneously using [multi-selection](/module-features/tree-features.md). Merging **attributes** from different **groups** is also allowed.  

## Merging Groups  

It is also possible to merge **groups**. In this case, all **attributes** from the selected **group** will be moved to the target group, and the original **group** will be deleted.  

:::danger  
After merging, **nodes** marked for merging will be **deleted permanently with no recovery option**. If the merge does not go as expected, the only way to fix it is by restoring a backup of the database.  
:::
