---
layout: post
title: Events in React Timeline component | Syncfusion
description:  Checkout and learn about Events with Syncfusion React Timeline component of Syncfusion Essential JS 2 and more.
control: Timeline
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Events in React Timeline component

This section describes the Timeline events that trigger when appropriate actions are performed. The following events are available in the Timeline component.

## created

The Timeline component triggers the [created](https://ej2.syncfusion.com/react/documentation/api/timeline/#created) event when the component rendering process is completed and the Timeline is ready for interaction.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timeline/events/created/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timeline/events/created/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/timeline/events/created/index.css %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/events/created/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/events/created" %}

## beforeItemRender

The Timeline component triggers the [beforeItemRender](https://ej2.syncfusion.com/react/documentation/api/timeline/#beforeitemrender) event before rendering each timeline item, allowing customization of individual items during the rendering process.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timeline/events/beforeItemRender/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timeline/events/beforeItemRender/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/timeline/events/beforeItemRender/index.css %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/events/beforeItemRender/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/events/beforeItemRender" %}