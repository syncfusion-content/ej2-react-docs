---
layout: post
title: Sorting and grouping in React List box component | Syncfusion
description: Learn here all about Sorting and grouping in Syncfusion React List box component of Syncfusion Essential JS 2 and more.
control: Sorting and grouping 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Sorting and grouping in React List box component

## Sorting

The ListBox supports sorting list items in alphabetical order, either ascending or descending. Configure sorting using the [`sortOrder`](https://ej2.syncfusion.com/react/documentation/api/list-box/#sortorder) property with values: `None`, `Ascending`, or `Descending`.

In the following example, `SortOrder` is set to `Ascending`:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listbox/basic-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listbox/basic-cs15/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listbox/basic-cs15" %}

## Grouping

The ListBox groups nested elements based on category. Map the category for each list item using the [`groupBy`](https://ej2.syncfusion.com/react/documentation/api/list-box/fieldSettingsModel/#groupby) field in the data table.

In the following example, vegetables are grouped by category:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listbox/basic-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listbox/basic-cs16/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listbox/basic-cs16" %}
