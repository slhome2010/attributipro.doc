---
sidebar_position: 5
---

# Duty Template Management

## Creating a Duty Template

To create a [**Duty Template**](/general-info/duty.md):

1. Navigate to either:

   - *`Attributes`* tab  
   - *`Category Attributes`* tab (if duty template node is enabled in tree settings)  
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

| ![Duty Metadata Interface](/img/tutorial/form_duty.png) |  
|:--:|  
| *Duty Template Metadata Editor* |  

Field functions mirror those described in [Metadata Editing Guide](/module-features/metadata-editing.md).  

---  

## Deleting Duty Templates {#using-duty-del}  

**Deletion Workflow**:

1. Select target on *`Attributes`* tab  
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

## Implementation Demo  

<iframe width="100%" height="515" src="https://www.youtube.com/embed/zdL9XxdNmyA" title="Duty Template Cloning Process" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  