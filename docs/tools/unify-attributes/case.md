---
sidebar_position: 14
---

# Case Conversion

This tool allows you to batch-convert the case of the first letter in **Groups**, **Attributes**, **Values**, or **Duty Templates**.

For multiple **Values** or **Duty Templates**, the tool changes the case of the first letter in each word separated by a delimiter. This means it can handle structures like:  
`China/russia/brazil/Kazakhstan`.

Using a filter is optional. If no filter is applied, the tool will search and replace across the entire database. However, applying a filter helps narrow the search, reducing processing time or allowing you to execute the task in stages—useful for large stores.

:::info
Category filtering is available only for **Values**.
:::

To enable the tool for **Groups** or other nodes, select the corresponding checkbox. Once activated, you can choose between uppercase or lowercase conversion.

| ![Case](/img/tutorial/case_change.png) |
|:--:|
| *Change first-letter case to uppercase or lowercase* |

:::warning
When applied to **Values** or **Duty Templates**, the tool will automatically remove extra spaces around delimiters.

For example:  
`USA/ russia /china/ Brazil` → `USA/Russia/China/Brazil`
:::
