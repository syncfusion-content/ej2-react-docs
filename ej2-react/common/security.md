---
layout: post
title: Security Considerations in React Common control | Syncfusion
description: Learn here all about Security Considerations in Syncfusion React Common control of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: common
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Syncfusion<sup style="font-size:70%">&reg;</sup> React components - Security

Security is critical in web application development to safeguard against threats and vulnerabilities. Common best practices include using HTTPS for data encryption, validating and sanitizing user inputs, and enforcing strong authentication measures such as multi-factor authentication.

Syncfusion<sup style="font-size:70%">&reg;</sup> React components are developed with these security considerations in mind to promote the safe deployment of robust web applications.

## Security Vulnerabilities

Web application security vulnerabilities are weaknesses in the design, implementation, or configuration that may be exploited to compromise data integrity, confidentiality, or availability. Syncfusion<sup style="font-size:70%">&reg;</sup> React components are designed to help mitigate common vulnerabilities, including:

* [Cross-Site Scripting (XSS)](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting) – XSS occurs when user-supplied input is rendered without proper validation or encoding. Malicious scripts can be executed in the user's browser, leading to the theft of session cookies, redirection to malicious sites, or website defacement.
* [Cross-Site Request Forgery (CSRF)](https://developer.mozilla.org/en-US/docs/Glossary/CSRF) – CSRF enables attackers to trick authenticated users into performing unintended actions on a web application. This exploits trust in the user's browser by sending unauthorized requests without their consent.
* Injection Attacks – These involve injecting malicious code (such as SQL injection, XML injection, or command injection) through input fields or parameters. If proper input validation is missing, an attacker could execute commands or gain unauthorized access to sensitive data.

## Security Considerations

Security holds significant importance in software development, and the incorporation of security measures from the outset of the development process is vital for the protection of applications. Syncfusion<sup style="font-size:70%">&reg;</sup> takes a thorough approach to security in the development of React components, encompassing all critical aspects. The following considerations provide a comprehensive overview of security measures.

* [Content Security Policy](#content-security-policy)
* [HTML Sanitizer](#html-sanitizer)
* [Browser Storage](#browser-storage)

### Content Security Policy

[Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) (CSP) is a one of the security feature, that helps the detect the cross-site-scripting(XSS) attacks and malicious code injection. It will throw the errors and warnings while using the inline-styles and inline scripts, eval, new Function, etc in your applications.

To implement Content Security Policy (CSP) in your application, include a `<meta>` tag with specified CSP directives. Syncfusion<sup style="font-size:70%">&reg;</sup> React components have been designed and implemented with adherence to these CSP directives, ensuring enhanced security. These directives are below.

#### CSP Directives

The following directives are essential<sup style="font-size:70%">&reg;</sup> for utilizing Syncfusion<sup style="font-size:70%">&reg;</sup> React components.

|    Directives    |    Description    |    Examples    |
|------------------|-------------------|----------------|
|  `style-src`  | Defines the allowed sources for loading stylesheets. This helps mitigate style-based attacks by restricting the locations from which styles can be applied. | `style-src 'self' https://cdn.syncfusion.com/ https://fonts.googleapis.com/ 'unsafe-inline';`|
|  `font-src`  | Defines the allowed sources for loading fonts. It helps prevent font-related security issues by restricting the locations from which fonts can be loaded. | `font-src 'self' https://fonts.googleapis.com/ https://fonts.gstatic.com/ data: cdn.syncfusion.com 'unsafe-inline';` |
|  `img-src`  | Specifies the allowed sources for loading images. It helps control from where images can be displayed on the web page. | `img-src 'self' data:"` |

> Utilizing a web worker within the Spreadsheet Control for exporting necessitates the addition of a specific directive to ensure proper functionality during the export process.
`worker-src 'self' 'unsafe-inline' * blob:;`

#### CSP Sources

The following sources refer to the origins from which resources such as styles, images, fonts are allowed to be loaded and executed on a web page.

|  Source  |  Description  | Examples  |
|----------|---------------|-----------|
|  `self`  |  Refers to the origin from which the protected document is being served, including the same URL scheme and port number  |  `style-src 'self'`  |
|  `data`  | Enables a website to fetch resources using the data scheme, such as loading Base64-encoded images.  |  `img-src 'self' data:`  |
|  `unsafe-inline`  | Allows the use of inline resources, such as inline `style` elements.  |  `style-src 'self' https://fonts.googleapis.com/ 'unsafe-inline'`  |

To know more information about the CSP, refer this [documentation](https://ej2.syncfusion.com/react/documentation/troubleshoot/content-security-policy).

### HTML Sanitizer

An HTML sanitizer is a tool or program that helps remove potentially malicious or harmful code from HTML documents. This type of sanitizer is commonly used in web applications to prevent cross-site scripting (XSS) attacks, which can inject malicious code into a website and compromise user data. HTML sanitizers typically work by analyzing HTML code and removing any potentially dangerous or unwanted elements, such as script tags, inline styles, or event handlers. Other aspects of the HTML may also be modified or cleaned up, such as removing extra whitespace or fixing malformed code.

To avoid the risk of code injection, Syncfusion<sup style="font-size:70%">&reg;</sup> has provided the [enableHtmlSanitizer](https://ej2.syncfusion.com/react/documentation/api/button/#enablehtmlsanitizer/) API into its UI controls. This ensures that HTML strings submitted by users are sanitized, enhancing security measures against potential threats.

When this property is enabled, the HTML string undergoes a thorough sanitization process before being rendered in the component. This approach ensures that user inputs containing potential security threats are meticulously filtered, addressing the risk of XSS and contributing to the overall security robustness of our components in the face of potential attacks.

To sanitize input values in a web application using Syncfusion<sup style="font-size:70%">&reg;</sup> sanitizer, you can use the following code.

```js

import { SanitizeHtmlHelper } from '@syncfusion/ej2-base';

let html = '<script>alert("XSS");</script>';

let sanitizedHtml = SanitizeHtmlHelper.sanitize(html);
```

For sanitizing the template content using Syncfusion<sup style="font-size:70%">&reg;</sup> React components, please see the provided code below.

```ts

import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from 'react';
import { SanitizeHtmlHelper } from '@syncfusion/ej2-base';
function App() {
  return (
    <div className="App" id="dialog-target">
      <DialogComponent
        width="250px"
        enableHtmlSanitizer={false}
        target="#dialog-target"
        showCloseIcon={true}
        header={SanitizeHtmlHelper.sanitize('<div id="dlg-template"  title="Nancy" class="e-icon-settings"> Nancy <div><div onmousemove=function(){alert("XSS")}>XSS</div>')}
        closeOnEscape={false}
      >
        This is a dialog with header{' '}
      </DialogComponent>
    </div>
  );
}
export default App;

```


{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/enable-sanitizer-cs1/app/index.jsx %} 
{% endhighlight %}
{% highlight js tabtitle="index.tsx" %}
{% include code-snippet/common/enable-sanitizer-cs1/app/index.tsx %} 
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/enable-sanitizer-cs1" %}


When `enableHtmlSanitizer` is `true`, the content will be sanitized and displays the code.

![With sanitizer property](images/with-sanitizer-property.png)

When `enableHtmlSanitizer` is `false` or not included this property, the malicious code will be interpreted as script, and the alert pop-up window will be open.

![Without sanitizer property](images/without-sanitizer-property.png)

### Browser Storage

Browser storage refers to the mechanisms provided by web browsers to store data locally on a user's device. Syncfusion<sup style="font-size:70%">&reg;</sup> React components utilize the following storage options only.

* Local Storage

#### Local Storage

[Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) is a type of web storage mechanism provided by web browsers that allows web applications to store data locally on a user's device. It provides a simple key-value pair storage interface and is accessible via React.

Syncfusion<sup style="font-size:70%">&reg;</sup> React components utilize local storage only when persistence is enabled.
