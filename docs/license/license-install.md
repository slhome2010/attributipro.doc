---
sidebar_position: 1
---

# License

## License Terms

The license applies to one domain and one test domain. It must be evident that the test domain is genuinely for testing purposes.

The license is not generated automatically, so after purchasing the module, you need to send a request confirming the domain names to the personal email address on the site where the module was purchased.

:::warning
If you change the domain name, since the license is _"tied"_ to the domain rather than the buyer, you will have to pay for a new license.🤷‍♂️
This is because I do not have a license server and cannot track which domain is active and which is not.
:::

## Installing the License

The obtained license key must be entered into the corresponding field on the *`Settings => General Settings`* tab, then apply the settings by clicking the [_Apply_](settings/button-group.md) button.

:::info
The license key is stored in the file:

```php
/system/license/attributico.key
```

:::

If the key file is missing, the domain names do not match, or the key is corrupted, the module will operate in [_free_](license/free-version.md) mode. In this case, the label **(free)** will appear next to the module name and version, for example:

**Attribut&pro v3.3.3 (free)**.
