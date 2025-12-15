---
layout: post
title: Cross-Site scripting in React Block Editor Component | Syncfusion
description: Checkout and learn about Cross-Site scripting with React Block Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Block Editor
documentation: ug
domainurl: ##DomainURL##
---

# Cross-Site scripting(XSS) prevention in React Block Editor component

The Block Editor allows users to edit the content with security by preventing cross-site scripting (XSS). By default, it provides built-in support to remove elements from editor content that cause XSS attacks. The editor removes the elements based on the attributes if it is possible to execute a script.

## Enabling XSS prevention

The [enableHtmlSanitizer](https://ej2.syncfusion.com/react/documentation/api/blockeditor/index-default#enablehtmlsanitizer), enabled by default, activates XSS prevention. When active, the editor automatically removes elements like `<script>` and attributes like `onmouseover` from the content.
The following example shows XSS prevention removing a `<script>` tag and `onmouseover` attribute:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/block-editor/enable-html-sanitizer/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/block-editor/enable-html-sanitizer/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/block-editor/enable-html-sanitizer" %}
        