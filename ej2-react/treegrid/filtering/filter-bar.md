---
layout: post
title: Filter bar in React Treegrid component | Syncfusion
description: Learn here all about Filter bar in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Filter bar 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Filter bar in React Treegrid component

By setting the [`allowFiltering`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#allowfiltering) to true, the filter bar row will render next to the header, which allows you to filter data. You can filter the records with different expressions depending upon the column type.

 **Filter bar expressions:**

 You can enter the following filter expressions (operators) manually in the filter bar.

Expression |Example |Description |Column Type
-----|-----|-----|-----
= |=value |equal |Number
!= |!=value |notequal |Number
> |>value |greaterthan |Number
< |<value |lessthan |Number
>= |>=value |greaterthanorequal |Number
<=|<=value|lessthanorequal |Number
* |*value |startswith |String
% |%value |endswith |String
N/A |N/A | *Equal* operator will always be used for date filter. |Date
N/A |N/A |*Equal* operator will always be used for Boolean filter. |Boolean

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/filtering-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/filtering-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/filtering-cs3" %}

> By default, the [`filterSettings.columns.operator`](https://ej2.syncfusion.com/react/documentation/api/treegrid/filterSettingsModel/#operators) value is *equal*.

## Filterbar template with custom component

You can customize default filter bar component of a column by custom component using **filter template**.

The following example demonstrates the way to use filter template for a column when using filter bar. In the following example, the DropdownList component is used to filter **duration** column using filter template.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/filtering-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/filtering-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/filtering-cs4" %}

### Change default filter bar operator

You can change the default filter operator by extending [`filterModule.filterOperators`](https://ej2.syncfusion.com/react/documentation/api/treegrid/filterSettings/#operators) property in [`dataBound`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#databound) event.

In the following sample, we have changed the default operator for string typed columns as `contains` from `startsWith`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/filtering-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/filtering-cs5/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/filtering-cs5" %}