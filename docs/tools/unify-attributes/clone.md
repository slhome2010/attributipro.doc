---
sidebar_position: 12
---

# Language Cloning

This unification tool can be useful when adding a new language.

You can clone **Groups**, **Attributes**, or **Values** separately.

- **`Insert` mode** — useful if some attributes have already been translated, but certain database entries are missing entirely. Missing records will be inserted and filled with data from the source language. Existing records will remain unchanged, even if they contain empty fields.
- **`Overwrite` mode** — missing records will be inserted and filled with data from the source language. Existing records will be overwritten.
- **`Overwrite only empty` mode** — protects filled fields, but requires additional database queries, making it a heavier operation. On large stores, this may lead to timeouts or system freezes.

**Duty Templates** are cloned together with attributes. You only need to check the "Duty" box if you specifically want to clone **Duty Templates** separately. The optimal mode is `Overwrite only empty`.

| ![Clone](/img/tutorial/clone.png) |
|:--:|
| *Clone attributes between languages* |

Once the task is complete, a confirmation message should appear:

> ✅ Success! Operation completed. Cloned groups: 0, Cloned attributes: 20, Cloned values: 624, Cloned duty templates: 0.
