---
layout: post
title: How to customize the icons for pivot grid in React Pivot Table | Syncfusion
description: Step-by-step example showing how to customize the icons for pivot grid in the React Pivot Table by overriding CSS classes.
control: Pivot Table
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to customize the icons for pivot grid in React Pivot Table

You can customize the pivot button icons in the pivot grid by overriding the class **.pivot-button** with a custom property content as mentioned below.

```ts

#PivotView_PivotFieldList .e-icons.e-toggle-field-list::before {
    content: '\e337';
}

```

In the below sample, pivot grid is rendered with a customized pivot button icons.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/icon-customization-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/icon-customization-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/icon-customization-cs1" %}
