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

When using Syncfusion React components with a strict [Content-Security-Policy (CSP)](https://csp.withgoogle.com/docs/strict-csp.html) mode enabled, some browser features are disabled. Since we’re using the following browser features, they are disabled by default.

* Syncfusion component uses **base64** as a font icon and it is not allowed in strict CSP enabled site. To overcome this, it’s necessary to add the [`font-src data:`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/font-src) in the meta tag.

* For the built in themes and styles, we use the **inline styles** and [Roboto’s external font](https://fonts.googleapis.com/css?family=Roboto:400,500), which is also blocked. To allow them [style-src ‘self’ unsafe-inline](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script) must be included in the meta tag.

* The **new()** and the **eval()** are blocked, which evaluates the Dynamic code evaluation while only the template is applied to the Syncfusion components. You must utilize the [script-src ‘self’ unsafe-eval](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_eval_expressions) in the meta tag for enabling.

The following resultant meta tag is required to overcome the CSP violation at the application side while using Syncfusion components.

```
<meta http-equiv="Content-Security-Policy" content="default-src 'none';
script-src 'self' 'unsafe-eval';
style-src 'self' https://fonts.googleapis.com/ ‘unsafe-inline’;
font-src 'self' https://fonts.googleapis.com/ https://fonts.gstatic.com/ data: cdn.syncfusion.com 'unsafe-inline'; />
```