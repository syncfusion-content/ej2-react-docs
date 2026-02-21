---
layout: post
title: Checkbox in React Multi select component | Syncfusion
description: Learn here all about Checkbox in Syncfusion React Multi select component of Syncfusion Essential JS 2 and more.
control: Checkbox 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Checkbox in React Multi select component

The MultiSelect includes built-in checkbox support to select multiple values. Enable this feature by setting the [`mode`](https://ej2.syncfusion.com/react/documentation/api/multi-select/#mode) property to `CheckBox`.

To use checkbox, inject the `CheckBoxSelection` module in the MultiSelect.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/checkbox-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/checkbox-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/checkbox-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/checkbox-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/checkbox-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/checkbox-cs2" %}

## Select All

The MultiSelect component includes a `Select All` option in the header to select all list items at once.

When the [`showSelectAll`](https://ej2.syncfusion.com/react/documentation/api/multi-select/#showselectall) property is set to **true**, the Select All option is displayed by default. Customize the label text using the [`selectAllText`](https://ej2.syncfusion.com/react/documentation/api/multi-select/#selectalltext) property.

Similarly, you can customize the unselect all label using the [`unSelectAllText`](https://ej2.syncfusion.com/react/documentation/api/multi-select/#unselectalltext) property.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/checkbox-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/checkbox-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/checkbox-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/checkbox-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/checkbox-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/checkbox-cs4" %}

## Selection Limit

Restrict the number of items that can be selected by setting the [`maximumSelectionLength`](https://ej2.syncfusion.com/react/documentation/api/multi-select/#maximumselectionlength) property. This prevents users from selecting more items than the specified limit.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/checkbox-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/checkbox-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/checkbox-cs5" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/checkbox-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/checkbox-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/checkbox-cs6" %}

## Selection Reordering

Enable the [`enableSelectionOrder`](https://ej2.syncfusion.com/react/documentation/api/multi-select/#enableselectionorder) property to automatically reorder selected items within the popup list, displaying them in the order they were selected.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/checkbox-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/checkbox-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/checkbox-cs7" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/checkbox-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/checkbox-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/checkbox-cs8" %}

## See Also

* [How to bind the data](./data-binding)
* [How to filter the bound data](./filtering)
* [How to add custom value to the MultiSelect](./custom-value)
* [How to render grouping with checkbox](./grouping#grouping-with-checkbox).