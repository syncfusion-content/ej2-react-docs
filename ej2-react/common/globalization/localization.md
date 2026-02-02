---
layout: post
title: Localization and Translation Support for React Components | Syncfusion
description: Learn how to localize and translate Syncfusion React components into different languages using the L10n library for multi-language UI support.
control: common
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Localization

The localization library enables translation of static UI text in Syncfusion React UI Components into different languages. This allows applications to display component text—such as button labels, tooltips, error messages, and placeholders—in languages other than English.

## Loading Translations

Use the `load` function from the `L10n` class in the `@syncfusion/ej2-base` module to load translation objects. This function accepts an object that defines translations for one or more languages.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/locale-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/locale-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/locale-cs1" %}

## Changing current locale

Invoke the `setCulture` function with the desired culture name to change the current locale for all Syncfusion React UI Components in the application.

```ts
import {L10n, setCulture} from '@syncfusion/ej2-base';
L10n.load({
    'fr-BE': {
       'grid': {
             'EmptyRecord': 'Aucun enregistrement à afficher.',
             'InvalidFilterMessage': 'Données de filtrage invalides.',
             'UnGroup': 'Cliquez ici pour dégrouper'
         }
     }
});
setCulture('fr-BE');
```

>Note: Call `L10n.load()` to register the locale text for the target culture before invoking `setCulture()`.

## Obtaining Translation Files

Syncfusion provides pre-built locale files for many commonly used languages.

### Using NPM Package

Install the locale package:

```bash
npm install @syncfusion/ej2-locale
```

Import and load a specific locale:

```typescript
import { L10n } from '@syncfusion/ej2-base';
import * as frLocale from '@syncfusion/ej2-locale/src/fr.json';

L10n.load({ 'fr-FR': frLocale });
```

### Downloading from GitHub

Pre-built locale files are available in the [ej2-locale repository](https://github.com/syncfusion/ej2-locale). Download the JSON file for the desired language and load it into the application.

## Dynamic Locale Switching

To switch locales dynamically at runtime, load the new translations and update the culture:

```typescript
import { L10n, setCulture } from '@syncfusion/ej2-base';

function switchToGerman() {
  // Load German translations
  L10n.load({
    'de-DE': {
      'grid': {
        'EmptyRecord': 'Keine Aufzeichnungen angezeigt.',
        'InvalidFilterMessage': 'Ungültige Filterdaten.'
      }
    }
  });
  
  // Set German culture
  setCulture('de-DE');
  
  // Components automatically adopt the new locale on next render
}
```

> When switching locales dynamically, most components update automatically on re-render. In React, triggering a state update is usually sufficient to reflect the changes.

### Performance Optimization

- Load only the translations required for the components used in the application.
- In single-page applications, load all necessary translations once during initialization.
- In multi-page applications, consider lazy-loading translations based on the active route.

## Troubleshooting

### Common Issues

**Issue: Translations not appearing**
- Confirm that `L10n.load()` is called before any components render.
- Verify that `setCulture()` uses the exact locale code present in the loaded translations.
- Ensure the component’s `locale` property (if explicitly set) matches the loaded culture.
- Check that required CLDR data is loaded for the target culture (see [Internationalization](./internationalization)).

**Issue: Missing translation keys**
- Check the browser console for warnings about missing keys.
- Compare the loaded translation object structure against the component’s documentation.
- Confirm that the translation object follows the expected hierarchy.

**Issue: Dates and numbers not formatting correctly**
- Ensure CLDR data is loaded for the target culture (refer to [Internationalization](./internationalization)).
- Verify that `setCulture()` uses the correct culture code.
- Confirm that `loadCldr()` includes the necessary data files (numbers, gregorian, timeZoneNames, etc.).

## See Also

- [Internationalization](./internationalization)
- [Right-to-Left Support](./right-to-left)
- [Globalization Overview](./globalization)
- [ej2-locale GitHub Repository](https://github.com/syncfusion/ej2-locale)