---
layout: post
title: Dynamic Tooltip content with html elements in React Tooltip component | Syncfusion
description: Learn here all about Dynamic Tooltip content with html elements in Syncfusion React Tooltip component of Syncfusion Essential JS 2 and more.
control: Dynamic Tooltip content with html elements 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Dynamic Tooltip content with html elements in React Tooltip component

Tooltip can display HTML content, including elements such as iframe, video, and map using the [`content`](https://ej2.syncfusion.com/react/documentation/api/tooltip/#content) property. This property accepts both string and HTML tags.

To load an `iframe` element in the tooltip, set the required iframe in the [`content`](https://ej2.syncfusion.com/react/documentation/api/tooltip/#content) of Tooltip while initializing the Tooltip component. Refer to the following code example.

```ts

content: '<iframe src="https://ej2.syncfusion.com/showcase/typescript/expensetracker/#/dashboard"></iframe>'

```

Use the following steps to render `ej2-map` in tooltip:

1. Initialize the map component and create an element. After initialization, append the map object to the element.
2. Set the rendered map element to the content of Tooltip component. Refer to the following sample.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/tooltip/iframe-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/tooltip/iframe-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tooltip/iframe-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tooltip/iframe-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/tooltip/iframe-cs2/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/tooltip/iframe-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tooltip/iframe-cs2" %}
