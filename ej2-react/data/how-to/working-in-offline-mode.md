---
layout: post
title: React DataManager - Working in Offline Mode | Syncfusion
description: Use offline mode in Syncfusion React DataManager to load data once and process queries client-side.
platform: ej2-react
control: Working in offline mode in React DataManager 
documentation: ug
domainurl: ##DomainURL##
---

# Offline mode with React DataManager

In React applications, remote data binding with DataManager typically sends a request to the server each time the `executeQuery` method is invoked. This repeated communication can increase latency and place additional load on the server.

To improve efficiency, DataManager provides an offline property. When enabled, all data is loaded during initialization, and subsequent query processing is handled on the client side. This eliminates unnecessary server calls, resulting in faster response times and reduced server overhead.

To enable offline mode in DataManager, set the `offline` property to `true` during initialization. This is demonstrated in the below code example.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs11/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs11/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="orders.tsx" %}
{% include code-snippet/data/get-started-cs11/app/orders.tsx %}
{% endhighlight %}
{% highlight js tabtitle="rowtemplate.jsx" %}
{% include code-snippet/data/get-started-cs11/app/rowTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="rowtemplate.tsx" %}
{% include code-snippet/data/get-started-cs11/app/rowTemplate.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/get-started-cs11" %}

> The loaded data will be cached in the **json** property of `DataManager`.

## When to use Offline mode

Offline mode is most effective when:

- The dataset is moderately sized and can be loaded during initialization.
- Data does not change frequently, reducing the risk of stale results.
- Client-side query processing provides a performance advantage.

## When to avoid Offline mode

Offline mode should be avoided in scenarios such as:

- Large datasets: Loading all records at once may cause performance issues in the browser.
- Frequently changing data: Cached data may become outdated quickly.
- Real-time requirements: Applications that depend on live or streaming data need server-side queries.
- Sensitive data: Storing all records on the client side may expose information unnecessarily.
