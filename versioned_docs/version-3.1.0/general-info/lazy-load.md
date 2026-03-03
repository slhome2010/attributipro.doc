---
sidebar_position: 10
---

# Node Loading {#node-loading}

Slow tree loading can undermine all efforts to simplify working with attributes. Therefore, for child nodes such as Templates and Values, so-called lazy loading is used. These nodes are not loaded when the tree is initially loaded, but are instead loaded on demand, i.e., when accessed. That’s why, when you double-click on a Templates or Values node, you may see a loading indicator before the node opens:  
![loading](/img/loading_ajax.gif)

This lazy loading significantly improves tree load and reload performance during synchronization, but introduces some quirks in how filtering works. Since the filter needs to traverse the entire tree and forcibly open all nodes, the first search can be slow and the result count may be inaccurate. However, if the search is repeated, it runs quickly and counts results correctly, because all nodes are already open.

Nodes are opened via AJAX requests, each introducing up to a 1-second delay. Testing on large attribute sets showed that this can occasionally cause freezing.

### Managing the Loading Mode {#managing-the-loading-mode}

In the [settings](/settings/main-settings.md), or through the [context menu](/module-features/context-menu.md), you can enable or disable lazy loading. If this mode is disabled, the entire tree is loaded in full.

:::tip
If active searching is expected, it is better to reload the trees with lazy loading disabled.  
There’s no need to traverse the tree or load nodes on demand, which significantly speeds up search.
:::

Since nodes are loaded using asynchronous AJAX requests, you might sometimes see console messages like:

`FancytreeNode(#attribute_393, 'New attribute') scrollIntoView(): node is invisible`

This means the AJAX request data didn’t load in time before it was accessed. This happens especially on slow servers. It’s not critical and doesn’t affect module functionality.
