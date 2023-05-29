---
layout: post
title: Searching in React Gantt component | Syncfusion
description: Learn here all about Searching in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Searching 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Searching in React Gantt component

You can search for records in the Gantt component by using the [`search`](https://ej2.syncfusion.com/react/documentation/api/gantt/#search) method with search key as a parameter. The Gantt component provides an option to integrate the search text box in the toolbar by adding the search item to the [`toolbar`](https://ej2.syncfusion.com/react/documentation/api/gantt/#toolbar) property.

To search records, inject the `Filter` module into the Gantt component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/searching-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/searching-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/searching-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/searching-cs1" %}

## Initial search

In the Gantt component, you can load a task with some search criteria by using the [`searchSettings`](https://ej2.syncfusion.com/react/documentation/api/gantt/searchSettings/) property.
To apply a search at initial rendering, set the value for [`fields`](https://ej2.syncfusion.com/react/documentation/api/gantt/searchSettings/#fields), [`operator`](https://ej2.syncfusion.com/react/documentation/api/gantt/searchSettings/#operator), [`key`](https://ej2.syncfusion.com/react/documentation/api/gantt/searchSettings/#key), and [`ignoreCase`](https://ej2.syncfusion.com/react/documentation/api/gantt/searchSettings/#ignorecase) in the [`searchSettings`](https://ej2.syncfusion.com/react/documentation/api/gantt/searchSettings/) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/searching-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/searching-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/searching-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/searching-cs2" %}

> By default, Gantt searches all the bound column values. To customize this behavior, define the [`searchSettings.fields`](https://ej2.syncfusion.com/react/documentation/api/gantt/searchSettings/#fields) property.

## Search operators

The search operator can be defined in the [`searchSettings.operator`](https://ej2.syncfusion.com/react/documentation/api/gantt/searchSettings/#operator) property to configure specific searching.

The following operators are supported in searching:

Operator |Description
-----|-----
startsWith |Checks whether a value begins with the specified value.
endsWith |Checks whether a value ends with the specified value.
contains |Checks whether a value contains the specified value.
equal |Checks whether a value is equal to the specified value.
notEqual |Checks for the values that are not equal to the specified value.

> By default, the [`searchSettings.operator`](https://ej2.syncfusion.com/react/documentation/api/gantt/searchSettings/#operator) value is `contains`.

## Search by external button

To search the Gantt records from an external button, invoke the [`search`](https://ej2.syncfusion.com/react/documentation/api/gantt/#search) method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/searching-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/searching-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/searching-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/searching-cs3" %}

>Note: You should set the [`allowFiltering`](https://ej2.syncfusion.com/react/documentation/api/gantt/#allowfiltering) property to `true` for searching the content externally.

## Search specific columns

By default, the Gantt component searches all the columns. You can search specific columns by defining the specific column's field names in the [`searchSettings.fields`](https://ej2.syncfusion.com/react/documentation/api/gantt/searchSettings/#fields) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/searching-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/searching-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/searching-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/searching-cs4" %}

> In above sample, you can search only **TaskName** and **Duration** column values.

## Clear search by external button

You can set [`searchSettings.key`](https://ej2.syncfusion.com/react/documentation/api/gantt/searchSettings/#key) property as `empty` string, to clear the searched Gantt records from external button.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/searching-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/searching-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/searching-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/searching-cs5" %}