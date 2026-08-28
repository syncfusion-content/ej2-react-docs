---
layout: post
title: Get Total Count for Remote Data in React Dropdown List | Syncfusion
description: Get the total item count from a remote data source via the actionComplete event before render, or getItems method after render.
control: Remote data bind
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to get total count for remote data in React Dropdown List

Before component rendering, retrieve the total items count using the [`actionComplete`](https://ej2.syncfusion.com/react/documentation/api/drop-down-list#actioncomplete) &nbsp;event and its result arguments.

After rendering the component, retrieve the total items count using the [`getItems`](https://ej2.syncfusion.com/react/documentation/api/drop-down-list#getitems) method.

The following example demonstrates how to retrieve the total items count:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/remotedata-howto-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/remotedata-howto-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/remotedata-howto-cs1" %}