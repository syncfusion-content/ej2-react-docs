---
layout: post
title: Configure minimum width in React Pivot Table component | Syncfusion
description: Learn how to configure the minimum width in the Syncfusion React Pivot Table component of Syncfusion Essential JS 2 and more.
control: Configuring the minimum width in the Pivot Table component
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Configuring the minimum width in the React Pivot Table component

The React Pivot Table component provides the `minWidth` property to define the minimum width threshold for the component. This configuration ensures the pivot table maintains optimal usability and prevents layout issues when the container size decreases below the specified minimum width value.

## Default minimum width behavior

The pivot table automatically sets appropriate default minimum width values based on its current configuration:

| Configuration | Default Minimum Width | Purpose |
|---------------|----------------------|---------|
| With [Grouping Bar](../grouping-bar) enabled | 400 pixels | Accommodates grouping bar UI elements and drag-drop functionality |
| Without [Grouping Bar](../grouping-bar) | 310 pixels | Provides sufficient space for basic pivot table operations |

## Setting custom minimum width

To customize the minimum width according to specific layout requirements, configure the `minWidth` property with the desired pixel value:

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