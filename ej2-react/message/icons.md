---
layout: post
title: Icons in React Message | Syncfusion
description: Show, hide, or customize severity and close icons in React Messages via the showIcon and cssClass properties.
control: Message
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Icons in React Message

The React Message component supports configurable icon display options, including severity icons (which visually communicate React Message type) and close icons (which enable React Message dismissal). This guide covers disabling severity icons, customizing icon appearance, and managing close icon visibility.

## Severity icons

By default, the React Message component displays severity icons that correspond to the React Message severity type, enhancing visual communication beyond text alone. To hide these severity icons, set the [showIcon](https://ej2.syncfusion.com/react/documentation/api/message#showicon) property to `false`.

The following example shows React Messages with severity icons disabled using the `showIcon` property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/message/severity-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/message/severity-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/message/severity-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/message/severity-cs1" %}

## Custom severity icons

Customize the default severity icons by applying CSS overrides through the [cssClass](https://ej2.syncfusion.com/react/documentation/api/message#cssclass) property. This allows you to replace default icons with custom icon fonts or images that match your application's design system.

The following example shows how to apply custom severity icons using CSS styling.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/message/custom-icon-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/message/custom-icon-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/message/custom-icon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/message/custom-icon-cs1" %}

## Close icon

The React Message component can display a close icon that allows users to dismiss the React Message via mouse click or keyboard interaction. By default, the close icon is not displayed. To enable the close icon, set the [showCloseIcon](https://ej2.syncfusion.com/react/documentation/api/message#showcloseicon) property to `true`.

The following example demonstrates React Messages rendered with the close icon enabled.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/message/close-icon-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/message/close-icon-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/message/close-icon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/message/close-icon-cs1" %}
