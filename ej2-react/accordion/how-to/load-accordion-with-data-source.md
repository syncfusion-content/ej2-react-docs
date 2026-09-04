---
layout: post
title: How to bind data to Accordion in React Accordion | Syncfusion
description: Populate the Syncfusion React Accordion from a data source by mapping each record's fields to the `header` and `content` properties.
control: Load accordion with data source 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to bind data to Accordion in React Accordion

You can bind any data object to React Accordion items, by mapping it to [`header`](https://ej2.syncfusion.com/react/documentation/api/accordion/accordionItem#header) and [`content`](https://ej2.syncfusion.com/react/documentation/api/accordion/accordionItem#content) property.

In the below demo, Data is fetched from an `OData` service using `DataManager`. The result data is formatted as a JSON object with `header` and `content` fields, which is set to items property of React Accordion.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/accordion/accordion-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/accordion/accordion-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/accordion-cs6" %}
