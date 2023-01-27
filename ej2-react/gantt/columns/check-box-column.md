---
layout: post
title: Check box column in React Gantt component | Syncfusion
description: Learn here all about Check box column in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Check box column 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Check box column in React Gantt component

To render boolean values as checkbox in columns, you need to set [`displayAsCheckBox`](https://ej2.syncfusion.com/react/documentation/api/gantt/column/#displayascheckbox) property as **true**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/checkbox-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/checkbox-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/checkbox-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/checkbox-cs1" %}

## Controlling Grid Actions

You can enable or disable gantt action for a particular column by setting the [`allowFiltering`](https://ej2.syncfusion.com/react/documentation/api/gantt/#allowfiltering), [`allowSorting`](https://ej2.syncfusion.com/react/documentation/api/gantt/#allowsorting), [`allowReordering`](https://ej2.syncfusion.com/react/documentation/api/gantt/#allowreordering), and [`allowEditing`](https://ej2.syncfusion.com/react/documentation/api/gantt/#editsettings) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/grid-actions-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/grid-actions-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/grid-actions-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/grid-actions-cs1" %}

## Column type

Column type can be specified using the `columns.type` property. It specifies the type of data the column binds.

If the `format` is defined for a column, the column uses `type` to select the appropriate format option [number](../common/internationalization/#number-formatting) or [date](../common/internationalization/#manipulating-datetime).

Gantt column supports the following types:
* string
* number
* boolean
* date
* datetime

> If the `type` is not defined, it will be determined from the first record of the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/gantt/#datasource).
> In case if the first record of the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/gantt/#datasource) is null/blank value for a column then it is necessary to define the `type` for that column.