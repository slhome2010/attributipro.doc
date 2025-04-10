---
sidebar_position: 5
---

# Metadata

This concept is widely used in technical documentation to denote additional information that describes the main data (in this case - attributes and their values), including images, icons, descriptions, and units of measurement.

:::info
Metadata is an integral part of the main data and is considered in all operations with the main data.
For example, when an attribute is deleted, its metadata is also deleted.
When merging attributes, their metadata is combined according to specific rules.
:::

## Attribute Metadata

Attribute metadata is stored in two DB tables: `attribute_pro` and `attribute_description_pro`.

These include:

- Description;
- Image;
- Icon;
- Units of measurement;
- Status (not currently used).

## Value Metadata

Attribute value metadata is stored in the `product_attribute_pro` DB table.

These include:

- Description;
- Image;
- Icon;
- Units of measurement;
- Interlinking reference;
- Status (not currently used).

## Duty Template Metadata

Duty Template metadata is stored in the `attribute_description_pro` DB table.

These include:

- Description;
- Image;
- Icon;
- Units of measurement;
- Status (not currently used).

## Purpose of Metadata

### Description

This is text for a tooltip.

Depending on the settings and ownership, the tooltip appears when hovering over an **Attribute** or **Value**.

The tooltip can contain an image and HTML formatting.

### Image and Icon

An image or icon is displayed next to the **Attribute** or **Value** depending on the settings.

The image is uploaded by the store software.

The icon is manually entered, for example: `fa fa-thermometer-half`.

### Units of Measurement

Units of measurement are stored in the DB tables `oc_unit` and `oc_unit_description`. They are described [separately](general-info/units.md).

Only a reference to the record in these tables is stored in the metadata.

### Interlinking Reference

This is a link to a filter landing page or any page for interlinking.

The link can only be associated with **Values**.

The link can be automatically generated based on rules that are fixed in a profile. Profiles are stored in the `attribute_interlink` table.

## Localizable and Non-localizable Metadata

Metadata can be divided into two groups:

_Localizable_ metadata: data that depends on the language.

- Description.

_Non-localizable_ metadata: data that remains unchanged regardless of language.

- Image;
- Icon;
- Units of measurement;
- Interlinking reference;
- Status.

This division clearly reflects which data requires translation for multilingual sites and which can be used without changes.
