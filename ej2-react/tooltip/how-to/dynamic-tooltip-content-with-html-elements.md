---
layout: post
title: Dynamic tooltip content with html elements in React Tooltip component | Syncfusion
description: Learn here all about Dynamic tooltip content with html elements in Syncfusion React Tooltip component of Syncfusion Essential JS 2 and more.
control: Dynamic tooltip content with html elements 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Dynamic tooltip content with html elements in React Tooltip component

Tooltip loads HTML pages via HTML tags such as iframe, video, and map using the [`content`](https://ej2.syncfusion.com/react/documentation/api/tooltip/#content) property, which supports both string and HTML tags.

To load an `iframe` element in tooltip, set the required iframe in the `content` of tooltip while initializing the tooltip component. Refer to the following code.

```ts

content: '<iframe src="https://ej2.syncfusion.com/showcase/typescript/expensetracker/#/dashboard"></iframe>'

```

Use the following steps to render `ej2-map` in tooltip:

1. Initialize the map component and create an element. After initialization, append the map object to the element.
2. Set the rendered map element to the content of tooltip component. Refer to the following sample.

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
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tooltip/iframe-cs2" %}
