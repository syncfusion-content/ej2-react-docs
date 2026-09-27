---
layout: post
title: Perform CRUD Actions Dynamically in React Scheduler | Syncfusion
description: Learn how to add, edit, and remove events dynamically in the Syncfusion React Scheduler with simple example code.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Perform CRUD Actions Dynamically in React Scheduler

You can perform CRUD actions on appointments manually by using the [`addEvent`](https://ej2.syncfusion.com/react/documentation/api/schedule#addevent), [`saveEvent`](https://ej2.syncfusion.com/react/documentation/api/schedule#saveevent), and [`deleteEvent`](https://ej2.syncfusion.com/react/documentation/api/schedule#deleteevent) methods in the [React Scheduler](https://www.syncfusion.com/react-components/react-scheduler), as shown below.

## Normal events

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

## Recurring events

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

> **Note:** When a single occurrence of a recurring appointment is edited, the `RecurrenceID` field is added and holds the `Id` value of its parent recurring appointment. This applies only to the edited occurrence. Therefore, the collection passed to the `saveEvent` method with the action **EditOccurrence** must include the `RecurrenceID` field, as shown above.

## See also

* [CRUD actions in Scheduler](../crud-actions)
* [Recurring events](../recurrence-editor)
* [Scheduler events](../events)