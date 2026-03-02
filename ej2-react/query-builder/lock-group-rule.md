---
layout: post
title:  Lock Group/Rule in React Query builder component | Syncfusion
description: Learn here all about Lock Group/Rule in Syncfusion React Query builder component of Syncfusion Essential JS 2 and more.
control: QueryBuilder
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Lock Group/Rule in React Query Builder component

Prevent modification of specific rules or groups by locking them. When a rule is locked, its field, operator, and value cannot be edited. Locking a group disables all contained elements. This feature provides precise control over query components, ensuring critical conditions remain unchanged. Manage lock button visibility through the [`showButtons`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#showbuttons) property.

Lock groups and rules through the user interface or programmatically:

* Use the [`lockGroup`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#lockgroup) method to lock a group.
* Use the [`lockRule`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#lockrule) method to lock a rule.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/lock-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/lock-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/lock-cs1" %}