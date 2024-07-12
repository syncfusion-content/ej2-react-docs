---
layout: post
title: Add edit and remove events in React Schedule component | Syncfusion
description: Learn here all about Add edit and remove events in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
control: Add edit and remove events 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Add edit and remove events in React Schedule component

CRUD actions can be manually performed on appointments using [`addEvent`](https://ej2.syncfusion.com/react/documentation/api/schedule#addevent), [`saveEvent`](https://ej2.syncfusion.com/react/documentation/api/schedule#saveevent) and [`deleteEvent`](https://ej2.syncfusion.com/react/documentation/api/schedule#deleteevent) methods as shown below.

## Normal event

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/app-crud-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/app-crud-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/app-crud-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/app-crud-cs6" %}

## Recurrence event

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/app-crud-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/app-crud-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/app-crud-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/app-crud-cs7" %}

> When a single occurrence of the recurrence appointment is edited, `recurrenceID` field will be added which holds the `id` value of its parent recurrence appointment. It is applicable only for the edited occurrence appointments. Therefore the collection passing to the `saveEvent` with action as **EditOccurrence** should have `RecurrenceID` field as shown above.