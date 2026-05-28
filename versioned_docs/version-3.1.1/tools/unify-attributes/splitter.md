---
sidebar_position: 13
---

# Separator Replacement

If your store contains products with multiple attribute **Values** (in our terminology, referred to as [**Templates**](/general-info/values-templates.md)), or if you need to parse or process price lists from various suppliers, there is a high likelihood of encountering **Values** with different separators.

This tool enables quick replacement of "incorrect" separators with the "correct" one. The separators to be replaced can be specified as a list, for example: `\;:_`. If the list includes invalid separators, they will be filtered out.

:::danger  
Invalid separators include: letters, numbers, spaces, quotation marks, and `[]-`.  

Replacing dots and commas requires caution to avoid damaging **Values** such as `0.01-0.05/0.1-0.5` or `USB2.0/USB3.2`.  
:::

The replacement separator must also be from the list of valid separators. If multiple separators are entered, only the first valid one will be used.

Using a filter is not mandatory for this tool. If no filter is applied, the search and replace operation will be performed across the entire database. Applying a filter narrows the search scope, reducing the tool’s execution time or allowing the task to be completed in stages, which is particularly important for large stores.

:::warning  
During the tool’s operation, excess spaces around separators will be removed.  

For example: `AVI ; DivX; FLV ; MKV; MOV; MP4; MPEG4 ; MPG;VOB` will be replaced with `AVI/DivX/FLV/MKV/MOV/MP4/MPEG4/MPG/VOB`.  
:::
