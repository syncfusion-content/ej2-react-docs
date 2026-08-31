---
layout: post
title: Filtering in React AutoComplete | Syncfusion
description: Filter Syncfusion React AutoComplete suggestions as you type using allowFiltering, with StartsWith, EndsWith, or Contains match modes for string data.
control: Filtering 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in React AutoComplete

The AutoComplete has built-in support for filtering the data items when [`allowFiltering`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#allowfiltering) is enabled. The filter operation starts as soon as you start typing characters in the component.

## Change the filter type

The AutoComplete applies the selected filter type for the search action. The available [`filterType`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#filtertype) options and their supported data types are:

> The built-in `filterType` options apply to string data only. For numeric or boolean values, use the [`filtering`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#filtering) event to implement custom filtering logic.

| **Filter Type** | **Description** | **Supported Types** |
| --- | --- | --- |
| StartsWith | Checks whether a value begins with the specified value. | String |
| EndsWith | Checks whether a value ends with the specified value. | String |
| Contains | Checks whether a value contains the specified value. | String |

In the following example, data filtering is done with the `StartsWith` type.

`[Class Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs9" %}

`[Functional Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs10" %}

## Debounce delay

You can use the [`debounceDelay`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#debouncedelay) property for filtering, enabling you to set a delay in milliseconds. This functionality reduces the frequency of filtering as you type, enhancing performance and responsiveness for a smoother user experience. By default, a debounce delay of `300` ms is set. The acceptable range is from `0` upward; setting it to `0` ms disables the debounce entirely and triggers filtering on every keystroke.

`[Class Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs32/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs32/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs32" %}

`[Functional Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs33/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs33/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs33" %}

## Custom filtering

For advanced scenarios such as numeric, boolean, or server-side filtering that the built-in `filterType` options do not cover, handle the [`filtering`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#filtering) event. This event passes a `FilteringEventArgs` object that contains the current `text`, the `updateData` function to pass filtered results back to the component, and the current `dataSource`. Call `updateData(data, query)` inside the handler to populate the popup with your custom results.

## Filter item count

You can limit the number of filtered suggestion items shown through the [`suggestionCount`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#suggestioncount) property of AutoComplete. The default value is `20`. Setting it to `0` shows all matching items; negative values are treated as the default.

In the following example, the suggestion list item count is restricted to 2.

`[Class Component]`

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

`[Functional Component]`

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

## Set a minimum filter length

You can set the minimum number of characters required to trigger filtering through the [`minLength`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#minlength) property of the AutoComplete. The default value is `1`. For remote data binding with `DataManager`, see [Binding remote data](./data-binding#binding-remote-data).

In the following example, the remote request does not fetch the search data until the search key contains three characters.

`[Class Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs13/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs13" %}

`[Functional Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs14/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs14" %}

## Case-sensitive filtering

Data items can be filtered either with or without case sensitivity. This can be done by setting the [`ignoreCase`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#ignorecase) property of the AutoComplete. The case-sensitivity behavior depends on the underlying data source.

The following sample depicts how to filter the data with case-sensitive mode.

`[Class Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs15/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs15" %}

`[Functional Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs16/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs16" %}

## Diacritics filtering

The AutoComplete supports diacritics filtering, which ignores the [diacritics](https://en.wikipedia.org/wiki/Diacritic) and makes it easier to filter the results in international character lists when the [`ignoreAccent`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#ignoreaccent) property is enabled. The default value of `ignoreAccent` is `false`.

In the following sample, data with diacritics are bound as the dataSource for the AutoComplete.

`[Class Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs17/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs17" %}

`[Functional Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs18/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs18/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs18" %}

## See also

* [How to achieve autofill while filtering](./how-to/autofill)
* [How to group the data using header](./grouping)
* [How to highlight the search data](./how-to/custom-search)