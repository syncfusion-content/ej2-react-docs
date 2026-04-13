---
layout: post
title: Timeout in React Toast component | Syncfusion
description: Learn here all about Timeout in Syncfusion React Toast component of Syncfusion Essential JS 2 and more.
control: Toast
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Toast timeout and dismissal

Control how long toasts remain visible before automatic dismissal using timeout properties. The Toast component provides flexible timeout configuration for different notification scenarios and user interactions.

## Automatic dismissal timeout

The [`timeOut`](https://ej2.syncfusion.com/react/documentation/api/toast/#timeout) property specifies how long a toast displays in milliseconds before automatically disappearing. The default timeout is 5000 milliseconds (5 seconds). Once the timeout expires, the toast is automatically removed from the screen.

> **Accessibility note:** Consider users with vision or motor impairments who may need more time to read and interact with notifications. Provide manual close buttons or longer timeouts for critical information.

## Visual timeout indication

Display a progress bar indicating remaining toast display time using the [Progress Bar](./config#progress-bar) feature. Enable the progress bar by setting `showProgressbar` to `true`. This provides users with clear visual feedback about when the toast will automatically dismiss.

## Extended timeout on hover

The [`extendedTimeOut`](https://ej2.syncfusion.com/react/documentation/api/toast/#extendedtimeout) property extends the display duration when users hover over a toast, giving them additional time to read or interact with content. This prevents accidental dismissal of important notifications.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs41/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs41/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs41" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs42/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs42/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs42" %}

## Static toasts

Create persistent toasts that do not automatically dismiss by setting the `timeOut` property to `0` (zero). Static toasts require explicit user action (close button click or programmatic removal) to dismiss. This pattern is ideal for critical alerts or action-required notifications where automatic dismissal would be inappropriate.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs43/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs43/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs43" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs44/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs44/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs44" %}

## See Also

* [Hide the toast on click](./how-to/close-the-toast-with-click-tap)