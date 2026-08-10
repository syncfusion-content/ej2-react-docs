---
layout: post
title: How to persist state in React Query Builder UI | Syncfusion
description: Persist React Query Builder UI rules in the browser's local storage across refreshes by enabling the enablePersistence property for long-form queries.
control: QueryBuilder 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to maintain the state persistence in React Query Builder UI

State persistence automatically saves the Query Builder's configuration in the browser's local storage, preserving the [`rule`](https://ej2.syncfusion.com/react/documentation/api/query-builder#rule) object across page refreshes and navigation. Enable this feature by setting [`enablePersistence`](https://ej2.syncfusion.com/react/documentation/state-persistence) to true. This is particularly useful for long-form queries or multi-step workflows where users should not lose their progress.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/default-cs16/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/default-cs16/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/default-cs16" %}