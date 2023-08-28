---
layout: post
title: Config in React Toast component | Syncfusion
description: Learn here all about Config in Syncfusion React Toast component of Syncfusion Essential JS 2 and more.
control: Config 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Config in React Toast component

This section explains on customizing the Toast appearance using built-in APIs.

## Title and content template

Toast can be created with the notification message. The message contains [`title`](https://ej2.syncfusion.com/react/documentation/api/toast/#title) and [`content`](https://ej2.syncfusion.com/react/documentation/api/toast/#content) of the Toasts. Title and contents are adaptable in any resolution.

> Title or Content property can be given as HTML element/element ID as a string that can be displayed as a Toast.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs7/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs7" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs8/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs8" %}

## Specifying custom target

By default toast can be rendered in the document body, we can change the target position for toast rendering using [`target`](https://ej2.syncfusion.com/react/documentation/api/toast/#target) property. Based on the target [`position`](https://ej2.syncfusion.com/react/documentation/api/toast/#position) will update.

## Close Button

By default [`showCloseButton`](https://ej2.syncfusion.com/react/documentation/api/toast/#showclosebutton) will not enabled. We can enable it by setting true value. Before expiring toast we can use to close or destroy toasts manually.

## Progress bar

By default [`showProgressBar`](https://ej2.syncfusion.com/react/documentation/api/toast/#showprogressbar) will not enabled. If we enabled it can visually indicate how long time to get toast expires. Based on the `timeOut` property Progress bar will appear.

### Progress bar direction

By default, the [progressDirection](https://ej2.syncfusion.com/react/documentation/api/toast/#progressDirection) is set to "Rtl" and it will appear from right to left direction. You can change the progressDirection to "Ltr" to make it appear from left to right direction.

## Newest on top

In default, newly created toasts will append next with existing toast. We can change the Sequence like inserting before the toast, by enabling the [`newestOnTop`](https://ej2.syncfusion.com/react/documentation/api/toast/#newestontop).

Here below sample demonstrates the combination of `target`, `showCloseButton`, `showProgressBar` and `newestOnTop` properties in toast.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs9/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs9/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs9" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs10/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs10/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs10" %}

## Width and height

we can set toast dimensions through [`width`](https://ej2.syncfusion.com/react/documentation/api/toast/#width) and [`height`](https://ej2.syncfusion.com/react/documentation/api/toast/#height) property. The height and width can be applied for specific set of toasts. So you can create different toasts with custom dimension.

In default toast can be rendered with '300px' width with 'auto' height

   > In mobile device toast default width gets '100%' width of the page.
   > When we sets toast width as '100%' toast will occupies full width and displayed top or bottom based on position `Y` property.

Both width and height property allows setting pixels/numbers/percentage. The number value is considered as pixels.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs11/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs11/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs11" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs12/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs12/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs12" %}

## See Also

[Prevent duplicate toasts](./how-to/prevent-duplicate-toast-display/)
[Customize the progress bar](./how-to/customize-progress-bar-theme-and-sizing/)