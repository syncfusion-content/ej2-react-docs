---
layout: post
title: Restrict groups in React Query builder component | Syncfusion
description: Learn here all about Restrict groups in Syncfusion React Query builder component of Syncfusion Essential JS 2 and more.
control: QueryBuilder 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Restrict groups in React Query Builder component

Limit the nesting depth of groups by setting the [`maxGroupCount`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#maxgroupcount) property. By default, up to 5 nested groups are allowed. The following example demonstrates restricting the maximum group count to 2.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/default-cs13/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/default-cs13/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/default-cs13" %}

> Using this property in mobile environments prevents excessive nested group creation and improves usability on smaller screens.