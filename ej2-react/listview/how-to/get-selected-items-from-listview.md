---
layout: post
title: Get selected items from ListView in React Component | Syncfusion
description: Learn here all about get selected items from listview in Syncfusion Essential React Listview component, its elements and more.
control: Get selected items from listview 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Get selected items from ListView in React Component

Single or many items can be selected by users in the ListView component. An API is used to get selected items from the
list items. This is called as the
[`getSelectedItems`](https://ej2.syncfusion.com/react/documentation/api/list-view/#getselecteditems)
method.

## `getSelectedItems` method

This is used to get the details of the currently selected item from the list items. It returns the
[`SelectedItem`](https://ej2.syncfusion.com/react/documentation/api/list-view/selectedItem/) |
[`SelectedCollection`](https://ej2.syncfusion.com/react/documentation/api/list-view/selectedCollection/)

The `getSelectedItems` method returns the following items from the selected list items.

| Return type | Purpose |
|------------|-------------------|
| text | Returns the text of selected item lists |
| data | Returns the whole data of selected list items, i.e., returns the fields data of selected li.|
| item | Returns the collections of list items |

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/selected-item-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/selected-item-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/selected-item-cs1" %}
