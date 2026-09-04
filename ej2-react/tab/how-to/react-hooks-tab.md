---
layout: post
title: How to use React Hooks with Tab in React Tab | Syncfusion
description: Prevent child components from re-rendering on state changes by rendering React JSX as children of the Syncfusion React Tab item.
control: React hooks tab 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to use React Hooks with Tab in React Tab

You can prevent the React JSX component reload issue on state changes by rendering the React JSX component as a child of the React Tab component. In the following example, the re-rendering of a TextBox component on React Tab state changes is prevented by passing its element as a React Tab item child.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tab/react-hooks-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tab/react-hooks-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tab/react-hooks-cs1" %}
