---
layout: post
title: Templates in React Multi select component | Syncfusion
description: Learn here all about Templates in Syncfusion React Multi select component of Syncfusion Essential JS 2 and more.
control: Templates 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Templates in React Multi select component

The MultiSelect has been provided with several options to customize each list item, group title, selected value, header, and footer elements.

## Item template

The content of each list item within the MultiSelect can be customized with the help of [itemTemplate](https://ej2.syncfusion.com/react/documentation/api/multi-select/#itemtemplate)
property.

In the following sample, each list item is split into two columns to display relevant data's.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/item-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/item-template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/item-template-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/item-template-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/item-template-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/item-template-cs2" %}

## Value template

The currently selected value that is displayed by default on the MultiSelect input element can be customized using the [valueTemplate](https://ej2.syncfusion.com/react/documentation/api/multi-select/#valuetemplate) property.

In the following sample, the selected value is displayed as a combined text of both `FirstName` and `City` in the MultiSelect input, which is separated by a hyphen.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/item-template-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/item-template-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/item-template-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/item-template-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/item-template-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/item-template-cs4" %}

## Group template

The group header title under which appropriate sub-items are categorized can also be customize with the help of [groupTemplate](https://ej2.syncfusion.com/react/documentation/api/multi-select/#grouptemplate) property. This template is common for both inline and floating group header template.

In the following sample, employees are grouped according to their city.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/basic-cs32/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/basic-cs32/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/basic-cs32" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/basic-cs33/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/basic-cs33/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/basic-cs33" %}

## Header template

The header element is shown statically at the top of the popup list items within the MultiSelect, and any custom element can be placed as a header element using the
[headerTemplate](https://ej2.syncfusion.com/react/documentation/api/multi-select/#headertemplate) property.

In the following sample, the list items and its headers are designed and displayed as two columns similar to multiple columns of the grid.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/header-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/header-template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/header-template-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/header-template-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/header-template-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/header-template-cs2" %}

## Footer template

The MultiSelect has options to show a footer element at the bottom of the list items in the popup list. Here, you can place any custom element as a footer element using the [footerTemplate](https://ej2.syncfusion.com/react/documentation/api/multi-select/#footertemplate) property.

In the following sample, footer element displays the total number of list items present in the MultiSelect.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/footer-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/footer-template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/footer-template-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/footer-template-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/footer-template-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/footer-template-cs2" %}

## No records template

The MultiSelect is provided with support to custom design the popup list content when no data is found and no matches found on search with the help of
[noRecordsTemplate](https://ej2.syncfusion.com/react/documentation/api/multi-select/#norecordstemplate) property.

In the following sample, popup list content displays the notification of no data available.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/norecords-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/norecords-template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/norecords-template-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/norecords-template-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/norecords-template-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/norecords-template-cs2" %}

## Action failure template

There is also an option to custom design the popup list content when the data fetch requestfails at the remote server. This can be achieved using the
[actionFailureTemplate](https://ej2.syncfusion.com/react/documentation/api/multi-select/#actionfailuretemplate) property.

In the following sample, when the data fetch request fails, the MultiSelect displays the notification.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/norecords-template-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/norecords-template-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/norecords-template-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/norecords-template-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/norecords-template-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/norecords-template-cs4" %}

## See Also

* [How to bind the data](./data-binding/)
* [How to group the data using header](./grouping/)
* [How to customize the options in MultiSelect](./chip-customization/)