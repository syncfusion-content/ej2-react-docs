---
layout: post
title: How to customize cell elements in React Pivot Table | Syncfusion
description: Step-by-step example showing how to customize cell elements in the React Pivot Table using the cellTemplate property.
control: Pivot Table
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to customize cell elements in React Pivot Table

You can customize each cell in the Pivot Table by using the [`cellTemplate`](https://ej2.syncfusion.com/react/documentation/api/pivotview#celltemplate) property. The [`cellTemplate`](https://ej2.syncfusion.com/react/documentation/api/pivotview#celltemplate) option accepts either an HTML string or the ID of an HTML element. You can use this to append extra HTML and show custom content or styles for every cell.

## Implementation example

The following example demonstrates how to customize pivot table cells by displaying revenue trends with visual indicators. Each cell shows the actual value along with trend icons that represent performance direction.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs159/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs159/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs159" %}
