---
layout: post
title: Icons in React Message component | Syncfusion
description: Learn here all about Icons in Syncfusion React Message component of Syncfusion Essential JS 2 and more.
control: Icons 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Icons in React Message component

This section explains the message with no icons, how to show or hide the close icon and add the custom severity icon to the message.

## No Icon

By default, severity icons can be displayed according to the severity types to make it more understandable to the user by visual information rather than text. To hide the severity icons, set the `showIcon` property to `false`.

The following example demonstrates the different severity messages without the severity icons.

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

## Custom Icon

By default, the severity icons can be displayed according to the severity type to make it more understandable to the user by visual information rather than text. If the user wants to customize these icons, it can be achieved through the `cssClass` property.

The following example demonstrates how the default message is rendered with a custom severity icon.

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

## Close Icon

The message can be rendered with or without the close icon. The close icon is used to hide the message, either by manually clicking the close icon or through keyboard interaction.

By default, the close icon is not rendered in the message. To show the close icon, set the `showCloseIcon` property to `true`.

In the following example, the messages are rendered with the close icon.

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
