---
layout: post
title: Apply conditional hyper link for row or column in React | Syncfusion
description: Learn here all about Apply condition based hyper link for specific row or column in Syncfusion React of Syncfusion Essential JS 2 and more.
control: Apply condition based hyper link for specific row or column 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Apply condition based hyper link for specific row or column in React

You can apply conditions for specific row or column using `label` option to show hyperlink option in the pivot table. It can be configured using the `conditionalSettings` option through code behind, during initial rendering. The required settings are:

* `label`: Specifies the header name to get visibility of hyperlink option for row or column.
* `conditions`: Specifies the operator type such as equals, greater than, less than, etc.
* `value1`: Specifies the start value.
* `value2`: Specifies the end value.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs153/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs153/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs153" %}
