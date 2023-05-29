---
layout: post
title: Timeout in React Toast component | Syncfusion
description: Learn here all about Timeout in Syncfusion React Toast component of Syncfusion Essential JS 2 and more.
control: Timeout 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Timeout in React Toast component

The [`timeOut`](https://ej2.syncfusion.com/react/documentation/api/toast#timeout) property helps to change the default value of toast expire time. By default, the set timeOut value will be `5000` milliseconds. React Toast will live till the timeOut reaches without user interaction, the timeOut value will be taken in milliseconds. Once the toast reached a given timeOut it will expire automatically.

## Visual representation of timeOut

The toast component's `expire time` can be visually shown using a [Progress Bar](./config#progress-bar). To show progress bar you must set showProgressbar api as true.

## How long the toast displayed in page

The [`extendedTimeOut`](https://ej2.syncfusion.com/react/documentation/api/toast#extendedtimeout) property is used to decide how long the toast to be displayed after the user hovers on it.

> You can destroy toast at any time by clicking on the close button. The close button can be enabled by `showCloseButton` property as true.

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

## Static toast

You can prevent auto-hiding of React toast by set timeOut value of timeOut property as zero (0).

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

* [Hide the toast on click](./how-to/close-the-toast-with-click-tap/)