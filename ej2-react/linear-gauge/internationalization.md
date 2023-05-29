---
layout: post
title: Internationalization in React Linear gauge component | Syncfusion
description: Learn here all about Internationalization in Syncfusion React Linear gauge component of Syncfusion Essential JS 2 and more.
control: Internationalization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Internationalization in React Linear gauge component

Globalization is the process of designing and developing a component that works in different cultures. Internationalization is used to globalize the number content in Linear Gauge component using [`format`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/label/#format) property in [`LinearGaugeComponent`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/linearGaugeModel/). It has static text on some features such as

* Axis label
* Tooltip

The static text on above features can be changed to any culture such as Arabic, Deutsch and French. To know more about the globalization in React components, refer [here](https://ej2.syncfusion.com/react/documentation/common/internationalization/).

## Numeric Format

The text in axis labels and tooltip can be displayed in the numeric format such as currency, percentage and so on. To know more about the numeric formats in axis labels, refer [here](axis/#displaying-numeric-format-in-labels). In the below example, the axis label is displayed in the currency format.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/internationalization-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/internationalization-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/internationalization-cs1" %}