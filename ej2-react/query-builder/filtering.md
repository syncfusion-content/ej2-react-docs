---
layout: post
title: Filtering in React Query builder component | Syncfusion
description: Learn here all about Filtering in Syncfusion React Query builder component of Syncfusion Essential JS 2 and more.
control: QueryBuilder 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in React Query Builder component

Create and delete filter conditions and groups in the Query Builder using the user interface or programmatic methods. Control button visibility with the [`showButtons`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#showbuttons) property.

Manage rules and groups through interaction or code:

* Use the [`addRules`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#addrules) and [`deleteRules`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#deleterules) methods to create and remove individual conditions.
* Use the [`addGroups`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#addgroups) and [`deleteGroups`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#deletegroups) methods to create and remove groups.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/default-cs8/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/default-cs8/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/default-cs8" %}