---
layout: post
title: Grid data chart in React Chart component | Syncfusion
description: Learn here all about Grid data chart in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Grid data chart 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Grid data chart in React Chart component

You can visualize the data that returned by grid in chart.

To visualize the data in chart, follow the given steps:

**Step 1**:

Initialize the grid with datasource.

**Step 2**:

By using the grid’s `actionComplete` event and `getCurrentViewRecords` method, you can get the current page records.
By using the grid’s `databound` event, you can update the current page records into the chart’s datasource and visualize the grid data in chart.

{% tabs %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/grid-visual-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/grid-visual-cs2/app/datasource.ts %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/grid-visual-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/grid-visual-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/grid-visual-cs2" %}