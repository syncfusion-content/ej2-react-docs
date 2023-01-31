---
layout: post
title: Filtering in React Query builder component | Syncfusion
description: Learn here all about Filtering in Syncfusion React Query builder component of Syncfusion Essential JS 2 and more.
control: Filtering 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in React Query builder component

Query Builder allows you to create or delete conditions and groups. You can use [`showButtons`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#showbuttons) to enable/disable these buttons.

You can create or delete conditions by interacting through the user interface and methods.

* Use the [`addRules`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#addrules), and [`deleteRules`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#deleterules) methods to create/delete conditions.
* Use [`addGroups`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#addgroups), and [`deleteGroups`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#deletegroups) methods to create/delete groups.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/default-cs8/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/default-cs8/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/default-cs8" %}