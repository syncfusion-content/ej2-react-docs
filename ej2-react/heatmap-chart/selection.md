---
layout: post
title: Selection in React Heatmap chart component | Syncfusion
description: Learn here all about Selection in Syncfusion React Heatmap chart component of Syncfusion Essential JS 2 and more.
control: Selection 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Selection in React Heatmap chart component

In the HeatMap, the cell selection is used to select the single or multiple heat map cells at runtime and get the selected cell details using the [cellSelected](https://ej2.syncfusion.com/react/documentation/api/heatmap/#cellselected) event. You can enable the cell selection using the [allowSelection](https://ej2.syncfusion.com/react/documentation/api/heatmap/#allowselection) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/heatmap/selection-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/heatmap/selection-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/selection-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/selection-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/selection-cs1" %}

## Enable single cell selection

In the HeatMap, the [enableMultiSelect](https://ej2.syncfusion.com/react/documentation/api/heatmap/#enablemultiselect) property is used to allow single cell selection. When you set the `enableMultiSelect` property to **false**, only one cell is selected. By default, `enableMultiSelect` property is set to **true**.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/heatmap/selection-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/heatmap/selection-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/selection-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/selection-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/selection-cs2" %}