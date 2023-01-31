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

Customize the predefined dialogs dimensions using the `height` and `width` properties. You can specify the dimension values in both pixels and percentage format to change the default dialog width and height values.

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

To have a restricted max-width and max-height dialog dimension, you need to specify the max-width, max-height CSS properties for the component’s container element by using the `cssClass` property. The max-height value is calculated in source level and set to the dialog. so, need to override the max-height property.

Use the following code to customize the max-width and max-height for alert dialog:

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

To have a restricted min-width and min-height dialog dimension, you need to specify the min-width, min-height CSS properties for the component’s container element by using the `cssClass` property.

Use the following code to customize the min-width and min-height for alert dialog:

`[Class-Component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/predefined-dialogs/min-width-height-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/predefined-dialogs/min-width-height-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/predefined-dialogs/min-width-height-cs1" %}

`[Functional-Component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/predefined-dialogs/min-width-height-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/predefined-dialogs/min-width-height-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/predefined-dialogs/min-width-height-cs2" %}