---
layout: post
title: Appearance in React Inline AI Assist | Syncfusion®
description: Customize the React Inline AI Assist popup appearance by setting width, height, z-index, and custom CSS classes for styling the component.
platform: ej2-react
control: Inline AI Assist
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in React Inline AI Assist

## Component Dimensions

### Popup width

You can use the [popupWidth](../api/inline-ai-assist#width) property to set the width of the Inline AI Assist. The default value is `400px`.

### Popup height

You can use the [popupHeight](../api/inline-ai-assist#height) property to set the height of the Inline AI Assist. The default value is `auto`.

### Z-index

You can use the [zIndex](../api/inline-ai-assist#zindex) property to set z-index for the Inline AI Assist popup. The default value is `1000`.

## Custom styling using cssClass

You can customize the appearance of the Inline AI Assist component by using the [cssClass](../api/inline-ai-assist#cssclass) property.

Below sample demonstrates the usage of above root level properties in Inline Assist component

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/inline-ai-assist/root-config/inline-assist/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/inline-ai-assist/root-config/inline-assist/app/index.tsx %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/inline-ai-assist/root-config/inline-assist/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/root-config/inline-assist" %}
