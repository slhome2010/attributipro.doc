---
sidebar_position: 13
---

# Separator Replacement

If your store contains products with multiple **Values** for attributes (which we refer to as [**Templates**](/general-info/values-templates.md)), or if you need to parse and process price lists from various suppliers, the chances of encountering **Values** with different separators are quite high.

This tool allows you to quickly replace "incorrect" separators with the "correct" one. You can specify the separators to be replaced as a list. For example: `\;:_`  
Any invalid separators in the list will be filtered out.

:::danger
Invalid separators include letters, numbers, spaces, quotation marks, as well as `[]-`.  

Use caution when replacing periods and commas to avoid corrupting **Values** such as `0,01-0,05/0,1-0,5` or `USB2.0/USB3.2`.  
:::

The replacement separator must also be from the list of allowed characters. If you enter multiple separators, only the first valid one will be used.

Using a filter is optional. If no filter is applied, search and replacement will be performed across the entire database. Applying a filter helps narrow the search, reducing processing time or allowing you to execute the task in stages—useful for large stores.

:::warning
Extra spaces around the separator will be automatically removed.  

For example, `AVI ; DivX; FLV ; MKV; MOV; MP4; MPEG4 ; MPG;VOB` will be converted to `AVI/DivX/FLV/MKV/MOV/MP4/MPEG4/MPG/VOB`.  
:::
