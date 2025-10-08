---
layout: post
title: Searching in React TreeGrid component | Syncfusion
description: Learn here all about Searching in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Searching 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Searching in React TreeGrid

Search records by calling the [search](https://ej2.syncfusion.com/react/documentation/api/treegrid/#search) method with a search key. A search text box can also be placed in the TreeGrid toolbar by adding the search item to the [toolbar](https://ej2.syncfusion.com/react/documentation/api/treegrid/#toolbar).

To enable searching, inject the **Filter**
 module into the TreeGrid.

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

Apply search on initial render by setting [fields](https://ej2.syncfusion.com/react/documentation/api/treegrid/searchSettings/#fields), `operator`, [key](https://ej2.syncfusion.com/react/documentation/api/treegrid/searchSettings/#key), and [ignoreCase](https://ej2.syncfusion.com/react/documentation/api/treegrid/searchSettings/#ignorecase) in [searchSettings](https://ej2.syncfusion.com/react/documentation/api/treegrid/#searchsettings).

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/searching-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/searching-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/searching-cs2" %}

> By default, searching targets all bound column values. To customize this behavior define the [searchSettings.fields](https://ej2.syncfusion.com/react/documentation/api/treegrid/searchSettingsModel/#fields) property.

## Search operators

Configure the operator in [searchSettings.operator](https://ej2.syncfusion.com/react/documentation/api/treegrid/searchSettingsModel/#operator) to control how matching is performed.

The following operators are supported in searching:

Operator | Description
-----|-----
startsWith | Checks whether a value begins with the specified value.
endsWith | Checks whether a value ends with the specified value.
contains | Checks whether a value contains the specified value.
equal | Checks whether a value is equal to the specified value.
notEqual | Checks for values not equal to the specified value.

> By default, the [searchSettings.operator](https://ej2.syncfusion.com/react/documentation/api/treegrid/searchSettingsModel/#operator) value is **contains**.

## Search by external button

Trigger a search from external UI by invoking the [search](https://ej2.syncfusion.com/react/documentation/api/treegrid/#search) method.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/searching-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/searching-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/searching-cs3" %}}

## Search specific columns

By default, searching targets all visible columns. To search specific columns, list their field names in [searchSettings.fields](https://ej2.syncfusion.com/react/documentation/api/treegrid/searchSettingsModel/#fields).

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/searching-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/searching-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/searching-cs4" %}

> Refer to the [React TreeGrid](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour for key capabilities. Explore the [React TreeGrid example](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.