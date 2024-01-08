---
layout: post
title: Events in React Stepper component | Syncfusion
description:  Checkout and learn about Events with Syncfusion React Stepper component of Syncfusion Essential JS 2 and more.
control: Stepper
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Events in React Stepper component

This section describes the Stepper events that will be triggered when an appropriate actions are performed. The following events are available in the Stepper component.

## created

The Stepper component triggers the [created](https://ej2.syncfusion.com/react/documentation/api/stepper#created) event when the control rendering is completed.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stepper/events/created/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stepper/events/created/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/stepper/events/created/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/events/created" %}

## stepChanged

The Stepper component triggers the [stepChanged](https://ej2.syncfusion.com/react/documentation/api/stepper#stepchanged) event after the active step is changed.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stepper/events/step-changed/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stepper/events/step-changed/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/stepper/events/step-changed/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/events/step-changed" %}

## stepChanging

The Stepper component triggers the [stepChanging](https://ej2.syncfusion.com/react/documentation/api/stepper#stepchanging) event before the active step change.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stepper/events/step-changing/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stepper/events/step-changing/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/stepper/events/step-changing/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/events/step-changing" %}

## stepClick

The Stepper component triggers the [stepClick](https://ej2.syncfusion.com/react/documentation/api/stepper#stepclick) event when the step is clicked.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stepper/events/step-click/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stepper/events/step-click/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/stepper/events/step-click/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/events/step-click" %}

## beforeStepRender

The Stepper component triggers the [beforeStepRender](https://ej2.syncfusion.com/react/documentation/api/stepper#beforesteprender) event before rendering each step.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stepper/events/before-step-render/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stepper/events/before-step-render/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/stepper/events/before-step-render/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/events/before-step-render" %}
