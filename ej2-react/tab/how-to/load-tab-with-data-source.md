---
layout: post
title: How to load Tab from a data source in React | Syncfusion
description: Populate the Syncfusion React Tab from a data source by binding each record's header and content fields to TabItemDirective items.
control: Load tab with data source 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to load Tab from a data source in React

You can bind any data object to Tab items by mapping its fields to the [`header`](https://ej2.syncfusion.com/react/documentation/api/tab/tabItem#header) and [`content`](https://ej2.syncfusion.com/react/documentation/api/tab/tabItem#content) properties.

In the following demo, data is fetched from an `OData` service using `DataManager`. The result is formatted as a JSON array of objects with `header` and `content` fields, which is set as the [`items`](https://ej2.syncfusion.com/react/documentation/api/tab#items) collection of the Tab.

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
