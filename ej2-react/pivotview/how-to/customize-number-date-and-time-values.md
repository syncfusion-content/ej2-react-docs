---
layout: post
title: Customize number date and time values in React | Syncfusion
description: Learn here all about Customize number date and time values in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
control: Customize number date and time values 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize number date and time values in React Pivotview component

You can format the number, date, and time values for each field using `formatSettings` option under `dataSourceSettings`. It can be configured through code behind, during initial rendering.

## Number formatting

For numbers, the formatting settings required to apply through code behind are:

* `name`: It allows to set the field name.
* `format`: It allows to set the format of the respective field.

> Also, you can customize the applied number format by setting the [`NumberFormatOptions`](https://ej2.syncfusion.com/documentation/common/intl.html?lang=typescript#manipulating-numbers) options in `formatSettings` itself.

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

For date and time, the formatting settings required to apply through code behind are:

* `name`: It allows to set the field name.
* `format`: It allows to set the format of the respective field.
* `type`: It allows to set the type of format to be used for the respective field.

> Also, you can customize the applied date format by setting [`DateFormatOptions`](https://ej2.syncfusion.com/documentation/common/intl.html?lang=typescript#manipulating-datetime) options in `formatSettings` itself.

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

As per Firefox and Edge browsers standards, most of the date and time formats used in data source aren’t supported. For example: Apr-2000, Apr-01-2000, 01-03-2000, 2000-Apr-01 etc... are not supported. Meanwhile [`ISO formats`](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) will be supported across all browsers.