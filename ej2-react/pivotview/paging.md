---
layout: post
title: Paging in React Pivotview component | Syncfusion
description: Learn here all about Paging in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
control: Paging 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Paging in React Pivotview component

Paging allows you to load large amounts of data that can be divided and displayed page by page in the pivot table. It can be enabled by setting the [`enablePaging`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#enablepaging) property to **true**. It can be configured at code-behind by using the [`pageSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#pagesettings) property, during initial rendering of the component. The properties required are:

* [`currentRowPage`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pageSettings/#currentrowpage): Allows user to set the current row page number to be displayed in the pivot table.
* [`currentColumnPage`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pageSettings/#currentcolumnpage): Allows user to set the current column page number to be displayed in the pivot table.
* [`rowPageSize`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pageSettings/#rowpagesize): Allows user to set the total number of records to be displayed on each page of the pivot table's row axis.
* [`columnPageSize`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pageSettings/#columnpagesize): Allows user to set the total number of records to be displayed on each page of the pivot table's column axis.

## Pager UI

When paging is enabled, a built-in pager UI appears at the bottom of the pivot table, allowing you to change the current page in the row and column axes by navigating to a desired page using the navigation buttons or an input text box, as well as change the page size via dropdown at runtime.

You can also change the position, visibility, compact view, and template of the row and column pagers by using the [`pagerSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#pagersettings).

> In order to see and use the pager UI, insert the `Pager` module into the pivot table using the `services` tag.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs201/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs201/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs201/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs201/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs201" %}

### Show pager UI at top or bottom

You can display the pager UI at top or bottom of the pivot table by using the [`position`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pagerSettings/#position) property. To show the pager UI at top of the pivot table, set the [`position`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pagerSettings/#position) property in [`pagerSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#pagersettings) to **Top**.

> By default, the pager UI appears at the bottom of the pivot table.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs202/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs202/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs202/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs202/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs202" %}

### Inverse pager

Toggles and displays row and column pager. To show the column pager on the left side of the pager UI, set the [`isInversed`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pagerSettings/#isinversed) property in [`pagerSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#pagersettings) to **true**.

> By default, the row pager is displayed on the left side of the pager UI, while the column pager is displayed on the right side.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs203/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs203/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs203/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs203/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs203" %}

### Compact view

By hiding all except the previous and next navigation buttons, the pager UI can be displayed with the absolute minimum of paging options. The compact view can be enabled by setting the [`enableCompactView`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pagerSettings/#enablecompactview) property in [`pagerSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#pagersettings) to **true**.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs204/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs204/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs204/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs204/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs204" %}

### Show or hide paging option

By using the [`showRowPager`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pagerSettings/#showrowpager) and [`showColumnPager`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pagerSettings/#showcolumnpager) properties in [`pagerSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#pagersettings), you can show or hide row and column pager separately in the pager UI.

In the following example, row pager has been disabled by setting the [`showRowPager`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pagerSettings/#showrowpager) property in [`pagerSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#pagersettings) to **false**.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs205/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs205/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs205/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs205/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs205" %}

### Show or hide page size

By using the [`showRowPageSize`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pagerSettings/#showrowpagesize) and [`showColumnPageSize`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pagerSettings/#showcolumnpagesize) properties in [`pagerSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#pagersettings), you can show or hide "Rows per page" and "Columns per page" dropdown menu. The dropdown menu contains a list of pre-defined or user-defined page sizes, which will be displayed in the "Rows per page" and "Columns per page" dropdowns, allowing you to change the page size for the row and column axes at runtime.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs206/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs206/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs206/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs206/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs206" %}

### Customize page size

By using the [`rowPageSizes`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pagerSettings/#rowpagesizes) and [`columnPageSizes`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pagerSettings/#columnpagesizes) properties in [`pagerSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#pagersettings), you can specify a set of desired page sizes, which will be displayed in the "Rows per page" and "Columns per page" dropdowns, allowing you to change the page size for the row and column axes at runtime.

> By default, the "Rows per page" dropdown have pre-defined page sizes of **10, 50, 100, and 200**, while the "Columns per page" dropdown have pre-defined page sizes of **5, 10, 20, 50, and 100**.

In the following example, the "Rows per page" dropdown is set with user-defined page sizes of **10, 20, 30, 40, and 50** and the "Columns per page" dropdown is set with user-defined page sizes of **5, 10, 15, 20, and 30**.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs207/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs207/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs207/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs207/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs207" %}

### Template

The [`template`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pagerSettings/#template) property allows to change the appearance of the pager UI by displaying user-defined HTML elements instead of built-in HTML elements.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/pagingTemplate-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/pagingTemplate-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/pagingTemplate-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/pagingTemplate-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/pagingTemplate-cs1" %}