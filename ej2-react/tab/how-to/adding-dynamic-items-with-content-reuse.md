---
layout: post
title: Adding dynamic items with content reuse in React Tab component | Syncfusion
description: Learn here all about Adding dynamic items with content reuse in Syncfusion React Tab component of Syncfusion Essential JS 2 and more.
control: Adding dynamic items with content reuse 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Adding dynamic items with content reuse in React Tab component

You can add dynamic tabs by reusing the content using React **template**. Tabs can be added dynamically by passing array of items and index value to the [`addTab`](https://ej2.syncfusion.com/react/documentation/api/tab#addtab) method.

Content reuse can be achieved by using the following steps:
1. Declare a template within the function returns jsx element. If the template does not need arguments no need to pass the properties.
2. Assign the function as value for the template property.
3. Provide separate template declaration for each react component and pass content by dynamically adding tab. It will reuse the content of react component.

Refer to the following sample.

{% tabs %}
{% highlight js tabtitle="dropdown.jsx" %}
{% include code-snippet/tab/content-reuse-cs1/app/Dropdown.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="dropdown.tsx" %}
{% include code-snippet/tab/content-reuse-cs1/app/Dropdown.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tab/content-reuse-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tab/content-reuse-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tab/content-reuse-cs1" %}