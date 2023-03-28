---
layout: post
title: State persistence in React Query builder component | Syncfusion
description: Learn here all about State persistence in Syncfusion React Query builder component of Syncfusion Essential JS 2 and more.
control: State persistence 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# State persistence in React Query builder component

State persistence allows you to maintain the current state in the browser’s `localStorage` even if the browser is refreshed or if you move to the next page within the browser. State persistence stores the Query Builder’s [`rule`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#rule) object in the local storage when the [`enablePersistence`](https://ej2.syncfusion.com/react/documentation/state-persistence/) is defined to true.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/default-cs16/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/default-cs16/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/default-cs16" %}