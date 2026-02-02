---
layout: post
title: How to resolve Content Security Policy in Syncfusion
description: Learn how to resolve Content Security Policy (CSP) issues with Syncfusion React components, including license banner base64 image handling and required directives for inline styles and fonts.
platform: ej2-react
control: common
documentation: ug
domainurl: ##DomainURL##
---

# How to resolve Content Security Policy (CSP) errors

[Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) (CSP) is a browser security feature that helps prevent cross-site scripting (XSS) and data injection attacks by restricting the sources from which content can be loaded or executed.

To enforce CSP, add a <meta> tag in the document <head> with the desired policy directives. Syncfusion® React components are designed to be largely compatible with strict CSP configurations, but certain features—particularly in trial or unlicensed mode—require specific allowances.

The most frequent CSP violation occurs with the Syncfusion® license banner (shown during trial or when no valid license key is registered). This banner uses an inline base64-encoded image, which requires the `img-src` directive to permit the `data:` scheme.

## How to resolve CSP errors due to licensing banner?

The Syncfusion® license banner uses a base64-encoded image. Strict CSP configurations block `data:` URIs by default, causing the banner to fail to load. To resolve this, choose one of the following approaches:

- **Recommended**: Register a valid license key following the [license key registration](https://ej2.syncfusion.com/react/documentation/licensing/license-key-registration) instructions. This removes the license banner entirely, eliminating the need for any `data:` allowance in CSP for the banner.
- **Alternative**: Add `data:` to the `img-src` directive in your CSP meta tag (or server header) to explicitly allow inline base64 images:

```html
<meta http-equiv="Content-Security-Policy" content="img-src 'self' data:;">
```
