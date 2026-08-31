---
layout: post
title: Lock Group/Rule in React Query Builder UI | Syncfusion
description: Lock individual rules or entire groups in the React Query Builder UI to prevent edits, keeping critical conditions unchanged via lockRule and lockGroup.
control: QueryBuilder
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Lock Group/Rule in React Query Builder UI

Prevent modification of specific rules or groups by locking them. When a rule is locked, its field, operator, and value cannot be edited. Locking a group disables all contained elements. This feature provides precise control over query components, ensuring critical conditions remain unchanged. Manage lock button visibility through the [`showButtons`](https://ej2.syncfusion.com/react/documentation/api/query-builder#showbuttons) property.

Lock groups and rules through the user interface or programmatically:

* Use the [`lockGroup`](https://ej2.syncfusion.com/react/documentation/api/query-builder#lockgroup) method with the target `groupId` to lock every child rule in the group.
* Use the [`lockRule`](https://ej2.syncfusion.com/react/documentation/api/query-builder#lockrule) method with the target `ruleId` to prevent edits to that rule.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/lock-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/lock-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/lock-cs1" %}