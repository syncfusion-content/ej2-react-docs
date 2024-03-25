---
layout: post
title:  Lock Group/Rule in React Query builder component | Syncfusion
description: Learn here all about Lock Group/Rule in Syncfusion React Query builder component of Syncfusion Essential JS 2 and more.
control: Lock Group/Rule
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Lock Group/Rule in React Query builder component

The Query Builder provides the functionality to lock individual rules or entire groups. When a rule is locked, it prevents users from modifying its field, operator, and value, effectively disabling these components. Similarly, locking a group disables all elements contained within it. This feature offers users greater control over their query configurations, ensuring that specific rules or groups remain unchanged. Additionally, users can manage the visibility of locking buttons through the [`showButtons`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#showbuttons) function, allowing for seamless control over the locking mechanism.

You can lock groups and rules by interacting through the user interface and methods.

* Use the [`lockGroup`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#lockGroup) method to lock group.
* Use [`lockRule`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#lockRule) method to lock rule.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/lock-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/lock-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/lock-cs1" %}