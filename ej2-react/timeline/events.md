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

This section describes the Timeline events that will be triggered when an appropriate actions are performed. The following events are available in the Timeline component.

## created

The Timeline component triggers the `created` event when the component rendering is completed.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timeline/events/created/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timeline/events/created/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/events/created" %}

## beforeItemRender

The Timeline component triggers the `beforeItemRender` event before rendering each item.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timeline/events/beforeItemRender/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timeline/events/beforeItemRender/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/events/beforeItemRender" %}