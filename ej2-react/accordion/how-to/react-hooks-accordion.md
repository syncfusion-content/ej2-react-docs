---
layout: post
title: How to use React Hooks with Accordion | Syncfusion
description: Prevent child components from re-rendering on state changes by rendering React JSX as children of the Syncfusion React Accordion.
control: React hooks accordion 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to use React Hooks with Accordion

You can prevent the React JSX component reload issue on state changes by rendering the React JSX component as children of Accordion component. In the below example, we have prevented the re-rending of textbox component on state changes in Accordion component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/accordion/react-hooks-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/accordion/react-hooks-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/accordion/react-hooks-cs1" %}
