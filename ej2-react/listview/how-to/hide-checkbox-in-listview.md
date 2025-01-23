---
layout: post
title: Hide checkbox in React ListView component | Syncfusion
description: Learn here all about Hide checkbox in Syncfusion React ListView component of Syncfusion Essential JS 2 and more.
control: Hide checkbox in ListView 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Hiding checkboxes in React ListView component

The checkbox of any list item can be hidden by using [`htmlAttributes`](https://ej2.syncfusion.com/react/documentation/api/list-view/#htmlattributes) of the [`fields`](https://ej2.syncfusion.com/react/documentation/api/list-view/#fields) object. With the help of `htmlAttributes`, we can add a unique class to each list item that will be rendered from the data source. Using this CSS class, we can hide the checkbox of the list item.

In this sample, we have hidden multiple leaf nodes of a nested list. The `e-checkbox-hidden` class has been added in the data source where the checkbox needs to be hidden. Refer to the snippet below for a simple data source example:

```ts
    {
        'text': 'New York',
        'id': '3002',
        'category': 'USA',
        'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' }
    }
```

Even though we have hidden the checkbox, the functionality will remain the same for the list item, which might affect the [`getSelectedItems`](https://ej2.syncfusion.com/react/documentation/api/list-view/#getselecteditems) method's result. To counteract that, we will follow a certain logic in the `select` event. The logic here is to remove the `e-active` class from the other checkbox hidden list items which will be added when we select an item, and retain `e-active` on the currently selected item.

> In this process, we will exclude the list items with visible checkboxes and only consider the items with hidden checkboxes.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/hide-checkbox-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/hide-checkbox-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/listview/hide-checkbox-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/listview/hide-checkbox-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/hide-checkbox-cs1" %}
