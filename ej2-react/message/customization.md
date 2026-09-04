---
layout: post
title: Customization in React Message | Syncfusion
description: Customize React Message content alignment, CSS-based styling, and appearance with built-in classes and the cssClass property.
control: Message
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customization in React Message

The React Message component provides multiple customization options to match your application's design and layout requirements. This guide covers content alignment, visual styling approaches, and CSS-based customization techniques for creating React Messages that integrate seamlessly with your UI.

## Content alignment

By default, React Message content aligns to the left. The React Message component supports alternative alignments using built-in CSS classes: use `e-content-center` to center-align content, or `e-content-right` to right-align content. Content alignment is useful for creating varied layouts, such as centered validation React Messages or right-aligned status notifications.

The following example demonstrates the React Message with different content alignments.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/message/content-alignment-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/message/content-alignment-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/message/content-alignment-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/message/content-alignment-cs1" %}

## Custom appearance

Customize the React Message component's visual styling by applying a custom CSS class through the [cssClass](https://ej2.syncfusion.com/react/documentation/api/message#cssclass) property. The specified class is applied to the root message element, allowing you to override default styles and implement custom designs at the application level.

The following example demonstrates rounded and squared React Message appearance variations achieved through the `cssClass` property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/message/custom-appearance-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/message/custom-appearance-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/message/custom-appearance-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/message/custom-appearance-cs1" %}

## CSS-based React Messages

The Syncfusion React Message component supports rendering via predefined CSS classes without requiring JavaScript initialization. This approach is useful for lightweight implementations where you render React Messages using pure HTML and CSS. CSS-based React Messages are ideal for static content or server-rendered scenarios.

The following DOM structure is required to display the simple React Message with the content.

```bash

<div class="e-message">
    <div class="e-msg-content">..content..</div>
</div>

```

The following DOM structure is required to display the simple React Message with the content and severity icon.

```bash

<div class="e-message">
    <span class="e-msg-icon"></span>
    <div class="e-msg-content">..content..</div>
</div>

```

The following is the available list of predefined CSS classes to make the appearance of a React Message.

| Class | Description |
| -------- | -------- |
| e-message | Represents the React Message wrapper. |
| e-msg-icon | Represents the severity type icon. |
| e-msg-content | Represents the React Message content. |
| e-msg-close-icon | Represents the close icon. |
| e-info | Represents the information React Message. |
| e-success | Represents the success React Message. |
| e-warning | Represents the warning React Message. |
| e-error | Represents the error React Message. |
| e-content-center | Aligns the React Message content to the center. |
| e-content-right | Aligns the React Message content to the right. |

The following example demonstrates CSS-based React Message rendering using predefined classes.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/message/css-message-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/message/css-message-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/message/css-message-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/message/css-message-cs1" %}
