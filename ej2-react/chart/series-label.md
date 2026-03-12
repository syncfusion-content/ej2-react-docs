---
layout: post
title: Series label in React Chart component | Syncfusion
description: Learn here all about Series label in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Series label 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Series label in React Chart component

The series label displays the name of each series inline, positioned near the end of the series path or the last visible data point. This helps identify each series without referring to the legend.

## Overview

Enable series labels using the [`labelSettings`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#labelsettings) property within the series configuration. Set the [`visible`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesLabelSettingsModel#visible) property to **true** to display the label.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/series-label/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/series-label/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/series-label/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/series-label/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/series-label" %}

> Note: To use the series label feature, inject the `SeriesLabel` module into the `services`.

## Customization

Customize the appearance of series labels using the following properties:

* [`text`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesLabelSettingsModel#text) – Custom text for the label. Defaults to the series name.
* [`font`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesLabelSettingsModel#font) – Font customization options including color, size, family, and weight.
* [`background`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesLabelSettingsModel#background) – Background color of the label.
* [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesLabelSettingsModel#border) – Border width and color.
* [`opacity`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesLabelSettingsModel#opacity) – Label transparency (default: 1).
* [`showOverlapText`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesLabelSettingsModel#showoverlaptext) – When **false**, overlapping labels are hidden.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/series-label-customization/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/series-label-customization/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/series-label-customization/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/series-label-customization/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/series-label-customization" %}
