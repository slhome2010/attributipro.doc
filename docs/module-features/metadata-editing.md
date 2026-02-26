---
sidebar_position: 4
---

# Attribute metadata

## Accessing Metadata Editor

Launch the metadata form using:

1. `Shift + Click` in single-line edit mode
2. `F2` key on selected node
3. [Context menu](/module-features/context-menu.md) → "Form"

Opens in modal window:

| ![Metadata Editing Interface](/img/tutorial/en/v306/attribute_form_306_en.png) |
| :----------------------------------------------------------------------------: |
|                          _Attribute Metadata Editor_                           |

## Filling out the Duty Template

### Value Input

1. Edit **Duty Template** value directly in text field
2. Use autocomplete (magnifier icon) to load existing product values
   - Filters dynamically as you type (e.g., "3" → "3.0", "3.2", "3200")

| ![Duty Template Autocomplete](/img/tutorial/en/form_duty_autocomplete_en.png) |
| :---------------------------------------------------------------------------: |
|                              _Value Suggestions_                              |

:::tip Advanced Metadata  
Configure template-specific metadata via [dedicated form](/module-features/duty-features.md)  
:::

## Editor Features

### WYSIWYG Editing

- Powered by **CKEditor** ([official docs](https://ckeditor.com/))
- Supports rich text formatting for tooltip descriptions

### Localization Handling

| Metadata Type   | Behavior                                   |
| :-------------- | :----------------------------------------- |
| **Localizable** | Language-specific (above separator line)   |
| **Global**      | Applies to all languages (below separator) |

**Clone Across Languages**:  
Enable `Apply to all languages` checkbox before saving

## Media Management

### Image Upload

1. Click **Image** button
2. Select file via OpenCart's file manager

### Icon Implementation

- Use **Font Awesome** [library](https://fontawesome.com/) classes without HTML wrappers
- Example: `fa fa-tablet` displays tablet icon

| ![Media Configuration](/img/tutorial/en/form_image_en.png) |
| :--------------------------------------------------------: |
|                     _Image/Icon Setup_                     |

## Status

Status is used to [manage visibility](/opencart-integration/manage_status.md) of an attribute or value.
