---
layout: post
title: Restrict groups in React Query builder component | Syncfusion
description: Learn here all about Restrict groups in Syncfusion React Query builder component of Syncfusion Essential JS 2 and more.
control: Restrict groups 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Restrict groups in React Query builder component

You can restrict the condition set by defining the [`maxGroupCount`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#maxgroupcount) property. By default, the value is 5. In the below demo, the `maxGroupCount` is set to 2 .

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/default-cs13/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/default-cs13/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/default-cs13" %}

> You can use this property in the mobile mode to restrict the nested group creation.