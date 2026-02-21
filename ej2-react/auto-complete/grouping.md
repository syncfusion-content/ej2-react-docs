---
layout: post
title: Grouping in React AutoComplete component | Syncfusion
description: Learn here all about Grouping in Syncfusion React AutoComplete component of Syncfusion Essential JS 2 and more.
control: Grouping 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in React AutoComplete component

The AutoComplete supports wrapping nested elements into a group based on different categories. The category of each list item can be mapped through the [groupBy](https://ej2.syncfusion.com/react/documentation/api/auto-complete#fields) field in the data table. The group header is displayed both as inline and fixed headers. The fixed group header content is updated dynamically on scrolling the popup list with its category value.

In the following sample, vegetables are grouped based on their category using the `groupBy` field.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs21/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs21/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs21" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs22/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs22/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs22" %}

## Customization

The grouping header is also provided with customization options. This allows custom designing using the [groupTemplate](https://ej2.syncfusion.com/react/documentation/api/auto-complete#grouptemplate) property for both inline and fixed headers.

## See Also

* [Group Template support to AutoComplete](./templates#group-template).