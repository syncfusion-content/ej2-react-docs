---
layout: post
title: Filter list items in React ListView component | Syncfusion
description: Learn here all about Filter list items in the ListView in Syncfusion React ListView component of Syncfusion Essential JS 2 and more.
control: Filter list items in the ListView 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Filter list items in the ListView in React ListView component

The filtered data can be displayed in the ListView component depending on user inputs using the [`DataManager`](https://ej2.syncfusion.com/react/documentation/data/getting-started/). Follow these steps to render the ListView with filtered data:

* Render a textbox to get input for filtering data.

* Render the ListView with [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/list-view/#datasource), and set the [`sortOrder`](https://ej2.syncfusion.com/react/documentation/api/list-view/#sortorder) property.

* Bind the `keyup` event to the textbox to perform filtering operation. To filter list data:
  1. Pass the list data source to the `DataManager`.
  2. Manipulate the data using the [`executeLocal`](https://ej2.syncfusion.com/documentation/api/data/dataManager/#executelocal) method.
  3. Update the filtered data as the ListView's dataSource.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/filter-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/filter-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/listview/filter-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/listview/filter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/filter-cs1" %}

> In this demo, data has been filtered by the starting character of the list items. You can also filter list items by their ending character by passing `endswith` in the [where](https://ej2.syncfusion.com/documentation/api/data/query/#where) clause instead of `startswith`.
