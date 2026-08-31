---
layout: post
title: How to render with rules in React Query Builder UI | Syncfusion
description: Preload the React Query Builder UI with rules at startup using the rule property to render saved or template-based query conditions immediately.
control: QueryBuilder 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to render with rules in React Query Builder UI

Initialize the Query Builder with predefined rules using the [`rule`](https://ej2.syncfusion.com/react/documentation/api/query-builder#rule) property. This allows you to load saved or template-based query conditions on component initialization. The `rule` property accepts a [`RuleModel`](https://ej2.syncfusion.com/react/documentation/api/query-builder/ruleModel) object whose structure mirrors the input of the [`setRules`](https://ej2.syncfusion.com/react/documentation/api/query-builder#setrules) method.

## Rule JSON shape

A minimal `rule` object contains a top-level `condition` and a `rules` array. Each item in `rules` can be either a condition (a group) or a leaf condition:

> The `rule` property is read at component initialization. To replace the rule set after the component is mounted, use the [`setRules`](https://ej2.syncfusion.com/react/documentation/api/query-builder#setrules) method.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/default-cs12/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/default-cs12/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/default-cs12" %}

> In this sample, the datasource (`employeeData`) is imported from a separate datasource TypeScript file.
