---
layout: post
title: Preventing Cross-Site Scripting (XSS) | Syncfusion
description: Learn here all about Preventing Cross-Site Scripting (XSS) in Syncfusion React Rich text editor component of Syncfusion Essential JS 2 and more.
control: Preventing Cross-Site Scripting (XSS)
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Preventing Cross-Site Scripting (XSS)

The Rich Text Editor allows users to edit the content with security by preventing cross-site scripting (XSS). By default, it provides built-in support to remove elements from editor content that cause XSS attacks. The editor removes the elements based on the attributes if it is possible to execute a script.

The [enableHtmlSanitize](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#enablehtmlsanitizer) property determines whether XSS prevention is active. It's set to `true` by default.

In the following sample, we removed the `script` tag and `onmouseover` attribute from the content of the Rich Text Editor.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/preventing-xss-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/preventing-xss-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/preventing-xss-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/preventing-xss-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/preventing-xss-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/preventing-xss-cs2" %}

> The XSS prevention feature is only applicable when the [editorMode](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor#editormode) is set to HTML.

## Custom Cross-Site Scripting Prevention

For more precise control over XSS prevention, you can implement custom filtering logic using the [beforeSanitizeHtml](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#beforesanitizehtml) event.

### Implementing Custom Cross-Site Scripting and Filtering in Rich Text Editor

1. Use the [beforeSanitizeHtml](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#beforesanitizehtml) event to define custom filtering rules.
2. Utilize the `helper` function from the event argument to apply your custom filters.
3. Set the `cancel` argument to `true` if you want to override the built-in XSS prevention entirely.

The following sample demonstrates how to filter the `script` tag by value.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/preventing-xss-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/preventing-xss-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/preventing-xss-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/preventing-xss-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/preventing-xss-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/preventing-xss-cs2" %}

You can also filter out the [`e.selectors.tags`](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/sanitizeSelectors/#tags) and [`e.selector.attributes`](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/sanitizeSelectors/#attributes) in the [beforeSanitizeHtml](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#beforesanitizehtml) event to control which HTML tags and attributes are allowed to appear. 

For instance, if you want to display `<iframe>`, By manipulating the `e.selectors.tags` property in this event, you can selectively remove tags like `<iframe>`. This approach ensures that your application can safely display iframe while preventing potential security risks associated with XSS vulnerabilities.

The following sample demonstrates how to filter the `iframe` tag.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/preventing-xss-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/preventing-xss-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/preventing-xss-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/preventing-xss-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/preventing-xss-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/preventing-xss-cs4" %}