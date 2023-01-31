---
layout: post
title: Date format in React Datepicker component | Syncfusion
description: Learn here all about Date format in Syncfusion React Datepicker component of Syncfusion Essential JS 2 and more.
control: Date format 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Date format in React Datepicker component

Date format is a way of representing the date value in different string format in the textbox.

By default, the DatePicker's format is based on the culture. You can also set the own custom format by using the
[`format`](https://ej2.syncfusion.com/react/documentation/api/datepicker#format) property.

> Once the date format property has been defined it will be common to all the cultures.

To know more about the date format standards, refer to the [Internationalization Date Format](http://ej2.syncfusion.com/documentation/base/internationalization/) section.

The following example demonstrates the DatePicker with the custom format (`yyyy-MM-dd`).

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datepicker/default-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datepicker/default-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datepicker/default-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datepicker/default-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datepicker/default-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datepicker/default-cs4" %}
