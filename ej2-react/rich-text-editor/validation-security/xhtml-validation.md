---
layout: post
title: Xhtml validation in React Rich text editor component | Syncfusion
description: Learn here all about Xhtml validation in Syncfusion React Rich text editor component of Syncfusion Essential JS 2 and more.
control: Xhtml validation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# XHTML validation in React Rich Text Editor Component

The editor includes an [`enableXhtml`](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#enablexhtml) property that allows for continuous validation of the Rich Text Editor's source content against the XHTML standard. When content is entered or modified in the editor, this feature ensures ongoing compliance by automatically removing invalid elements and attributes.

The editor checks the following settings on validation:

## Validating Attributes

* **Case Sensitivity**: All attributes must be in lowercase.
* **Quotation Marks**: Proper use of quotation marks around attribute values is enforced.
* **Validity**: Only valid attributes for corresponding HTML elements are allowed.
* **Required Attributes**: All required attributes for HTML elements must be included.

## Validating HTML Elements
* **Case Sensitivity**: All HTML tags must be in lowercase.
* **Proper Closing**: All opening tags must have corresponding closing tags.
* **Element Validity**: Only valid HTML elements are permitted.
* **Nesting**: Elements must be properly nested to maintain structure.
* **Root Element**: The content must have a single root element.
* **Element Hierarchy**: Inline elements cannot contain block elements.

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

## Cross-Site scripting (XSS)

The Rich Text Editor allows users to edit the content with security by preventing cross-site scripting (XSS). By default, it provides built-in support to remove elements from editor content that cause XSS attacks. The editor removes the elements based on the attributes if it is possible to execute a script.

### Enable XSS validation

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

### Custom cross-site scripting prevention

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
>>>>>>> 254cf0c7df3b045080748c4bc063b2ca00d89b31
