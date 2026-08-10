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

Initialize the Query Builder with predefined rules using the [`rule`](https://ej2.syncfusion.com/react/documentation/api/query-builder#rule) property. This allows you to load saved or template-based query conditions on component initialization.

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
