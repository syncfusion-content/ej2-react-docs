---
layout: post
title: Sort a range by custom list in React Spreadsheet component | Syncfusion
description: Learn here all about Sort a range by custom list in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Sort a range by custom list 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Sort a range by custom list in React Spreadsheet component

You can also define the sorting of cell values based on your own customized personal list. In this article, custom list is achieved using `custom sort comparer`.

In the following demo, the `Trustworthiness` column is sorted based on the custom lists `Perfect`, `Sufficient`, and `Insufficient`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/custom-sort-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/custom-sort-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/custom-sort-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/custom-sort-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/spreadsheet/custom-sort-cs1" %}

## See Also

* [Filtering](./filter)
* [Sorting](./sort)
* [Hyperlink](./link)