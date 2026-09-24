---
layout: post
title: Templates in React AutoComplete | Syncfusion
description: Customize each Syncfusion React AutoComplete list item, group header, and popup header or footer with item, group, header, and footer templates for richer UIs.
control: Templates 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Templates in React AutoComplete

The React AutoComplete provides several options to customize each list item, group header, header, and footer elements. Each template property accepts a JSX string or a function that receives the current item's `data` object (for example, `data.value`, `data.City`, `data.LastName`). The fields available on `data` depend on the bound `dataSource` and `fields` mapping.

To get started with React AutoComplete templates, watch the following video, which demonstrates how to configure item, group, header, and footer templates:

{% youtube "https://www.youtube.com/watch?v=ZAVhnVvM2Dw" %}

## Item template

The content of each list item within the React AutoComplete can be customized with the help of the [`itemTemplate`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#itemtemplate) property.

In the following sample, each list item is split into two columns to showcase the employee's first name and city.

`[Class Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/item-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/item-template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/item-template-cs1" %}

`[Functional Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/item-template-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/item-template-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/item-template-cs2" %}

## Group template

The group header that categorizes list items can be customized with the help of the [`groupTemplate`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#grouptemplate) property. This template applies to both inline and floating group headers.

In the following sample, employees are grouped by city. The data is fetched from a remote `DataManager` and also filtered to specific cities (London and Seattle) using a `Predicate`. For an introduction to remote data binding, see [Binding remote data](./data-binding#binding-remote-data).

`[Class Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs26/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs26/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs26" %}

`[Functional Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs27/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs27/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs27" %}

## Header template

The header element is shown statically at the top of the suggestion list items within the React AutoComplete, and any custom element can be placed as a header element using the [`headerTemplate`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#headertemplate) property.

In the following sample, the list items and their headers are displayed in two columns similar to a grid layout.

`[Class Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/header-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/header-template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/header-template-cs1" %}

`[Functional Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/header-template-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/header-template-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/header-template-cs2" %}

## Footer template

The React AutoComplete has options to show a footer element at the bottom of the list items in the suggestion list. You can place any custom element as the footer using the [`footerTemplate`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#footertemplate) property.

In the following sample, the footer element displays the total number of list items present in the React AutoComplete.

`[Class Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/footer-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/footer-template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/footer-template-cs1" %}

`[Functional Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/footer-template-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/footer-template-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/footer-template-cs2" %}

## No records template

The React AutoComplete is provided with support to customize the content shown when no records match the search, with the help of the [`noRecordsTemplate`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#norecordstemplate) property. The default text is "No Records Found".

In the following sample, the popup list content displays a notification that no data is available.

`[Class Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/norecords-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/norecords-template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/norecords-template-cs1" %}

`[Functional Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/norecords-template-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/norecords-template-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/norecords-template-cs2" %}

## Action failure template

You can customize the content shown when a remote data fetch fails, using the [`actionFailureTemplate`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#actionfailuretemplate) property. The default text is "The Request Failed".

In the following sample, when the data fetch request fails, the React AutoComplete displays the notification.

`[Class Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/norecords-template-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/norecords-template-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/norecords-template-cs3" %}

`[Functional Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/norecords-template-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/norecords-template-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/norecords-template-cs4" %}

## See also

* [How to achieve filtering](./filtering)
* [How to group the data using header](./grouping#grouping)
* [How to show the list items with icon](./how-to/icon-support)
