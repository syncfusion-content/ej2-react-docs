---
layout: post
title: Hide sorting in excel filter in React Grid component | Syncfusion
description: Learn here all about Hide sorting in excel filter in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Hide sorting in excel filter 
publishingplatform: React
documentation: ug
domainurl: ##DomainURL##
---

# Hide sorting in excel filter in React Grid component

You can hide the sorting options on the excel filter dialog by setting display as none for the following classes.

```css
    .e-excel-ascending,
    .e-excel-descending,
    .e-separator.e-excel-separator {
    display: none;
    }
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/disable-sorting-excel-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/disable-sorting-excel-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/disable-sorting-excel-cs1" % }
