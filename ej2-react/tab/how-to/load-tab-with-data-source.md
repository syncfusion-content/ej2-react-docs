---
layout: post
title: Load tab with data source in React Tab component | Syncfusion
description: Learn here all about Load tab with data source in Syncfusion React Tab component of Syncfusion Essential JS 2 and more.
control: Load tab with data source 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Load tab with data source in React Tab component

You can bind any data object to Tab items, by mapping it to a [`header`](https://ej2.syncfusion.com/react/documentation/api/tab/tabItem#header) and [`content`](https://ej2.syncfusion.com/react/documentation/api/tab/tabItem#content) property.

In the below demo, Data is fetched from an `OData` service using `DataManager`. The result data is formatted as a JSON object with `header` and `content` fields, which is set to [`items`](https://ej2.syncfusion.com/react/documentation/api/accordion#items) property of Tab.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tab/tab-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tab/tab-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tab-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/tab-cs4" %}
