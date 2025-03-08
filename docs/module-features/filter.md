---
sidebar_position: 11
---

# Filter
What do we do when errors are found in **Attributes**, or worse, in **Values**? Who is responsible, and what should be done?  
One way is to catch products with errors using Mega Filter Pro, then go into each product and fix it manually.

Now imagine that you missed a single letter, and there are 50 products to correct.  
The **Filter** allows you to find what you need within the tree, regardless of whether it is a **Group**, **Attribute**, or **Value**. You can make corrections right there.

## Filter Options

| Option | Description |
|--------|------------|
| **Only Attributes** | The search will be performed only within **Attributes**. |
| **Only Values** | The search will be performed only within **Templates** and **Values**. |
| **Hide Mismatches** | **Nodes** without matches will be hidden. |
| **Auto-Expand** | Automatically expands **Nodes** where matches are found. Depends on the dialog menu setting **Auto-Collapse**. |
| **Node Counters** | Shows how many **Nodes** contain the search query. |
| **Expanded Counters** | Hides counters for expanded **Nodes**. |
| **Highlight** | The found text will be highlighted in yellow. |
| **Approximate** | Searches for approximate matches, such as partial letter matching (e.g., 'cp' will find 'Computers'). |
| **Regular Expression** | The search query is defined using a regular expression. |

:::info
**Node Counters** work correctly only when lazy loading is disabled.
:::

:::danger
The filter may not function properly if **Node** titles contain HTML markup.
:::

:::warning
Search speed depends on the number of **Nodes** and the text in **Node** titles.  
For large stores with many **Values**, the process may be slow.  
Speed improves significantly when lazy loading is disabled.
:::

In version **2.0.3**, useful filter improvements were introduced. For large stores where the filter might freeze, auto-completion can now be disabled.  
This means the search won't occur with every typed letter. Instead, after entering a full word or phrase, the search can be initiated by clicking the button ![Search](/img/tutorial/search_button.png).

The filter search bar now appears as follows:

| ![Search filter](/img/tutorial/en/search_filter_en.png) |
|:--:|
| *Search filter* |

The search button ![Search](/img/tutorial/search_button.png) becomes available when auto-completion is disabled.

The dropdown menu titled **Execute** opens a list of commands for searching with commonly used regular expressions.  
The **Restore** command clears the filter and resets checkbox states.

The settings **Only Attributes** and **Only Values** require further explanation.  
A more precise name for **Only Attributes** would be **Search only in loaded nodes**.

To understand what *loaded nodes* are, refer to the section [Loading Nodes](/general-info/lazy-load.md).  
This means that the search will be performed within **Attributes** and **Groups**, provided that their child nodes have not been loaded previously.  
If **Templates** or **Values** have already been loaded, the search will include them as well.

Searching in **Only Values** mode has a higher priority but is also the slowest, as it scans and loads all tree nodes.

:::info
Filter visibility is managed by clicking the ⨈ icon on the right.  

When clicking ![Apply](/img/tutorial/apply_button.png) or ![Save](/img/tutorial/save_button.png), the filter state is saved for each tree.
:::

## Video Examples

<iframe width="100%" height="515" src="https://www.youtube.com/embed/gW3l9gFJ67o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
