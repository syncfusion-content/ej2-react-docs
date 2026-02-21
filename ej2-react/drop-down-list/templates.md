---
layout: post
title: Templates in React Drop down list component | Syncfusion
description: Learn here all about Templates in Syncfusion React Drop down list component of Syncfusion Essential JS 2 and more.
control: Templates 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Templates in React Drop down list component

The DropDownList provides several options to customize list items, group titles, selected values, headers, and footer elements.

To get started with React DropDownList templates, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=nhtzCMJZqqc" %}

## Item template

Customize the content of each list item using the [itemTemplate](https://ej2.syncfusion.com/react/documentation/api/drop-down-list/#itemtemplate) property.

In the following example, each list item is divided into two columns to display relevant data.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/item-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/item-template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/item-template-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/item-template-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/item-template-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/item-template-cs2" %}

## Value template

Customize the currently selected value displayed in the DropDownList input element using the [valueTemplate](https://ej2.syncfusion.com/react/documentation/api/drop-down-list/#valuetemplate) property.

In the following example, the selected value displays combined text from the `FirstName` and `City` fields, separated by a hyphen.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/item-template-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/item-template-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/item-template-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/item-template-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/item-template-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/item-template-cs4" %}

## Group template

Customize group header titles using the [groupTemplate](https://ej2.syncfusion.com/react/documentation/api/drop-down-list/#grouptemplate) property. This template applies to both inline and floating group header modes.

In the following example, employees are grouped by their city.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/basic-cs39/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/basic-cs39/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs39" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/basic-cs40/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/basic-cs40/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs40" %}

## Header template

Display a static header element at the top of the popup list using the [headerTemplate](https://ej2.syncfusion.com/react/documentation/api/drop-down-list/#headertemplate) property to place custom elements.

In the following example, list items and headers are displayed as two columns similar to a data grid.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/header-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/header-template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/header-template-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/header-template-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/header-template-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/header-template-cs2" %}

## Footer template

Display a footer element at the bottom of the popup list using the [footerTemplate](https://ej2.syncfusion.com/react/documentation/api/drop-down-list/#footertemplate) property to place custom content.

In the following example, the footer displays the total number of list items in the DropDownList.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/footer-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/footer-template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/footer-template-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/footer-template-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/footer-template-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/footer-template-cs2" %}

## No records template

Customize the popup list content when no data is found or no search matches exist using the [noRecordsTemplate](https://ej2.syncfusion.com/react/documentation/api/drop-down-list/#norecordstemplate) property.

In the following example, the popup displays a notification when no data is available.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/norecords-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/norecords-template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/norecords-template-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/norecords-template-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/norecords-template-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/norecords-template-cs2" %}

## Action failure template

Customize the popup list content when a data fetch request fails at the remote server using the [actionFailureTemplate](https://ej2.syncfusion.com/react/documentation/api/drop-down-list/#actionfailuretemplate) property.

In the following example, the DropDownList displays a notification when the data fetch request fails.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/norecords-template-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/norecords-template-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/norecords-template-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/norecords-template-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/norecords-template-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/norecords-template-cs4" %}

## See Also

* [How to achieve filtering](./filtering)
* [How to group the data using header](./grouping)
* [How to show the list items with icon](./how-to/icons-support)
* [How to render tooltip for the options](./how-to/tooltip)