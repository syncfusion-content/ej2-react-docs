---
layout: post
title: Data binding in React Bullet chart component | Syncfusion
description: Learn here all about Data binding in Syncfusion React Bullet chart component of Syncfusion Essential JS 2 and more.
control: Data binding 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in React Bullet chart component

The [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart/#datasource) property accepts a collection of values as input that helps to display measures, and compares them to a target bar. To display the actual and target bar, specify the property from the datasource into the [`valueField`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart/#valuefield) and [`targetField`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart/#targetfield) respectively.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/bullet-chart/working-with-data/local-data-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/bullet-chart/working-with-data/local-data-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/bullet-chart/working-with-data/local-data-cs1" %}