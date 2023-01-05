---
layout: post
title: Hide sorting in excel filter in React Grid component | Syncfusion
description: Learn here all about Hide sorting in excel filter in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Hide sorting in excel filter 
platform: ej2-react
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
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/disable-sorting-excel-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.jsx" %}
{% include code-snippet/grid/disable-sorting-excel-cs1/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/disable-sorting-excel-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/disable-sorting-excel-cs1/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/disable-sorting-excel-cs1" % }
