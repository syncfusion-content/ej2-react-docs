---
layout: post
title: Filtering in React Auto complete component | Syncfusion
description: Learn here all about Filtering in Syncfusion React Auto complete component of Syncfusion Essential JS 2 and more.
control: Filtering 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in React Auto complete component

The AutoComplete has built-in support for filtering the data items when [`allowFiltering`](https://ej2.syncfusion.com/react/documentation/api/auto-complete/#allowfiltering) is enabled. The filter operation starts as soon as you start typing characters in the component.

## Change the filter type

Determines on which filter type, the component needs to be considered on search action. The available [`filterType`](https://ej2.syncfusion.com/react/documentation/api/auto-complete/#filtertype) and its supported data types are

| **Filter Type** | **Description** | **Supported Types** |
| --- | --- |
| StartsWith | Checks whether a value begins with the specified value. | String |
| EndsWith | Checks whether a value ends with specified value. | String |
| Contains | Checks whether a value contains with specified value. | String |

The following examples, data filtering is done with `StartsWith` type.

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

You can specify the filter suggestion item count through [`suggestionCount`](https://ej2.syncfusion.com/react/documentation/api/auto-complete/#suggestioncount) property of AutoComplete.

The following examples, to restrict the suggestion list item counts as 2.

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

You can set the limit for the character count to filter the data on the AutoComplete. This can be done by set the [`minLength`](https://ej2.syncfusion.com/react/documentation/api/auto-complete/#minlength) property to AutoComplete.

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

Data items can be filtered either with or without case sensitivity using the DataManager. This can be done by set the [`ignoreCase`](https://ej2.syncfusion.com/react/documentation/api/auto-complete/#ignorecase) property of AutoComplete.

The below sample depicts how to filter the data with case-sensitive.

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

An AutoComplete supports diacritics filtering which will ignore the [diacritics](https://en.wikipedia.org/wiki/Diacritic) and makes it easier to filter the results in international characters lists when the [ignoreAccent](https://ej2.syncfusion.com/react/documentation/api/auto-complete/#ignoreaccent) is enabled.

In the following sample,data with diacritics are bound as dataSource for AutoComplete.

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

## See Also

* [How to achieve autofill while filtering](./how-to/autofill)
* [How to group the data using header](./grouping)
* [How to highlight the search data](./how-to/custom-search)