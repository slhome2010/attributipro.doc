---
sidebar_position: 5
---

# Duty Template Management

## Creating a Duty Template

To create a [**Duty Template**](/general-info/duty.md):

1. Navigate to either:
   - _`Attributes`_ tab
   - _`Category Attributes`_ tab (if duty template node is enabled in tree settings)

2. Enter edit mode on the target duty template node using:
   - [Standard editing](/module-features/editing.md)
   - `Shift + Click` on the node
3. Input default values use [separators](/general-info/values-templates.md) for multiple entries

### Accessing Metadata

For **Duty Template Metadata** configuration:

- `Shift + Click` in edit mode
- `F2` key on selected node
- [Context menu](/module-features/context-menu.md) → "Form"

## Duty Template Metadata

Each Duty Template supports [**Metadata**](general-info/metadata.md) that serves as default values for:

- Attribute value metadata
- Template inheritance rules

| ![Duty Metadata Interface](/img/tutorial/en/v310/duty_form_en.png) |
| :----------------------------------------------------------------: |
|                  _Duty Template Metadata Editor_                   |

Field functions mirror those described in [Metadata Editing Guide](/module-features/metadata-editing.md).

---

## Deleting Duty Templates {#using-duty-del}

**Deletion Workflow**:

1. Select target on _`Attributes`_ tab
2. Execute via:
   - [Context menu](/module-features/context-menu.md)
   - `Del` key

⚠ **Important**:

- Affects only template and its metadata
- No product data modifications

---

## Cloning Duty Templates {#using-duty-clone}

Clone language-agnostic templates (e.g., `20°C - 40°C`, `2G/3G/4G`) across locales:

**Methods**:

1. [Context menu](/module-features/context-menu.md) → "Clone"
2. Keyboard shortcut: `Alt + C`

✅ Metadata clones simultaneously with template content

## AI Form Fill (Magic Button)

You can automatically fill in the metadata form fields using Artificial Intelligence. To do this, click the magic icon button (✨) at the top of the duty template form.

The AI will analyze the attribute group and the attribute itself, and then automatically generate for the **Duty Template**:

- A practical **Tooltip** explanation
- An appropriate icon from the **Font Awesome** set
- The most suitable **Unit of measurement** from those available in the system

:::note
For this feature to work, you must have an OpenAI API key configured in the module settings. The AI takes into account the currently selected editing language and returns the result in that language. The AI does not generate the template value itself, as it requires your specific input.
:::

## Implementation Demo

<iframe width="100%" height="515" src="https://www.youtube.com/embed/zdL9XxdNmyA" title="Duty Template Cloning Process" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
