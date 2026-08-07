---
layout: post
title: Working With Data in React Smithchart | Syncfusion
description: Bind resistance and reactance data to the React Smithchart using local JSON arrays as points or as a series data source.
control: Working with data 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Working With Data in React Smithchart

The Smith chart can visualize the data bound from local data. The data bound for the Smith chart should be an array of object and should contain the field resistance and rectangle. This data should be bound to points or data source in the Smith chart.

## Data Binding

You can bind simple JSON data to Smith chart using the point property in series. The JSON data should contain [`resistance`] and [`reactance`] fields. This JSON data should be bound to points or data source in the Smith chart. You can add any number of JSON or data source to points.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/smithchart/code-path/getting-started-cs30/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/smithchart/code-path/getting-started-cs30/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs30" %}