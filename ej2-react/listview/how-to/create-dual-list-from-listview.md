---
layout: post
title: Create dual list from React ListView component  | Syncfusion
description: Learn here all about Create dual list from ListView in Syncfusion React ListView component of Syncfusion Essential JS 2 and more.
control: Create dual list from ListView 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Create Dual List from ListView in React ListView Component

The dual list contains two ListView components. This allows you to move list items from one list to another using client-side events. This section explains how to integrate the ListView component to achieve a dual list.

## Use cases

* Stock exchanges of two different countries
* Job applications (skill sets)

## Integration of Dual List

Here, two ListView components have been used to display the list items. An EJ2 Button is used to transfer data between the ListViews, and a textbox is used to achieve the UI of filtering support.

The dual list supports:

* Moving whole data from one list to another.
* Moving selected data from one list to another.
* Filtering the list by using a client-side typed character.

In the ListView component, sorting is enabled using the [`sortOrder`](https://ej2.syncfusion.com/react/documentation/api/list-view/#sortorder) property, and the [`select`](https://ej2.syncfusion.com/react/documentation/api/list-view/#select) event is triggered while selecting an item. Here, the select event is triggered to enable and disable button states.

## Manipulating data

### Moving whole data from the first list to the second list(>>)

The entire data set can be moved from the first ListView to the second by clicking the first button. When clicking the button, all list items are sliced and connected with the second ListView. This button is enabled only when the data source of the first ListView is not empty.

### Moving whole data from the second list to the first list(<<)

The functionality of the second button is the same as above, but data is transferred from the second list to the first list. This button is enabled only when the data source of the second ListView is not empty.

### Moving selected item from one list to another list (>) and (<)

The [`select`](https://ej2.syncfusion.com/react/documentation/api/list-view/#select) event is triggered when selecting a list item in the ListView. The selected items can be transferred between two lists. These buttons will be enabled when selecting an item in lists.

### Filtering method

The filtering method is used to filter list items when typing a character in the text box. In this method, the [`DataManager`](https://ej2.syncfusion.com/react/documentation/data/getting-started/) has been used to fetch data from the data source and display in ListView.

### Sorting

List items can be sorted in the ListView component using the [`sortOrder`](https://ej2.syncfusion.com/react/documentation/api/list-view/#sortorder) property. You can enable sorting in one ListView; in the same order, data can be transferred to another ListView.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/dual-list-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/dual-list-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/listview/dual-list-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/listview/dual-list-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/dual-list-cs1" %}
