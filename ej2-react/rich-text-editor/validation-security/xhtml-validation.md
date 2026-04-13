---
layout: post
title: Xhtml Validation in React Rich text editor component | Syncfusion
description: Learn how to enable XHTML validation and XSS prevention in the Syncfusion React Rich text editor component of Syncfusion Essential JS 2 and more.
control: Xhtml Validation
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# XHTML validation in React Rich Text Editor Component

The Syncfusion React Rich Text Editor provides features to ensure content complies with XHTML standards and is secure against cross-site scripting (XSS) attacks. The `enableXhtml` property enforces continuous XHTML validation, while `enableHtmlSanitizer` and the `beforeSanitizeHtml` event protect against XSS vulnerabilities. These features are essential for maintaining standards-compliant and secure content, particularly when `editorMode` is set to `HTML`.

## XHTML validation

The editor includes an [`enableXhtml`](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#enablexhtml) property that allows for continuous validation of the Rich Text Editor's source content against the XHTML standard. When content is entered or modified in the editor, this feature ensures ongoing compliance by automatically removing invalid elements and attributes.

### Validating attributes

When `enableXhtml` is set to `true`, the editor enforces the following attribute rules:

* **Case Sensitivity**: Attributes must be lowercase (e.g., `class`, not `CLASS`).
* **Quotation Marks**: Attribute values must be enclosed in quotation marks..
* **Validity**: Only valid attributes for corresponding HTML elements are allowed.
* **Required Attributes**: Required attributes for HTML elements must be included (e.g., `alt` for `<img>`).

### Validating HTML elements

The editor also enforces these element rules:

* **Case Sensitivity**: HTML tags must be lowercase (e.g., `<p>`, not `<P>`).
* **Proper Closing**: All opening tags must have corresponding closing tags.
* **Element Validity**: Only valid HTML elements are permitted.
* **Nesting**: Elements must be properly nested to maintain structure.
* **Root Element**: The content must have a single root element.
* **Element Hierarchy**: Inline elements cannot contain block elements (e.g., `<span>` cannot contain `<div>`).

The following example demonstrates enabling XHTML validation:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs78/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs78/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs78" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs79/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs79/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs79" %}

## Cross-Site scripting (XSS) prevention

The Rich Text Editor allows users to edit the content with security by preventing cross-site scripting (XSS). By default, it provides built-in support to remove elements from editor content that cause XSS attacks. The editor removes the elements based on the attributes if it is possible to execute a script.

### Enabling XSS prevention

The [enableHtmlSanitize](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#enablehtmlsanitizer), enabled by default, activates XSS prevention. When active, the editor automatically removes elements like `<script>` and attributes like `onmouseover` from the content.
The following example shows XSS prevention removing a `<script>` tag and `onmouseover` attribute:

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

### Custom XSS prevention

For more precise control over XSS prevention, you can implement custom filtering logic using the [beforeSanitizeHtml](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#beforesanitizehtml) event.

### Implementing custom cross-site scripting and fililtering in Rich Text Editor

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