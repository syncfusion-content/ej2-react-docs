---
layout: post
title: React TreeGrid Footer Aggregate | Syncfusion
description: Learn how to configure and display footer aggregate values in React TreeGrid, including API usage, templates, and formatting options.
control: Footer aggregate
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Footer Aggregate in React TreeGrid 

Footer aggregate values are calculated across all rows and displayed in footer cells. Render footer aggregates using the [footerTemplate](https://ej2.syncfusion.com/react/documentation/api/treegrid/aggregateColumnModel#footertemplate) property.


{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/aggregate-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/aggregate-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/treegrid/aggregate-cs3" %}

> Access aggregate values inside the template using their corresponding [type](https://ej2.syncfusion.com/react/documentation/api/treegrid/aggregateColumnModel#type) name.

## How to format aggregate value

Format the aggregate result using the [format](https://ej2.syncfusion.com/react/documentation/api/treegrid/aggregateColumnModel#format) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/aggregate-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/aggregate-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/treegrid/aggregate-cs4" %}