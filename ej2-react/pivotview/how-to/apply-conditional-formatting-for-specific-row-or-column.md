---
layout: post
title: Apply conditional formatting for specific row or column in React Pivotview component | Syncfusion
description: Learn here all about Apply conditional formatting for specific row or column in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
control: Apply conditional formatting for specific row or column 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Apply conditional formatting for specific row or column in React Pivotview component

You can apply conditional formatting for specific row or column using `label` option in the pivot table. It can be configured using the `conditionalFormatSettings` option through code behind, during initial rendering. The required settings are:

* `label`: Specifies the header name to apply conditions for row or column.
* `conditions`: Specifies the operator type such as equals, greater than, less than, etc.
* `value1`: Specifies the start value.
* `value2`: Specifies the end value.
* `style`: Specifies the style for the cell.

To use the conditional formatting feature, You need to inject the `ConditionalFormatting` module in pivot table.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/default-cs154/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pivot-table/default-cs154/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs154" %}
