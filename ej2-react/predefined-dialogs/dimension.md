---
layout: post
title: Dimension in React Predefined dialogs component | Syncfusion
description: Learn here all about Dimension in Syncfusion React Predefined dialogs component of Syncfusion Essential JS 2 and more.
control: Dimension 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Dimension in React Predefined dialogs component

The dimensions of predefined dialogs can be customized using the `height` and `width` properties. Dimension values can be specified in pixels or percentage format to change the default dialog width and height.

## Alert dimension

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/predefined-dialogs/alert-dimension-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/predefined-dialogs/alert-dimension-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/predefined-dialogs/alert-dimension-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/predefined-dialogs/alert-dimension-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/predefined-dialogs/alert-dimension-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/predefined-dialogs/alert-dimension-cs2" %}

## Confirm dimension

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/predefined-dialogs/confirm-dimension-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/predefined-dialogs/confirm-dimension-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/predefined-dialogs/confirm-dimension-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/predefined-dialogs/confirm-dimension-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/predefined-dialogs/confirm-dimension-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/predefined-dialogs/confirm-dimension-cs2" %}

## Prompt dimension

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/predefined-dialogs/prompt-dimension-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/predefined-dialogs/prompt-dimension-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/predefined-dialogs/prompt-dimension-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/predefined-dialogs/prompt-dimension-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/predefined-dialogs/prompt-dimension-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/predefined-dialogs/prompt-dimension-cs2" %}

## Max-width and max-height

To restrict the maximum dialog dimensions, specify the `max-width` and `max-height` CSS properties for the component's container element using the `cssClass` property. The `max-height` value is calculated at the source level and applied to the dialog, so the `max-height` property may need to be overridden.

The following code demonstrates how to customize the max-width and max-height for the alert dialog:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/predefined-dialogs/max-width-height-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/predefined-dialogs/max-width-height-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/predefined-dialogs/max-width-height-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/predefined-dialogs/max-width-height-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/predefined-dialogs/max-width-height-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/predefined-dialogs/max-width-height-cs2" %}

## Min-width and min-height

To restrict the minimum dialog dimensions, specify the `min-width` and `min-height` CSS properties for the component's container element using the `cssClass` property.

The following code demonstrates how to customize the min-width and min-height for the alert dialog:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/predefined-dialogs/min-width-height-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/predefined-dialogs/min-width-height-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/predefined-dialogs/min-width-height-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/predefined-dialogs/min-width-height-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/predefined-dialogs/min-width-height-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/predefined-dialogs/min-width-height-cs2" %}
