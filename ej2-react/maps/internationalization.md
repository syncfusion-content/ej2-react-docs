---
layout: post
title: Internationalization in React Maps component | Syncfusion
description: Learn here all about Internationalization in Syncfusion React Maps component of Syncfusion Essential JS 2 and more.
control: Internationalization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Internationalization in React Maps component

Maps provide support for internationalization for the below elements.

* Data label
* Tooltip

For more information about number and date formatter, refer to the [`internationalization`](http://ej2.syncfusion.com/documentation/base/intl.html) section.

<!-- markdownlint-disable MD036 -->

## Globalization

Globalization is the process of designing and developing a component that works in different
cultures/locales. Internationalization library is used to globalize number, date, time values in
Maps component using [`format`](https://ej2.syncfusion.com/react/documentation/api/maps/mapsModel/#format) property in the [`Maps`](https://ej2.syncfusion.com/react/documentation/api/maps/mapsModel).

## Numeric Format

The numeric formats such as currency, percentage and so on can be displayed in the tooltip and data labels of the Maps using the [`format`](https://ej2.syncfusion.com/react/documentation/api/maps/mapsModel/#format) property in the [`Maps`](https://ej2.syncfusion.com/react/documentation/api/maps/mapsModel). In the below example, the tooltip is globalized to **German** culture. When setting the [`useGroupingSeparator`](https://ej2.syncfusion.com/react/documentation/api/maps/mapsModel/#usegroupingseparator) property as **true**, the numeric text in the Maps separates with the comma separator.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs46/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs46/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs46" %}