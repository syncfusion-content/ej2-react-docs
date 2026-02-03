---
layout: post
title: Internationalization in React Chart component | Syncfusion
description: Learn here all about Internationalization in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Internationalization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Internationalization in React Chart component

Chart provides support for internationalization for the following elements:

- Data label
- Axis label
- Tooltip

For more information about number and date formatting, see the internationalization guide: [`internationalization`](https://ej2.syncfusion.com/documentation/common/internationalization).

<!-- markdownlint-disable MD036 -->
**Globalization**

Globalization is the process of designing and developing a component that works in different cultures/locales. Use the internationalization library to localize numbers, dates, and times in the Chart component, for example by using the axis `labelFormat` property.

**Numeric Format**

The example below globalizes axis, point, and tooltip labels to the EUR currency format.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/double-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/double-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/axis/double-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/axis/double-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/axis/double-cs2" %}