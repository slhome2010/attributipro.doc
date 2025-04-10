---
sidebar_position: 12
---

# Language Cloning

This standardization tool can be useful when adding a new language. The built-in OpenCart features cannot create all the tables required for the module to function when a new language is integrated. Cloning enables synchronization of data across tables. Subsequently, information requiring translation can be edited as needed.

You can separately clone **Groups**, **Attributes**, or **Values**.

- **`Insert` mode** — Useful when some attributes are already translated, but certain elements lack records in the database entirely. Missing records will be inserted and populated with data from the source language. Existing records will remain unaffected, even if they contain empty fields.
- **`Overwrite` mode** — Missing records will be inserted and populated with data from the source language. Existing records will be overwritten.
- **`Empty only` mode** — Protects populated fields, but this is a resource-intensive mode that involves additional database queries. Large stores may experience timeouts or system hangs.

**Duty Templates** are cloned simultaneously with attributes. The `*Duty*` checkbox should only be selected if they need to be cloned separately. The optimal mode for this is `Overwrite Only Empty`.

| ![Clone](/img/tutorial/clone.png) |
|:--:|
| *Clone attribute between languages* |

Upon task completion, a corresponding message should appear:

`✅ Success! Operation completed. Cloned groups: 0, Cloned attributes: 20, Cloned values: 624, Cloned duty templates: 0.`
