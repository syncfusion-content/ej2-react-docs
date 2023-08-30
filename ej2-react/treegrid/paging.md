---
layout: post
title: Paging in React Treegrid component | Syncfusion
description: Learn here all about Paging in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Paging 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Paging in React Treegrid component

Paging provides an option to display TreeGrid data in page segments. To enable paging, set the [`allowPaging`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#allowpaging) to **true**. When paging is enabled, pager component renders at the bottom of the treegrid. Paging options can be configured through the [`pageSettings`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#pagesettings).

To use Paging, inject **Page** module in TreeGrid.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/paging-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/paging-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/paging-cs2" %}

> You can achieve better performance by using treegrid paging to fetch only a pre-defined number of records from the data source.

## Page Size Mode

Two behaviors are available in TreeGrid paging to display certain number of records in a current page. Following are the two types of [`pageSizeMode`](https://ej2.syncfusion.com/react/documentation/api/treegrid/pageSettingsModel/#pagesizemode).

* **All** : This is the default mode. The number of records in a page is based on [`pageSize`](https://ej2.syncfusion.com/react/documentation/api/treegrid/pageSettingsModel/#pagesize) property.
* **Root** : The number of root nodes or the 0th level records to be displayed per page is based on [`pageSize`](https://ej2.syncfusion.com/react/documentation/api/treegrid/pageSettingsModel/#pagesize) property.

With [`pageSizeMode`](https://ej2.syncfusion.com/react/documentation/api/treegrid/pageSettingsModel/#pagesizemode) property as **Root** only the root level or the 0th level records are considered in records count.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/paging-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/paging-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/paging-cs3" %}

## Template

You can use custom elements inside the pager instead of default elements. The custom elements can be defined by using the [`template`](https://ej2.syncfusion.com/react/documentation/api/treegrid/pageSettingsModel/#template) property. Inside this template, you can access the [`currentPage`](https://ej2.syncfusion.com/react/documentation/api/treegrid/pageSettingsModel/#currentpage), [`pageSize`](https://ej2.syncfusion.com/react/documentation/api/treegrid/pageSettingsModel/#pagesize), [`pageCount`](https://ej2.syncfusion.com/react/documentation/api/treegrid/pageSettingsModel/#pagecount), **totalPage** and **totalRecordCount** values.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/paging-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/paging-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/paging-cs4" %}

## Pager with Page Size Dropdown

The pager Dropdown allows you to change the number of records in the TreeGrid dynamically. It can be enabled by defining the [`pageSettings.pageSizes`](https://ej2.syncfusion.com/react/documentation/api/treegrid/pageSettingsModel/#pagesizes) property as **true**.

```ts
    const pageSettings: PageSettingsModel = { pageSize: 7, pageSizes: true };
```

![Page size dropdown](images/pagesizes.png)

## How to render Pager at the Top of the TreeGrid

By default, Pager will be rendered at the bottom of the TreeGrid. You can also render the Pager at the top of the TreeGrid by using the [`dataBound`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#databound) event.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/paging-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/paging-cs5/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/paging-cs5" %}

> During the paging action, the pager component triggers the below three events.
> * The [`created`](https://ej2.syncfusion.com/react/documentation/api/pager/#created) event triggers when Pager is created.
> * The [`click`](https://ej2.syncfusion.com/react/documentation/api/pager/#click) event triggers when the numeric items in the pager is clicked.
> * The [`dropDownChanged`](https://ej2.syncfusion.com/react/documentation/api/pager/#dropdownchanged) event triggers when pageSize DropDownList value is selected.
> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.
