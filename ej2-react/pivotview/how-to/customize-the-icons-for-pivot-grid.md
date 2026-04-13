---
layout: post
title: Customize the icons for pivot grid in React Pivotview | Syncfusion
description: Learn here all about Customize the icons for pivot grid in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
control: Customize the icons for pivot grid 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize the icons for pivot grid in React Pivotview component

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
