---
layout: post
title: Load desired report from the report list as default in React Pivotview component | Syncfusion
description: Learn here all about how to load desired report from the report list as default in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Load desired report from the report list as default
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD009 -->

# Load desired report from the report list as default in React Pivotview component

By default, the pivot table is displayed with the report bound at the code-behind. To load a desired report from the previously saved report collection during initial rendering, set the desired report name in the [`dataBound`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#databound) event, along with the additional report-based customization code shown below.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/default-cs319/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pivot-table/default-cs319/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs319" %}