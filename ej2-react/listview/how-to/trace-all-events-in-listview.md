---
layout: post
title: Trace all events in listview in React Listview component | Syncfusion
description: Learn here all about Trace all events in listview in Syncfusion React Listview component of Syncfusion Essential JS 2 and more.
control: Trace all events in listview 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Trace all events in listview in React Listview component

The ListView component triggers events based on its actions. The events can be used as extension points to perform custom operations. Refer to the following steps to trace the ListView events:

1. Render the ListView with
[dataSource](https://ej2.syncfusion.com/react/documentation/api/list-view/#datasource), and
bind the [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/list-view/#actionbegin),
[`actionComplete`](https://ej2.syncfusion.com/react/documentation/api/list-view/#actioncomplete),
and [`select`](https://ej2.syncfusion.com/react/documentation/api/list-view/#select) events.

2. Perform custom operations in `actionBegin`,`actionComplete`, and select events.

3. Provide event log details for `actionBegin` and `actionComplete` events, and they will be displayed in the event trace panel when the ListView action starts and the dataSource bound successfully.

4. Get the selected item details from the [`SelectEventArgs`](https://ej2.syncfusion.com/react/documentation/api/list-view/selectEventArgs/) in the select event, and display the selected list item text in the event trace panel while selecting list items.

5. Use clear button to remove event trace information.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/events-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/events-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/events-cs1" %}
