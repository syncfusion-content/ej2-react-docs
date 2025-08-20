---
layout: post
title: Content security policy in React Troubleshoot component | Syncfusion
description: Learn here all about Content security policy in Syncfusion React Troubleshoot component of Syncfusion Essential JS 2 and more.
control: Content security policy 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Content Security Policy

Content Security Policy (CSP) is a browser security feature that helps prevent cross-site scripting (XSS) attacks and data injection by restricting the sources from which content may be loaded.

When using Syncfusion<sup style="font-size:70%">&reg;</sup> React components with a strict CSP, certain browser features are disabled by default. To ensure proper rendering and functionality, include the following directives in your CSP meta tag:

* Syncfusion<sup style="font-size:70%">&reg;</sup> components are rendered with calculated **inline styles** and **base64** font icons, which are blocked on a strict CSP-enabled site. To allow them, add the [`style-src 'self' 'unsafe-inline';`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) and [`font-src 'self' data:;`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/font-src) directives in the meta tag as follows.

{% tabs %}
{% highlight razor tabtitle="HTML" %}

<meta http-equiv="Content-Security-Policy" content="default-src 'self';
    style-src 'self' 'unsafe-inline';
    font-src 'self'  data:;" />

{% endhighlight %}
{% endtabs %}

* Syncfusion<sup style="font-size:70%">&reg;</sup> **material** and **tailwind** built-in themes contain a reference to the [`Roboto’s external font`](https://fonts.googleapis.com/css?family=Roboto:400,500), which is also blocked. To allow them, add the [`external font`](https://fonts.googleapis.com/css?family=Roboto:400,500) reference to the [`style-src`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) and [`font-src`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/font-src) directives in the above meta tag.

The resultant meta tag is included within the `<head>` tag and resolves the CSP violation on the application's side when utilizing Syncfusion<sup style="font-size:70%">&reg;</sup> React components with material and tailwind themes.

{% tabs %}
{% highlight razor tabtitle="HTML" %}

<head>
    ...
    <meta http-equiv="Content-Security-Policy" content="default-src 'self';
    style-src 'self' https://fonts.googleapis.com/ 'unsafe-inline';
    font-src 'self' https://fonts.googleapis.com/ https://fonts.gstatic.com/ data:;" />
</head>

{% endhighlight %}
{% endtabs %}

N> From the 2023 Vol2 - 22.1 release onwards, the Content Security Policy for Syncfusion<sup style="font-size:70%">&reg;</sup> React components has been enhanced. The usage of the `unsafe-eval` directive has been eliminated from the CSP meta tag.

> [View the React sample enabled with strict CSP in Github](https://github.com/SyncfusionExamples/ej2-react-csp-example)

## See also

* [How to resolve the Content Security Policy (CSP) errors](../common/how-to/csp-errors)