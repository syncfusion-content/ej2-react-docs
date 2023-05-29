---
layout: post
title: Load accordion with data source in React Accordion component | Syncfusion
description: Learn here all about Load accordion with data source in Syncfusion React Accordion component of Syncfusion Essential JS 2 and more.
control: Load accordion with data source 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Load accordion with data source in React Accordion component

You can bind any data object to Accordion items, by mapping it to [`header`](https://ej2.syncfusion.com/react/documentation/api/accordion/accordionItem#header) and [`content`](https://ej2.syncfusion.com/react/documentation/api/accordion/accordionItem#content) property.

In the below demo, Data is fetched from an `OData` service using `DataManager`. The result data is formatted as a JSON object with `header` and `content` fields, which is set to items property of Accordion.

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
