---
sidebar_position: 10
---

# Clear Tree Cache

During the module’s operation, it became evident that on stores with a large number of **Attributes**, trees load slowly. Since data synchronization forces trees to reload with any data change, performance is impacted. To speed up tree loading, a cache is implemented. Each tree is cached in a separate file. If the tree’s settings match what is already in the cache and no data changes have occurred, the tree will be loaded from the cache file.

The cache clear button is located on the main page within the [button group](/settings/button-group.md).

Clearing the cache involves removing all cache files related to trees, specifically files named `cache.attributipro...` and `cache.attributico...`. Other cache files remain unaffected.

:::warning  
If the cache is not disabled in the settings on the [*`General`*](/settings/main-settings.md) tab while using this tool, the cache will not be cleared but reloaded instead. To truly delete the cache, disable this checkbox in the settings and ensure the changes are saved.  
:::
