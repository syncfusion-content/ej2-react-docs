---
layout: post
title: Content Security Policy (CSP) Configuration for React Components | Syncfusion
description: Learn how to configure Content Security Policy (CSP) for Syncfusion React components to prevent security violations.
control: Content security policy 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Content Security Policy

Content Security Policy (CSP) is a browser security feature that helps prevent cross-site scripting (XSS) attacks and data injection by restricting the sources from which content such as scripts, styles, images, and fonts can be loaded.

## Why Configure CSP for Syncfusion<sup style="font-size:70%">&reg;</sup> Components

When using Syncfusion<sup style="font-size:70%">&reg;</sup> React components in applications with a strict CSP, certain browser features required by the components may be blocked by default. This can result in:

* Styles not being applied correctly
* Icons and fonts not rendering
* Console errors related to CSP violations

To ensure proper rendering and functionality of Syncfusion<sup style="font-size:70%">&reg;</sup> React components, specific CSP directives must be included in your application.

## Required CSP Directives

### 1. Allow Inline Styles and Base64 Fonts

Syncfusion<sup style="font-size:70%">&reg;</sup> components are rendered with calculated **inline styles** and **base64-encoded** font icons. On a strict CSP-enabled site, these are blocked by default. To allow them, add the [`style-src 'self' 'unsafe-inline';`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) and [`font-src 'self' data:;`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/font-src) directives:

{% tabs %}
{% highlight html tabtitle="HTML" %}

<meta http-equiv="Content-Security-Policy" content="default-src 'self';
    style-src 'self' 'unsafe-inline';
    font-src 'self' data:;" />

{% endhighlight %}
{% endtabs %}

### 2. Allow External Fonts for Material and Tailwind Themes

Syncfusion<sup style="font-size:70%">&reg;</sup> **Material** and **Tailwind** themes contain a reference to [Roboto's external font](https://fonts.googleapis.com/css?family=Roboto:400,500), which is also blocked by default. To allow this external font, add the font reference to both the [`style-src`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) and [`font-src`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/font-src) directives.

The complete meta tag for applications using Material or Tailwind themes should be included within the `<head>` tag:

{% tabs %}
{% highlight html tabtitle="HTML" %}

<head>
    ...
    <meta http-equiv="Content-Security-Policy" content="default-src 'self';
    style-src 'self' https://fonts.googleapis.com/ 'unsafe-inline';
    font-src 'self' https://fonts.googleapis.com/ https://fonts.gstatic.com/ data:;" />
</head>

{% endhighlight %}
{% endtabs %}

## CSP Configuration by Theme

Different themes require different CSP configurations:

| Theme | External Font Required | Required Directives |
|-------|------------------------|---------------------|
| **Bootstrap, Bootstrap 4, Bootstrap 5, Fabric, Fluent, HighContrast** | No | `style-src 'self' 'unsafe-inline';`<br>`font-src 'self' data:;` |
| **Material, Material 3, Tailwind** | Yes (Roboto font) | `style-src 'self' https://fonts.googleapis.com/ 'unsafe-inline';`<br>`font-src 'self' https://fonts.googleapis.com/ https://fonts.gstatic.com/ data:;` |

## Troubleshooting CSP Issues

### Common CSP Violations

If CSP is not configured correctly, you may encounter the following issues:

**Symptoms:**
* Components appear unstyled or with missing icons
* Console errors such as:
  * `Refused to apply inline style because it violates the following Content Security Policy directive`
  * `Refused to load the font 'data:...' because it violates the following Content Security Policy directive`

**Solution:**
Ensure the CSP meta tag includes the required directives as outlined above.

### Material/Tailwind Theme Font Issues

**Symptoms:**
* Roboto font fails to load
* Console error: `Refused to load the stylesheet 'https://fonts.googleapis.com/...'`

**Solution:**
Add `https://fonts.googleapis.com/` and `https://fonts.gstatic.com/` to both `style-src` and `font-src` directives.

## Additional Notes

> From the 2023 Vol 2 (v22.1) release onwards, Content Security Policy for Syncfusion<sup style="font-size:70%">&reg;</sup> React components has been enhanced. The usage of the `unsafe-eval` directive has been eliminated from the CSP requirements, improving overall security.

> For specific CSP considerations related to individual components (such as the Spreadsheet component requiring `worker-src` for web workers), refer to component-specific documentation.

## Sample Application

View a complete React application with strict CSP enabled:

> [React CSP Example on GitHub](https://github.com/SyncfusionExamples/ej2-react-csp-example)

## See Also

* [How to resolve the Content Security Policy (CSP) errors](../common/how-to/csp-errors)
* [Security Considerations](../common/security)
* [MDN: Content Security Policy Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)