---
layout: post
title: Remote data bind in React Drop down list component | Syncfusion
description: Learn here all about Remote data bind in Syncfusion React Drop down list component of Syncfusion Essential JS 2 and more.
control: Remote data bind 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Remote data bind in React Drop down list component

Before component rendering, retrieve the total items count using the [`actionComplete`](https://ej2.syncfusion.com/react/documentation/api/drop-down-list/#actioncomplete) &nbsp;event and its result arguments.

After rendering the component, retrieve the total items count using the [`getItems`](https://ej2.syncfusion.com/react/documentation/api/drop-down-list/#getitems) method.

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