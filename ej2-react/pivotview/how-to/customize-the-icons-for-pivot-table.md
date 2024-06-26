---
layout: post
title: Customize the icons for pivot table in React | Syncfusion
description: Learn here all about Customize the icons for pivot table in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
control: Customize the icons for pivot table 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize the icons for pivot table in React Pivotview component

You can customize the pivot button icons in the pivot table by overriding the class **.pivot-button** with a custom property content as mentioned below.



```ts

#PivotView_PivotFieldList .e-icons.e-toggle-field-list::before {
    content: '\e337';
}

```

```ts
#PivotView_PivotFieldList.e - icons.e - toggle - field - list;
before;
{
    content: '\e337';
}
```

In the below sample, pivot table is rendered with a customized pivot button icons.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/icon-customization-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pivot-table/icon-customization-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/icon-customization-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/icon-customization-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/icon-customization-cs1" %}