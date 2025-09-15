---
layout: post
title: Customize number date and time values in React | Syncfusion
description: Learn here all about Customize number date and time values in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
control: Customize number date and time values 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize number, date, and time values in React Pivot Table component

You can format the number, date, and time values for each field using the [`formatSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#formatsettings) option under [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/). This configuration is applied during component initialization to ensure consistent data presentation across the pivot table.

## Number formatting

For numeric fields, the formatting settings include the following properties:

* [`name`](https://ej2.syncfusion.com/react/documentation/api/pivotview/formatSettingsModel/#name): Specifies the field name to which the formatting should be applied.
* [`format`](https://ej2.syncfusion.com/react/documentation/api/pivotview/formatSettingsModel/#format): Defines the number format pattern for the respective field (e.g., 'N2' for two decimal places, 'C' for currency).

> Also, you can customize the applied number format by setting the [`NumberFormatOptions`](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#manipulating-numbers) options in [`formatSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#formatsettings) itself.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs161/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs161/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs161/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs161/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs161" %}

## Date and Time formatting

For date and time fields, the formatting settings include these properties:

* [`name`](https://ej2.syncfusion.com/react/documentation/api/pivotview/formatSettingsModel/#name): Specifies the field name to which the formatting should be applied.
* [`format`](https://ej2.syncfusion.com/react/documentation/api/pivotview/formatSettingsModel/#format): Defines the date/time format pattern for the respective field (e.g., 'dd/MM/yyyy', 'MMM yyyy').
* [`type`](https://ej2.syncfusion.com/react/documentation/api/pivotview/formatSettingsModel/#type): Specifies the format type to be used for the respective field (Date, Time, or DateTime).

> Also, you can customize the applied date format by setting [`DateFormatOptions`](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#manipulating-datetime) options in [`formatSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#formatsettings) itself.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs162/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs162/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs162/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs162/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs162" %}

## Limitations of date formatting

According to Firefox and Edge browser standards, most date and time formats used in data sources are not supported. For example: Apr-2000, Apr-01-2000, 01-03-2000, 2000-Apr-01 and similar formats are not recognized. However, [`ISO formats`](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) are supported across all browsers for consistent date handling.