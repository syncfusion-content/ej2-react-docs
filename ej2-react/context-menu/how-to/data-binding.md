---
layout: post
title: Data binding in React Context menu component | Syncfusion
description: Learn here all about Data binding in Syncfusion React Context menu component of Syncfusion Essential JS 2 and more.
control: Data binding 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# Data binding in React Context menu component

In the following example, menu items are populated from data source and mapped to
[`items`](https://ej2.syncfusion.com/react/documentation/api/context-menu/menuItemModel/#items) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/data-binding-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/data-binding-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/context-menu/data-binding-cs1" %}

> While accessing Array we got the exception 'object is possibly undefined' due to 'strictNullChecks' option. So you can disable it in 'tsconfig.json' file.