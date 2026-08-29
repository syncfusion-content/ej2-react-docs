---
layout: post
title: How to add dynamic Tabs with content reuse in React | Syncfusion
description: Add new Syncfusion React Tab items at runtime that reuse an existing component or template via the addTab method.
control: Adding dynamic items with content reuse 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to add dynamic Tabs with content reuse in React

You can add dynamic tabs by reusing the content using a React **template**. Tabs can be added dynamically by passing an array of items and an index value to the [`addTab`](https://ej2.syncfusion.com/react/documentation/api/tab#addtab) method.

Content reuse can be achieved by using the following steps:
1. Declare a template within a function that returns a JSX element. If the template does not need arguments, there is no need to pass any properties.
2. Assign the function as the value for the template property.
3. Provide a separate template declaration for each React component and pass content by dynamically adding a tab. This reuses the content of the React component.

Refer to the following sample.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tab/content-reuse-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tab/content-reuse-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tab/content-reuse-cs1" %}