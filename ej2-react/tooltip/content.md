---
layout: post
title: Content in React Tooltip component | Syncfusion
description: Learn here all about Content in Syncfusion React Tooltip component of Syncfusion Essential JS 2 and more.
control: Content 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Content in React Tooltip component

The text or information assigned to the Tooltip's [content](https://ej2.syncfusion.com/react/documentation/api/tooltip/#content) property will be displayed as the main content of the Tooltip.
This content can be either a string or a template. If the [content](https://ej2.syncfusion.com/react/documentation/api/tooltip/#content) property is not provided with any specific value, then it takes the value assigned to the `title` attribute of the target element on which the Tooltip was initialized. The content can also dynamically be assigned to the Tooltip via Fetch.

## Template content

Any text or image can be added to the Tooltip, by default. To customize the Tooltip layout or create your own visualized element within the Tooltip, you can use a template.

Refer to the following code example to add formatted HTML content to the Tooltip.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tooltip/content-1-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tooltip/content-1-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/tooltip/content-1-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/tooltip/content-1-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tooltip/content-1-cs1" %}

## Dynamic content via Fetch

The Tooltip content can be dynamically loaded using a Fetch call. The Fetch request is usually made within the [beforeRender](https://ej2.syncfusion.com/react/documentation/api/tooltip/#beforerender) event of the Tooltip, and then the Tooltip's [content](https://ej2.syncfusion.com/react/documentation/api/tooltip/#content) is assigned the value retrieved on its success.

N> The Tooltip **target** property includes a unique identifier used to associate Tooltips with specific elements on a webpage or application interface. When setting the Tooltip **target** value as a GUID (Globally Unique Identifier), it's important to note that the GUID must start with a combination of **letters** before the numeric portion of the GUID. For example, **target: '#' +  ' tooltip'+ '96ad88bd-294c-47c3-999b-a9daa3285a05'**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tooltip/ajax-content-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tooltip/ajax-content-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/tooltip/ajax-content-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tooltip/ajax-content-cs1" %}
