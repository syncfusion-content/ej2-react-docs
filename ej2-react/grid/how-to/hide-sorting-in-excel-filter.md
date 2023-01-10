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
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/disable-sorting-excel-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/disable-sorting-excel-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/disable-sorting-excel-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/disable-sorting-excel-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/disable-sorting-excel-cs1" %}
