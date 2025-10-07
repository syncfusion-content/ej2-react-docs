---
layout: post
title: Templates in React Dropdown Tree component | Syncfusion
description: Learn here all about Templates in Syncfusion React Drop down tree component of Syncfusion Essential JS 2 and more.
control: Dropdown Tree
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Templates in React Dropdown Tree component

The Dropdown Tree provides support for customizing each list item, header, and footer elements.

## Item template

Customize the content of each list item within the Dropdown Tree using the [itemTemplate](https://ej2.syncfusion.com/react/documentation/api/drop-down-tree/#itemtemplate) property. This allows you to display complex data structures with custom formatting and styling.

In the following sample, the Dropdown Tree list items display employee information including **name** and **job** details using the **itemTemplate** property.

The template expression should be provided inside the {...} interpolation syntax.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdowntree/item-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdowntree/item-template-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/item-template-cs1/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dropdowntree/item-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdowntree/item-template-cs1" %}

## Value template

The currently selected value displayed in the Dropdown Tree input element can be customized using the [valueTemplate](https://ej2.syncfusion.com/react/documentation/api/drop-down-tree/#valuetemplate) property. This template controls how selected items appear in the input field.

In the following sample, the selected value displays as combined text showing both `Name` and `Job` separated by a hyphen.

The template expression should be provided inside the {...} interpolation syntax.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdowntree/value-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdowntree/value-template-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/value-template-cs1/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dropdowntree/value-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdowntree/value-template-cs1" %}

## Header template

The header element appears statically at the top of the popup list items within the Dropdown Tree. Use the [headerTemplate](https://ej2.syncfusion.com/react/documentation/api/drop-down-tree/#headertemplate) property to place custom elements as header content.

In the following sample, the header is customized with a custom element that provides context for the dropdown content.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdowntree/header-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdowntree/header-template-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/header-template-cs1/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dropdowntree/header-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdowntree/header-template-cs1" %}

## Footer template

The Dropdown Tree supports displaying a footer element at the bottom of the popup list items. Use the [footerTemplate](https://ej2.syncfusion.com/react/documentation/api/drop-down-tree/#footertemplate) property to place custom elements as footer content.

In the following sample, the footer element displays the total number of employees available in the Dropdown Tree.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdowntree/footer-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdowntree/footer-template-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/footer-template-cs1/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dropdowntree/footer-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdowntree/footer-template-cs1" %}

## No records template

The Dropdown Tree supports displaying custom content when no matches are found during search operations. Use the [noRecordsTemplate](https://ej2.syncfusion.com/react/documentation/api/drop-down-tree/#norecordstemplate) property to customize the no data message.

In the following sample, the popup list displays a custom notification when no data is available.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdowntree/norecords-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdowntree/norecords-template-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dropdowntree/norecords-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdowntree/norecords-template-cs1" %}

## Action failure template

The Dropdown Tree provides options to customize the popup list content when data fetch requests fail at the remote server. Use the [actionFailureTemplate](https://ej2.syncfusion.com/react/documentation/api/drop-down-tree/#actionfailuretemplate) property to display custom error messages.

In the following sample, when the data fetch request fails, the Dropdown Tree displays the notification.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdowntree/actionfailure-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdowntree/actionfailure-template-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dropdowntree/actionfailure-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdowntree/actionfailure-template-cs1" %}

## Custom template for selected items display

When multiple items are selected via checkbox or multi-selection, the Dropdown Tree can display a custom template instead of showing all selected item text. Configure this by setting the [mode](https://ej2.syncfusion.com/react/documentation/api/drop-down-tree/#mode) property to ***Custom*** and using the [customTemplate](https://ej2.syncfusion.com/react/documentation/api/drop-down-tree/#customtemplate) property.

When the **mode** property is set to **Custom**, the Dropdown Tree displays the default template value **(${value.length} item(s) selected)** such as **1 item(s) selected** or **2 item(s) selected**. Customize this default template using the **customTemplate** property.

In the following sample, the Dropdown Tree renders with the default value of the **customTemplate** property displaying **1 item(s) selected** or **2 item(s) selected**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdowntree/custom-template-mode-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdowntree/custom-template-mode-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dropdowntree/custom-template-mode-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdowntree/custom-template-mode-cs1" %}

In the following sample, the Dropdown Tree renders with a custom value for the **customTemplate** property displaying **Selected items count: 2**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdowntree/custom-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdowntree/custom-template-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dropdowntree/custom-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdowntree/custom-template-cs1" %}
