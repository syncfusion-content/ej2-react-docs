---
layout: post
title: ListView as grid layout in React ListView component | Syncfusion
description: Learn here all about Manipulate ListView as grid layout in Syncfusion React ListView component of Syncfusion Essential JS 2 and more.
control: Manipulate ListView as grid layout 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Manipulating ListView as a grid layout in React ListView component

In ListView, list items can be rendered in a grid layout with the following data manipulations:

* Add Item
* Remove Item
* Sort Items
* Filter Items

## Grid Layout

In this section, we will discuss the rendering of list items in a grid layout.

* Initialize and render ListView with a dataSource, which will initially render list items in a list layout.

* Now, add the following CSS to the list items. This will make list items render in a grid layout:

```css

#default-list .e-list-item {
        height: 100px;
        width: 100px;
        float: left;
}

```

In the sample below, we have rendered List items in a grid layout.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/grid-layout-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/grid-layout-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/listview/grid-layout-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/listview/grid-layout-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/grid-layout-cs1" %}

## Data manipulation

In this section, we will discuss ListView data manipulations.

### Add Item

We can add a list item using the [`addItem`](https://ej2.syncfusion.com/react/documentation/api/list-view/#additem) API. This will accept an array of data as an argument.

```ts

 listViewInstance.addItem([{text: 'Apricot', id: '32'}]);

```

In the below sample, you can add new fruit item by clicking add button which will open dialog box with fruit name and image URL text box. After entering the item details, click the add button. This will add your new fruit item.

### Remove item

We can remove a list item using [`removeItem`](https://ej2.syncfusion.com/react/documentation/api/list-view/#removeitem) API. This will accept fields with `id` or list item element as argument.

```ts

 listViewInstance.removeItem({id: '32'});

```

In the below sample, you can remove fruit by hovering the fruit item which will show delete button and click that delete button to delete that fruit from your list.

### Sort Items

ListView can be sorted either in Ascending or Descending order. To enable sorting in your ListView, set [`sortOrder`](https://ej2.syncfusion.com/react/documentation/api/list-view/#sortorder) as `Ascending` or `Descending`.

```ts

<ListViewComponent id='list' sortOrder= 'Ascending'></ListViewComponent>

```

We can also set sorting after component initialization.

```ts

listViewInstance.sortOrder = 'Ascending'

```

In the below sample, we have sorted fruits in `Ascending` order. To sort it in descending, click on sort order icon and vice versa.

### Filter Items

ListView data can be filtered with the help of [`dataManager`](https://ej2.syncfusion.com/react/documentation/data/getting-started/). After filtering the data, update ListView [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/list-view/#datasource) with filtered data.

```ts

let value = filterInput.value;  //input text box value
let filteredData = new DataManager(listdata).executeLocal(
        new Query().where("text", "startswith", value, true)
);

listViewInstance.dataSource = filteredData;

```

In the sample below, you can filter fruit items using the search text box. This will filter fruit items based on your input. Here we used [`startswith`](https://ej2.syncfusion.com/react/documentation/data/querying/#filter-operators) of input text to filter data in DataManager.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/manipulation-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/manipulation-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/listview/manipulation-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/listview/manipulation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/manipulation-cs1" %}
