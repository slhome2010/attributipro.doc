---
sidebar_position: 4
---

# Node Loading

Slow tree loading can negate all efforts to streamline working with attributes. Therefore, for child nodes such as Templates and Values, a so-called lazy loading approach is used. These nodes are not loaded when the tree is initially loaded but are instead fetched on demand, meaning they load when accessed. This is why, when you double-click on a Template or Value node, you see a loading indicator ![loading](/img/loading_ajax.gif) before the node opens.

This node-loading method significantly improves tree loading times and tree reloads during synchronization. However, it introduces some peculiarities in filter operation. Since the filter must traverse the entire tree and forcefully open all nodes when performing a search, the search process is slow, and the match count display may be inaccurate. However, if you run the search again, it will be faster and more accurate because all nodes have already been opened.

AJAX requests are used to open nodes, each introducing a delay of up to 1 second. Tests with a large number of attributes have shown that freezing can often occur.

Starting from version 2.1.4, it became possible to manage the loading mode. Either in the settings or through the [context menu](/module-features/context-menu.md), you can enable or disable lazy loading. If this mode is disabled, all tree nodes are fully loaded. This eliminates the need to traverse the tree and load nodes dynamically, significantly speeding up searches.

Thus, if frequent searches are expected, it is better to reload the trees with lazy loading disabled.

Since node loading is performed using asynchronous AJAX requests, you may sometimes see console messages like:

`FancytreeNode(#attribute_393, 'New attribute') scrollIntoView(): node is invisible`

This means that the AJAX request data did not load in time before being used. This issue is particularly noticeable on slow servers. However, it does not affect the module's functionality.
