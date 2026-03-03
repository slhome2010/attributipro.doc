---
sidebar_position: 4
---

# Remove Broken Links

Some database tables created by the module are not native to OpenCart.  
The platform's standard tools cannot properly modify data in these tables, and event handlers may not always succeed either, as they lack the ability to process events from third-party extensions.

If database integrity is compromised, an error may occur:

```javascript
Load error! (SyntaxError: Unexpected token < in JSON at position 0)...
```

To verify the integrity of database tables, you can use this tool, which simply removes links to non-existent attributes.  
Think of it as a form of garbage cleanup.
