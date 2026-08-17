---
layout: post
title: Internationalization in React Chart | Syncfusion
description: Learn how to localize Syncfusion React Chart for global users with right-to-left layouts, locale-specific number formats, and culture data.
control: Internationalization
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Internationalization in React Chart

Chart provides support for internationalization for the following elements:

- Data label
- Axis label
- Tooltip

For more information about number and date formatting, see the internationalization guide: [`internationalization`](https://ej2.syncfusion.com/react/documentation/common/internationalization).

> Note: The `en-US` locale and `USD` currency code are set as defaults. To use another culture, call `loadCldr` (and optionally `setCulture`) before the Chart renders. The currency used by the `'c'` format is set via [`setCurrencyCode`](https://ej2.syncfusion.com/react/documentation/api/base/internationalization#setcurrencycode).

## Globalization

Globalization is the process of designing and developing a component that works in different cultures/locales. Use the internationalization library to localize numbers, dates, and times in the Chart component — for example, by using the axis `labelFormat` property. You must call `setCurrencyCode` (and `loadCldr` for non `en-US` cultures) before the Chart mounts.

## Numeric Format

The example below globalizes axis, point, and tooltip labels to the EUR currency format. To use a culture other than `en-US`, install [`@syncfusion/ej2-cldr-data`](https://www.npmjs.com/package/@syncfusion/ej2-cldr-data) and call `loadCldr` with the required JSON data before the Chart renders.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/double-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/double-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/double-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/double-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/double-cs2" %}