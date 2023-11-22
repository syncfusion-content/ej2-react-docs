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

The MultiSelect has built-in support to select multiple values through checkbox, when [`mode`](https://ej2.syncfusion.com/react/documentation/api/multi-select/#mode) property set as `CheckBox`.

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

The MultiSelect component has in-built support to select the all list items using `Select All` options in the header.

When the [`showSelectAll`](https://ej2.syncfusion.com/react/documentation/api/multi-select/#showselectall) property is set to true, by default Select All text will show. You can customize the name attribute of the Select All option by using [`selectAllText`](https://ej2.syncfusion.com/react/documentation/api/multi-select/#selectalltext).

For the unSelect All option, by default unSelect All text will show. You can customize the name attribute of the unSelect All option by using [`unSelectAllText`](https://ej2.syncfusion.com/react/documentation/api/multi-select/#unselectalltext).

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

Defines the limit of the selected items using [`maximumSelectionLength`](https://ej2.syncfusion.com/react/documentation/api/multi-select/#maximumselectionlength).

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

Using [`enableSelectionOrder`](https://ej2.syncfusion.com/react/documentation/api/multi-select/#enableselectionorder) to Reorder the selected items in popup visibility state.

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