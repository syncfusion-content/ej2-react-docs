---
layout: post
title: Date format in React Daterangepicker component | Syncfusion
description: Learn here all about Date format in Syncfusion React Daterangepicker component of Syncfusion Essential JS 2 and more.
control: Date format 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Date format in React Daterangepicker component

Date format is a way of representing the date value in different string format in the textbox.

By default, the DateRangePicker's format is based on the culture. You can also set the own custom format by using the
[`format`](https://ej2.syncfusion.com/react/documentation/api/daterangepicker/#format) property.

> Once the date format property has been defined it will be common to all the cultures.

To know more about the date format standards, refer to the [Internationalization Date Format](http://ej2.syncfusion.com/documentation/base/internationalization) section.

The following example demonstrates the DateRangePicker with the custom format (`yyyy-MM-dd`).

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/daterangepicker/default-cs23/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/daterangepicker/default-cs23/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/daterangepicker/default-cs23" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/daterangepicker/default-cs24/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/daterangepicker/default-cs24/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/daterangepicker/default-cs24" %}

## Input formats 

The [`inputFormats`](https://ej2.syncfusion.com/react/documentation/api/daterangepicker/) property in the DateRangePicker control allows users to enter dates in various formats, providing flexibility in date entry. This property accepts an array of predefined formats that the control recognizes, enabling users to input dates in different ways while ensuring they are parsed correctly.

When the user types the date in any of the specified input formats, it will be automatically converted to the display format after pressing Enter, the Tab key, or when the input loses focus. This enhances the user experience by allowing intuitive data entry through various custom input formats.

The following example demonstrates the DateRangePicker with multiple input formats.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/daterangepicker/default-cs25/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/daterangepicker/default-cs25/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/daterangepicker/default-cs25" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/daterangepicker/default-cs26/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/daterangepicker/default-cs26/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/daterangepicker/default-cs26" %}
