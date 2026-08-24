---
layout: post
title: Localization in React Chart | Syncfusion
description: Learn how to localize Syncfusion React Chart by translating axis labels, tooltips, and legends into different languages for global audiences.
control: Localization
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Localization in React Chart

Use the `L10n` class from `@syncfusion/ej2-base` to translate the Chart's default text content. Static text used by chart features (for example, zoom toolbar labels) can be translated by providing a locale value and a translation object, and setting the `locale` property on the Chart to match the loaded culture. The keys listed below are exposed by the Chart resource file (typically `src/chart/locale.json`); supply a translated value for each key in your translation object.

> **Note:** The zoom toolbar must be enabled via `zoomSettings.toolbarItems` for the localized labels (Zoom, ZoomIn, ZoomOut, Reset, Pan, ResetZoom) to appear. Missing keys fall back to the default English text.

<!-- markdownlint-disable MD033 -->

<table>
<tr>
<td><b>Locale key</b></td>
<td><b>Default text</b></td>
</tr>
<tr>
<td>Zoom</td>
<td>Zoom</td>
</tr>
<tr>
<td>ZoomIn</td>
<td>Zoom In</td>
</tr>
<tr>
<td>ZoomOut</td>
<td>Zoom Out</td>
</tr>
<tr>
<td>Reset</td>
<td>Reset</td>
</tr>
<tr>
<td>Pan</td>
<td>Pan</td>
</tr>
<tr>
<td>ResetZoom</td>
<td>Reset Zoom</td>
</tr>
</table>

## Prerequisites

Install the base package that provides the `L10n` class:

```bash
npm install @syncfusion/ej2-base --save
```

## Loading the translation object

Use the `load` function of the `L10n` class to load a translation object into the application. The call must be made **before** the Chart renders, for example in the application's entry point or in a parent component above the Chart.

```ts
import { L10n } from '@syncfusion/ej2-base';

// Load translations for a specific culture.
// `path` can be a URL to a JSON file or an inline object passed as the second argument.
L10n.load({
    'fr-FR': {
        'chart': {
            Zoom: 'Zoom',
            ZoomIn: 'Zoom avant',
            ZoomOut: 'Zoom arrière',
            Reset: 'Réinitialiser',
            Pan: 'Déplacer',
            ResetZoom: 'Réinitialiser le zoom'
        }
    }
});
```

Then set the matching `locale` on the Chart component to apply the translations:

```ts
<ChartComponent id="charts" locale="fr-FR" ...>
```

> If a key is missing from the translation object, the Chart falls back to the default English text. For cultures other than `en-US`, also call `loadCldr` and `setCulture` as described in the [Internationalization](./internationalization) topic.

### Using pre-built locale files

Instead of authoring a translation object by hand, you can install the official locale package and load a ready-made JSON for many languages:

```bash
npm install @syncfusion/ej2-locale
```

```ts
import { L10n } from '@syncfusion/ej2-base';
import * as frLocale from '@syncfusion/ej2-locale/src/fr.json';

L10n.load({ 'fr-FR': frLocale });
```

Additional pre-built locale JSON files are available in the [ej2-locale GitHub repository](https://github.com/syncfusion/ej2-locale).

For more information about localization, see the localization guide:  [`localization`](https://ej2.syncfusion.com/react/documentation/common/globalization/localization)

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/getting-started/localization-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/getting-started/localization-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/getting-started/localization-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/getting-started/localization-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/getting-started/localization-cs1" %}