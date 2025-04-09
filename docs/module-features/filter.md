---
sidebar_position: 11
---

# Filter

What are our actions when we discover errors in **Attributes** or, even worse, in **Values**? Who is to blame and what should we do?  
We can catch products with errors using, for example, Mega Filter Pro. Then enter each product and fix it.  

Imagine that you missed one letter, and there are, let's say, 50 products that need correction.  
Well, the **Filter** will allow you to find what you're looking for in the tree. And it doesn't matter if it's a **Group**, an **Attribute**, or a **Value**. You can make corrections right here.

## Filter Options

| Option | Description |
|-------|----------|
| **Attributes Only** | The search will be performed only in **Attributes**. |
| **Values Only** | The search will be performed only in **Templates** and **Values**. |
| **Hide Non-matches** | **Nodes** with no matches will be hidden. |
| **autoExpand** | Automatically expands **Nodes** where matches are found. Depends on the state of the **Automatically Collapse** dialog menu item. |
| **Node Counters** | Shows in how many **Nodes** the search query appears. |
| **Counters of Expanded** | Hides counters from expanded **Nodes**. |
| **Highlight** | Found items will be highlighted in yellow. |
| **Approximate** | Search for fuzzy data. Possible by matching single characters, for example, 'cp' will find 'Computers'. |
| **Regular Expression** | Search string is defined using a regular expression. |

:::info
**Node Counters** work correctly only when lazy loading is disabled.
:::

:::danger
The filter cannot work properly if **Node** headers contain HTML markup.
:::

:::warning
Search speed depends on the number of **Nodes** and text in **Node** headers.  
In large stores with a large number of **Values**, it may work slowly.  
Speed significantly increases when lazy loading mode is disabled.
:::

For large stores where there is a risk of filter hanging, there is an option to disable auto-completion.  
This means that the search will not be performed for each letter entered. After entering a whole word or phrase, you can start the search by clicking on the button ![Search](/img/tutorial/search_button.png).

The filter search bar now looks like this:

| ![Search filter](/img/tutorial/en/search_filter_en.png) |
|:--:|
| *Search filter* |

The search button ![Search](/img/tutorial/search_button.png) becomes available when auto-completion is disabled.

The dropdown menu with the **Execute** header opens a list of commands for searching by the most popular regular expressions.  
The **Restore** command clears the filter and restores the state of checkboxes.

The effect of the **Attributes Only** and **Values Only** settings requires separate explanation.  
It would be more accurate to call the **Attributes Only** setting as **Search only in loaded nodes**.  

To understand the definition of *loaded nodes*, you need to read the [Node Loading](/general-info/lazy-load.md) section.  
This means that the search will be performed in **Attributes** and **Groups** if child nodes have not been loaded previously.  
If **Templates** or **Values** were loaded earlier, the search will be performed in them as well.

Searching in **Values Only** mode has a higher priority, but it is also the slowest, as it involves traversing and loading all nodes of the tree.

:::info
Filter visibility is controlled by clicking the ![filter](/img/tutorial/filter_button.png) button on the right.  

When clicking ![Apply](/img/tutorial/apply_button.png) or ![Save](/img/tutorial/save_button.png), the filter state is saved for each tree.
:::

## Video Examples

<iframe width="100%" height="515" src="https://www.youtube.com/embed/gW3l9gFJ67o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>