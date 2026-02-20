---
layout: post
title: Shimmer effect in React Skeleton component | Syncfusion
description: Learn here all about Shimmer effect in Syncfusion React Skeleton component of Syncfusion Essential JS 2 and more.
control: Skeleton
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Shimmer effect in React Skeleton component

Shimmer effects provide animated visual feedback during content loading, signaling to users that the application is actively retrieving content. Configure the animation style using the [`shimmerEffect`](https://ej2.syncfusion.com/react/documentation/api/skeleton/#shimmereffect) property. The Skeleton component supports three shimmer effect types: Wave (default), Pulse, and Fade. Each effect creates a different visual impression while conveying the same "loading" message.

## Effect types

The Skeleton component supports the following shimmer effects:

* **Wave** (default) - Creates a flowing wave animation across the skeleton, mimicking scanning motion
* **Pulse** - Creates a uniform fading in and out animation, simulating breathing or pulsing content
* **Fade** - Creates a gradual fade animation, providing subtle visual feedback

## Example

The following example demonstrates a list with pulse effect skeleton:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/skeleton/effect-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/skeleton/effect-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/skeleton/effect-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/skeleton/effect-cs1" %}