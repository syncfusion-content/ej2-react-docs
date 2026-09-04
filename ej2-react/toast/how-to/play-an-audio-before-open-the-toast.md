---
layout: post
title: How to play audio before Toast opens in React Toast | Syncfusion
description: Play sound files when React Toasts appear using the beforeOpen event, and stop audio via open or close event handlers.
control: Toast
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to play audio before Toast opens in React Toast

Enhance React Toast notifications with audio feedback by playing sound files during React Toast display. Implement audio playback using the [`beforeOpen`](https://ej2.syncfusion.com/react/documentation/api/toast#beforeopen) event to trigger audio when React Toast appear. To stop audio playback after React Toast displays, use the [`open`](https://ej2.syncfusion.com/react/documentation/api/toast#open) event or the `close` event.

The following example demonstrates playing audio background sound when opening a toast:

> **Note:** Consider accessibility implications when using audio notifications. Provide text-based notifications as alternatives for users with hearing disabilities. Also be mindful of browser autoplay policies which may restrict audio playback.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs25/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs25/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs25" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs26/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs26/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs26" %}
