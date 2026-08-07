---
layout: post
title: Drilldown in React TreeMap | Syncfusion
description: Learn how to enable drill-down in the Syncfusion React TreeMap to navigate hierarchical data by clicking items.
control: Drilldown 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Drilldown in React TreeMap

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