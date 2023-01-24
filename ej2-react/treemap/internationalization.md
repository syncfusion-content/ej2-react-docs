---
layout: post
title: Internationalization in React Treemap component | Syncfusion
description: Learn here all about Internationalization in Syncfusion React Treemap component of Syncfusion Essential JS 2 and more.
control: Internationalization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Internationalization in React Treemap component

The TreeMap control supports internationalization for the following elements:

* Data label
* Tooltip

For more information about number and date formatter, refer to [`internationalization`](http://ej2.syncfusion.com/documentation/base/intl.html).

<!-- markdownlint-disable MD036 -->

## Globalization

Globalization is the process of designing and developing a component that works in different cultures/locales. Internationalization library is used to globalize number, date, and time values in the TreeMap control using the [`format`](https://ej2.syncfusion.com/react/documentation/api/treemap/#format) property in the TreeMap.

**Numeric format**

In the following code example, tooltip is globalized to Deutsch culture.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/internationalization-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/internationalization-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/internationalization-cs1" %}