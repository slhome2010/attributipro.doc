---
sidebar_position: 10
---

# Clear Tree Cache

During module operation, it was discovered that on stores with a large number of **Attributes**, tree structures load slowly. Since data synchronization forces trees to reload whenever any data changes, performance can suffer. To speed up tree loading, caching is used. Each tree is cached in a separate file. If the tree settings match the cached version and no data changes have occurred, the tree will be loaded from the cache file.

Clearing the cache removes all files related to tree structures, specifically files named `cache.attributico...`. Other cache files remain unaffected.

:::warning
If caching is not disabled in the settings under the [*`General`*](/settings/main-settings.md) tab when using this tool, the cache will be reloaded instead of being cleared.  

To completely remove the cache, uncheck this option in the settings and make sure to save the changes.
:::
