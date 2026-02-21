---
layout: post
title: Templates in React Combo box component | Syncfusion
description: Learn here all about Templates in Syncfusion React Combo box component of Syncfusion Essential JS 2 and more.
control: Templates 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Templates in React Combo box component

The ComboBox provides comprehensive template support to customize list items, group titles, headers, and footer elements.

To get started with React ComboBox templates, you can check this video:

{% youtube "https://www.youtube.com/watch?v=WWCHely4Ucs" %}

## Item template

Customize the content of each list item using the [itemTemplate](https://ej2.syncfusion.com/react/documentation/api/combo-box/#itemtemplate) property. This allows you to create custom layouts for displaying data in each item.

In the following example, each list item displays data in a two-column layout.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/combobox/item-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/combobox/item-template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/item-template-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/combobox/item-template-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/combobox/item-template-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/item-template-cs2" %}

## Group template

Customize group header titles using the [groupTemplate](https://ej2.syncfusion.com/react/documentation/api/combo-box/#grouptemplate) property. This template applies to both inline and floating group headers, allowing consistent group header styling.

In the following example, employees are grouped by their city.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/combobox/basic-cs33/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/combobox/basic-cs33/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/basic-cs33" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/combobox/basic-cs34/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/combobox/basic-cs34/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/basic-cs34" %}

## Header template

Add a static header to the top of the popup list using the [headerTemplate](https://ej2.syncfusion.com/react/documentation/api/combo-box/#headertemplate) property. This allows you to place custom elements such as titles, filters, or other controls in the header area.

In the following example, list items and their headers display in a two-column layout similar to a data grid.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/combobox/header-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/combobox/header-template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/header-template-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/combobox/header-template-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/combobox/header-template-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/header-template-cs2" %}

## Footer template

Add a footer element at the bottom of the popup list using the [footerTemplate](https://ej2.syncfusion.com/react/documentation/api/combo-box/#footertemplate) property. This allows you to place custom elements such as summaries, totals, or action buttons.

In the following example, the footer displays the total number of list items in the ComboBox.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/combobox/footer-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/combobox/footer-template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/footer-template-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/combobox/footer-template-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/combobox/footer-template-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/footer-template-cs2" %}

## No records template

The ComboBox is provided with support to custom design the popup list content when no data is found and no matches found on search with the help of
[noRecordsTemplate](https://ej2.syncfusion.com/react/documentation/api/combo-box/#norecordstemplate) property.

In the following sample, popup list content displays the notification of no data available.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/combobox/norecords-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/combobox/norecords-template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/norecords-template-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/combobox/norecords-template-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/combobox/norecords-template-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/norecords-template-cs2" %}

## Action failure template

There is also an option to custom design the popup list content when the data fetch request fails at the remote server. This can be achieved using the
[actionFailureTemplate](https://ej2.syncfusion.com/react/documentation/api/combo-box/#actionfailuretemplate) property.

In the following sample, when the data fetch request fails, the ComboBox displays the notification.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/combobox/norecords-template-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/combobox/norecords-template-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/norecords-template-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/combobox/norecords-template-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/combobox/norecords-template-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/norecords-template-cs4" %}

## See Also

* [How to achieve filtering](./filtering/)
* [How to group the data using header](./grouping/)
* [How to show the list items with icon](./how-to/icons-support/)
