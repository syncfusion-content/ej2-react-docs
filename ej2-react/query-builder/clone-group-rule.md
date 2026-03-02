---
layout: post
title: Clone Group/Rule in React Query builder component | Syncfusion
description: Learn here all about Clone Group/Rule in Syncfusion React Query builder component of Syncfusion Essential JS 2 and more.
control: QueryBuilder 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Clone Group/Rule in React Query Builder component

The Query Builder allows you to duplicate individual rules or entire groups, creating exact copies adjacent to the originals. This feature streamlines the construction of complex queries by eliminating the need to manually recreate similar rule structures. Control the visibility of cloning buttons using the [`showButtons`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#showbuttons) property.

Clone groups and rules through the user interface or programmatically:

* Use the [`cloneGroup`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#clonegroup) method to clone a group.
* Use the [`cloneRule`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#clonerule) method to clone a rule.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/clone-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/clone-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/clone-cs1" %}