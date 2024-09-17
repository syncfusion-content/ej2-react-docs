---
layout: post
title: Add and remove list items in React ListView Component | Syncfusion
description: Learn here all about add and remove list items support in Syncfusion Essential React ListView component, it's elements and more.
control: Add and remove list items from listview 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Add and remove list items in React ListView Component

You can add or remove list items from the ListView component using the [`addItem`](https://ej2.syncfusion.com/react/documentation/api/list-view/#additem) and [`removeItem`](https://ej2.syncfusion.com/react/documentation/api/list-view/#removeitem) methods. Refer to the following steps to add or remove a list item.

* Render the ListView with data source, and use the
[template](https://ej2.syncfusion.com/react/documentation/api/list-view/#template) property to append the delete icon
for each list item. Also, bind the click event for the delete icon using the
[actionComplete](https://ej2.syncfusion.com/react/documentation/api/list-view/#actioncomplete) handler.

* Render the Add Item button, and bind the click event. On the click event handler, pass data with random id to
the [`addItem`](https://ej2.syncfusion.com/react/documentation/api/list-view/#additem) method to add a
new list item on clicking the Add Item button.

* Bind the click handler to the delete icon created in step 1. Within the click event, remove the list item by passing the
delete icon list item to
[`removeItem`](https://ej2.syncfusion.com/react/documentation/api/list-view/#removeitem) method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/add-item-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/add-item-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/add-item-cs1" %}
