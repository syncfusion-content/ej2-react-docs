---
layout: post
title: Add and remove list items in React ListView component | Syncfusion
description: Learn here all about Add and remove list items from ListView in Syncfusion React ListView component of Syncfusion Essential JS 2 and more.
control: Add and remove list items from ListView 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Add and remove list items from ListView in React ListView component

You can add or remove list items in the ListView component using the [`addItem`](https://ej2.syncfusion.com/react/documentation/api/list-view/#additem) and [`removeItem`](https://ej2.syncfusion.com/react/documentation/api/list-view/#removeitem) methods. Follow these steps to add or remove a list item:

* Render the ListView with a data source, and use the [`template`](https://ej2.syncfusion.com/react/documentation/api/list-view/#template) property to append a delete icon for each list item. Also, bind the click event for the delete icon using the [`actionComplete`](https://ej2.syncfusion.com/react/documentation/api/list-view/#actioncomplete) handler.

* Render the Add Item button and bind its click event. In the click event handler, pass data with a random id to the [`addItem`](https://ej2.syncfusion.com/react/documentation/api/list-view/#additem) method to add a new list item when the Add Item button is clicked.

* Bind the click handler to the delete icon created in step 1. Within the click event, remove the list item by passing the delete icon list item to [`removeItem`](https://ej2.syncfusion.com/react/documentation/api/list-view/#removeitem) method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/add-item-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/add-item-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/listview/add-item-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/listview/add-item-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/add-item-cs1" %}
