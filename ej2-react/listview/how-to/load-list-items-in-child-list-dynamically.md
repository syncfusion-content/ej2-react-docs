---
layout: post
title: Loading of child list items in React ListView Component | Syncfusion
description: Learn here all about Load list items in child list dynamically in Syncfusion React Listview component of Syncfusion Essential JS 2 and more.
control: Load list items in child list dynamically 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Load list items in child list dynamically in React Listview component

To load list items in child list dynamically, push the new list item data into the existing [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/list-view/#datasource) using the [`select`](https://ej2.syncfusion.com/react/documentation/api/list-view/#select) event.

Refer to the following steps to load list item into the child list:

1. Initially, render the ListView with the required data source.

2. Bind the [`select`](https://ej2.syncfusion.com/react/documentation/api/list-view/#select) event that triggers selecting list item in the ListView component. By using the select event, you can push the new list item to the child list of the data source on specifying its item index. Item index can be obtained from the [`SelectEventArgs`](https://ej2.syncfusion.com/react/documentation/api/list-view/selectEventArgs/) of the select event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/load-child-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/load-child-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/load-child-cs1" %}
