---
layout: post
title: Configure minimum width in React Pivotview component | Syncfusion
description: Learn how to configure the minimum width in the Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
control: Configuring the minimum width in the Pivot Table component
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Configuring the minimum width in the React Pivotview component

The pivot table component allows you to configure its minimum width using the `minWidth` property. This property is useful for ensuring the component maintains a consistent layout and responsiveness across different screen sizes.

> When the pivot table has the [Grouping Bar](../grouping-bar) enabled, the `minWidth` property is set to **400** pixels by default to accommodate the grouping bar UI elements. Without the [Grouping Bar](../grouping-bar), the `minWidth` property defaults to **310** pixels.

To customize the minimum width, set the `minWidth` property to your desired value (in pixels) as shown below:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs329/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs329/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs329/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs329/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs329" %}