---
sidebar_position: 4
---

# Remove Broken Links

Some database tables created by the module are not "native" to OpenCart. The platform's standard tools do not properly modify data in these tables. Although users are advised to manage attributes exclusively through **Attribut&co**, some ignore this recommendation. Manual deletions can result in links to non-existent attributes, causing errors instead of displaying the attribute tree.

```javascript
Load error! (SyntaxError: Unexpected token < in JSON at position 0)...
```

To check database integrity, you can use this tool, which simply removes links to non-existent attributes—essentially cleaning up database clutter.
