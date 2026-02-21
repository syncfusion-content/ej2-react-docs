---
layout: post
title: Filtering in React Drop down list component | Syncfusion
description: Learn here all about Filtering in Syncfusion React Drop down list component of Syncfusion Essential JS 2 and more.
control: Filtering 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in React Drop down list component

The DropDownList includes built-in filtering support when `allowFiltering` is enabled. Filtering begins immediately as you type characters in the search box.

To display filtered items in the popup, handle the [filtering](https://ej2.syncfusion.com/react/documentation/api/drop-down-list/#filtering) event to filter your data source and return results using the `updateData` method.

The following example shows how to filter the data source and display results through the `updateData` method in the `filtering` event.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/basic-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/basic-cs15/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs15" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/basic-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/basic-cs16/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs16" %}

## Limit the minimum filter character

Control filtering performance by setting a minimum character count before issuing remote requests. Use manual validation in the filter event handler to enforce this limit.

In the following example, the component does not fetch data until at least three characters are typed.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/basic-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/basic-cs17/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs17" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/basic-cs18/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/basic-cs18/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs18" %}

## Change the filter type

Customize filter behavior by changing the filter type to `contains`, `startsWith`, or `endsWith` within the filter event handler.

The following examples demonstrate filtering with the `endsWith` type.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/basic-cs19/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/basic-cs19/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs19" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/basic-cs20/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/basic-cs20/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs20" %}

## Case sensitive filtering

Data items can be filtered either with or without case sensitivity using the DataManager. This can be done by passing the fourth optional parameter of the `where` clause.

The following example shows how to perform case-sensitive filter.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/basic-cs21/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/basic-cs21/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs21" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/basic-cs22/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/basic-cs22/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs22" %}

## Diacritics Filtering

DropDownList supports diacritics filtering which will ignore the [diacritics](https://en.wikipedia.org/wiki/Diacritic) and makes it easier to filter the results in international characters lists when the [ignoreAccent](https://ej2.syncfusion.com/react/documentation/api/drop-down-list/#ignoreaccent) is enabled.

In the following sample,data with diacritics are bound as dataSource for DropDownList.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/basic-cs23/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/basic-cs23/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs23" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/basic-cs24/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/basic-cs24/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs24" %}

> You can also explore our [React DropDownList Filtering example]( https://ej2.syncfusion.com/react/demos/#/material/drop-down-list/filtering) that shows how to render the DropDownList Filter in React.

## Debounce delay

You can use the [debounceDelay](https://ej2.syncfusion.com/react/documentation/api/drop-down-list/#debouncedelay) property for filtering, enabling you to set a delay in milliseconds. This functionality helps reduce the frequency of filtering as you type, enhancing performance and responsiveness for a smoother user experience.By default, a DebounceDelay of 300ms is set. If you wish to disable this feature entirely, you can set it to 0ms.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/basic-cs48/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/basic-cs48/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs48" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/basic-cs49/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/basic-cs49/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs49" %}

## See Also

* [How to limit the search result while filtering](./how-to/search-on-filtering)
* [How to highlight the matched characters in filtering](./how-to/highlight-filtering)
* [How to modify the result data using remote data source](./how-to/modify-data)