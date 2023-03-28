---
layout: post
title: Searching in React Treegrid component | Syncfusion
description: Learn here all about Searching in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Searching 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Searching in React Treegrid component

You can search records in a TreeGrid, by using the [`search`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#search) method with search key as a parameter. This also provides an option to integrate search text box in treegrid's toolbar by adding *search* item to the [`toolbar`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#toolbar).

To search records, inject the **Filter** module in the grid.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/searching-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/searching-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/searching-cs1" %}

## Initial search

To apply search at initial rendering, set the [`fields`](https://ej2.syncfusion.com/react/documentation/api/treegrid/searchSettings/#fields), **operator**, [`key`](https://ej2.syncfusion.com/react/documentation/api/treegrid/searchSettings/#key), and [`ignoreCase`](https://ej2.syncfusion.com/react/documentation/api/treegrid/searchSettings/#ignorecase) in the [`searchSettings`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#searchsettings).

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/searching-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/searching-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/searching-cs2" %}

> By default, treegrid searches all the bound column values. To customize this behavior define the [`searchSettings.fields`](https://ej2.syncfusion.com/react/documentation/api/treegrid/searchSettingsModel/#fields) property.

## Search operators

The search operator can be defined in the [`searchSettings.operator`](https://ej2.syncfusion.com/react/documentation/api/treegrid/searchSettingsModel/#operator) property to configure specific searching.

The following operators are supported in searching:

Operator |Description
-----|-----
startsWith |Checks whether a value begins with the specified value.
endsWith |Checks whether a value ends with the specified value.
contains |Checks whether a value contains the specified value.
equal |Checks whether a value is equal to the specified value.
notEqual |Checks for values not equal to the specified value.

> By default, the [`searchSettings.operator`](https://ej2.syncfusion.com/react/documentation/api/treegrid/searchSettingsModel/#operator) value is *contains*.

## Search by external button

To search treegrid records from an external button, invoke the [`search`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#search) method.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/searching-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/searching-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/searching-cs3" %}}

## Search Specific Columns

By default, treegrid searches all visible columns. You can search specific columns by defining the specific column's field names in the [`searchSettings.fields`](https://ej2.syncfusion.com/react/documentation/api/treegrid/searchSettingsModel/#fields) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/searching-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/searching-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/searching-cs4" %}

> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.