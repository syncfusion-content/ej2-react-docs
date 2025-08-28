---
layout: post
title: Appearance in React AI AssistView component | Syncfusion
description:  Checkout and learn about Appearance with React AI AssistView component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in React AI AssistView component

The Syncfusion AI AssistView for React allows for customization of its dimensions and overall look and feel. This can be achieved by setting the component's width and height or by applying custom CSS styles.

## Setting Component Width

The [width](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#width) property allows you to define the width of the AI AssistView container. You can set this value as a string, using either pixels (e.g., `"500px"`) or a percentage (e.g., `"50%"`). By default, the width is set to `100%`, allowing it to fill its parent container.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/appearance/width/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/appearance/width/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/appearance/width" %}

## Setting Component Height

The [height](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#height) property allows you to define the height of the AI AssistView container. This value can be a string, specified in pixels (e.g., `"600px"`) or as a percentage (e.g., `"100%"`). The default value is `100%`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/appearance/height/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/appearance/height/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/appearance/height" %}

## Applying Custom CSS Styles

For more advanced style customizations, you can use the [cssClass](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#cssclass)  property to apply one or more custom CSS classes to the AI AssistView component's root element.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/appearance/cssClass/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/appearance/cssClass/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ai-assistview/appearance/cssClass/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/appearance/cssClass" %}