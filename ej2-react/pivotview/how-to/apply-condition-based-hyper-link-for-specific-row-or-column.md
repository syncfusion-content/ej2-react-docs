---
layout: post
title: Apply condition based hyper link for specific row or column in React Pivotview component | Syncfusion
description: Learn here all about Apply condition based hyper link for specific row or column in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
control: Apply condition based hyper link for specific row or column 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Apply condition based hyper link for specific row or column in React Pivotview component

You can apply conditions for specific row or column using `label` option to show hyperlink option in the pivot table. It can be configured using the `conditionalSettings` option through code behind, during initial rendering. The required settings are:

* `label`: Specifies the header name to get visibility of hyperlink option for row or column.
* `conditions`: Specifies the operator type such as equals, greater than, less than, etc.
* `value1`: Specifies the start value.
* `value2`: Specifies the end value.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/default-cs153/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pivot-table/default-cs153/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs153" %}
