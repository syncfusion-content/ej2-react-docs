---
layout: post
title: Filtering in React AutoComplete component | Syncfusion
description: Learn here all about Filtering in Syncfusion React AutoComplete component of Syncfusion Essential JS 2 and more.
control: Filtering 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in React AutoComplete component

The AutoComplete has built-in support for filtering the data items when [`allowFiltering`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#allowfiltering) is enabled. The filter operation starts as soon as you start typing characters in the component.

## Change the filter type

The component allows you to specify which filter type should be used for the search action. The available [`filterType`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#filtertype) options and their supported data types are:

| **Filter Type** | **Description** | **Supported Types** |
| --- | --- | --- |
| StartsWith | Checks whether a value begins with the specified value. | String |
| EndsWith | Checks whether a value ends with the specified value. | String |
| Contains | Checks whether a value contains the specified value. | String |

In the following example, data filtering is done with the `StartsWith` type.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs9" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs10" %}

## Filter item count

You can specify the filter suggestion item count through the [`suggestionCount`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#suggestioncount) property of AutoComplete.

In the following example, the suggestion list item count is restricted to 2.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs11/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/basic-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs11" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs12/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/basic-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs12" %}

## Limit the minimum filter character

You can set the limit for the character count to filter the data on the AutoComplete. This can be done by setting the [`minLength`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#minlength) property of the AutoComplete.

In the following example, the remote request does not fetch the search data, until the search key contains three characters.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs13/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs13" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs14/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs14" %}

## Case sensitive filtering

Data items can be filtered either with or without case sensitivity using the DataManager. This can be done by setting the [`ignoreCase`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#ignorecase) property of the AutoComplete.

The following sample depicts how to filter the data with case-sensitive mode.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs15/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs15" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs16/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs16" %}

## Diacritics Filtering

The AutoComplete supports diacritics filtering which will ignore the [diacritics](https://en.wikipedia.org/wiki/Diacritic) and makes it easier to filter the results in international character lists when the [ignoreAccent](https://ej2.syncfusion.com/react/documentation/api/auto-complete#ignoreaccent) property is enabled.

In the following sample, data with diacritics are bound as the dataSource for the AutoComplete.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs17/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs17" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs18/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs18/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs18" %}

## Debounce delay

You can use the [debounceDelay](https://ej2.syncfusion.com/react/documentation/api/auto-complete#debouncedelay) property for filtering, enabling you to set a delay in milliseconds. This functionality helps reduce the frequency of filtering as you type, enhancing performance and responsiveness for a smoother user experience. By default, a debounce delay of 300ms is set. If you wish to disable this feature entirely, you can set it to 0ms.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs32/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs32/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs32" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs33/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs33/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs33" %}

## See Also

* [How to achieve autofill while filtering](./how-to/autofill)
* [How to group the data using header](./grouping)
* [How to highlight the search data](./how-to/custom-search)