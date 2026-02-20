---
layout: post
title: Drilldown in React Treemap component | Syncfusion
description: Learn here all about Drilldown in Syncfusion React Treemap component of Syncfusion Essential JS 2 and more.
control: Drilldown 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Drilldown in React Treemap component

The TreeMap supports drill-down to expose the hierarchy, achieved by clicking a node. If an item is clicked in the TreeMap, it will be moved to the next level or sub level hierarchy and returned back to the previous level by clicking the node.

## Perform drill-down action

The TreeMap items can be drilled by setting the [`enableDrillDown`](https://ej2.syncfusion.com/react/documentation/api/treemap#enabledrilldown) property to **true**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/code-path/drilldown-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/code-path/drilldown-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/drilldown-cs1" %}