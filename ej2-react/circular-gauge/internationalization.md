---
layout: post
title: Internationalization in React Circular gauge component | Syncfusion
description: Learn here all about Internationalization in Syncfusion React Circular gauge component of Syncfusion Essential JS 2 and more.
control: Internationalization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Internationalization in React Circular gauge component

Circular gauge provide supports for internationalization in `Axis label` and `Tooltip` elements.

For more information about number formatter you can refer [`internationalization`](http://ej2.syncfusion.com/documentation/base/intl.html).

<!-- markdownlint-disable MD036 -->
**Globalization**

Globalization is the process of designing and developing a component that works in different cultures/locales.
Internationalization library is used to globalize number in CircularGauge component using [`format`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/label/#format-string) property in [`labelStyle`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/label/).

<!-- markdownlint-disable MD036 -->
**Numeric Format**

In the below example axis labels are `globalized` to EUR.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/getting-started-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/getting-started-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/getting-started-cs3" %}