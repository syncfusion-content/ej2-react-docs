---
layout: post
title: State persistence in React Query builder component | Syncfusion
description: Learn here all about State persistence in Syncfusion React Query builder component of Syncfusion Essential JS 2 and more.
control: QueryBuilder 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# State persistence in React Query Builder component

State persistence automatically saves the Query Builder's configuration in the browser's local storage, preserving the [`rule`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#rule) object across page refreshes and navigation. Enable this feature by setting [`enablePersistence`](https://ej2.syncfusion.com/react/documentation/state-persistence/) to true. This is particularly useful for long-form queries or multi-step workflows where users should not lose their progress.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/default-cs16/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/default-cs16/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/default-cs16" %}