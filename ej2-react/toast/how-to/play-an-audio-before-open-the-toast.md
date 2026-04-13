---
layout: post
title: Play an audio before open the toast in React Toast component | Syncfusion
description: Learn here all about Play an audio before open the toast in Syncfusion React Toast component of Syncfusion Essential JS 2 and more.
control: Toast
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Play an audio before open the toast in React Toast component

Enhance toast notifications with audio feedback by playing sound files during toast display. Implement audio playback using the [`beforeOpen`](https://ej2.syncfusion.com/react/documentation/api/toast/#beforeopen) event to trigger audio when toasts appear. To stop audio playback after toast displays, use the [`open`](https://ej2.syncfusion.com/react/documentation/api/toast/#open) event or the `close` event.

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
