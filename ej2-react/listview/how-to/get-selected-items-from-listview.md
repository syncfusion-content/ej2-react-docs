---
layout: post
title: Get selected items from React ListView component | Syncfusion
description: Learn here all about Get selected items from ListView in Syncfusion React ListView component of Syncfusion Essential JS 2 and more.
control: Get selected items from ListView
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Get selected items from ListView in React ListView component

The ListView component allows users to select single or multiple items. It provides an API to retrieve the selected items from the list. This API is called the [`getSelectedItems`](https://ej2.syncfusion.com/react/documentation/api/list-view/#getselecteditems) method.

## `getSelectedItems` method

This method is used to retrieve details of the currently selected item(s) from the list. It returns an object of type [`SelectedItem`](https://ej2.syncfusion.com/react/documentation/api/list-view/selectedItem/) for single selection or [`SelectedCollection`](https://ej2.syncfusion.com/react/documentation/api/list-view/selectedCollection/) for multiple selections.

The [`getSelectedItems`](https://ej2.syncfusion.com/react/documentation/api/list-view/#getselecteditems) method returns the following information about the selected list items:

| Return type | Purpose |
|------------|-------------------|
| text | Returns the text content of selected list items |
| data | Returns the complete data of selected list items, including all fields of the selected `<li>` elements |
| item | Returns the collection of selected DOM list item elements |

The following example demonstrates how to use the `getSelectedItems` method to retrieve and display information about selected items:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/selected-item-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/selected-item-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/listview/selected-item-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/listview/selected-item-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/selected-item-cs1" %}
