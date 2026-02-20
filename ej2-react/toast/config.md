---
layout: post
title: Config in React Toast component | Syncfusion
description: Learn here all about Config in Syncfusion React Toast component of Syncfusion Essential JS 2 and more.
control: Toast
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Toast configuration

This section explains how to customize Toast appearance, layout, and behavior using built-in properties and events. Configure titles, content, positioning, progress display, and stacking order to match your application's notification requirements.

## Title and content

Toast notifications display messages using the [`title`](https://ej2.syncfusion.com/react/documentation/api/toast/#title) property for headlines and the [`content`](https://ej2.syncfusion.com/react/documentation/api/toast/#content) property for message body. Both properties are responsive and adapt to various screen sizes and orientations. You can provide titles and content as plain text, HTML strings, or element references for flexible content presentation.

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

## Custom target container

By default, toasts render within the document body. Render toasts within a specific container element using the [`target`](https://ej2.syncfusion.com/react/documentation/api/toast/#target) property. Specifying a custom target enables scoped notifications within modal dialogs, panels, or specific application regions. Toast [`position`](https://ej2.syncfusion.com/react/documentation/api/toast/#position) is calculated relative to the target container.

## Close button

Enable manual toast dismissal by setting [`showCloseButton`](https://ej2.syncfusion.com/react/documentation/api/toast/#showclosebutton) to `true`. This adds a close button allowing users to dismiss toasts before automatic timeout expiration. Close buttons are particularly useful for persistent notifications or static toasts where manual dismissal is the primary interaction method.

## Progress bar

Display visual timeout feedback using the [`showProgressBar`](https://ej2.syncfusion.com/react/documentation/api/toast/#showprogressbar) property. When enabled, a progress bar appears indicating remaining toast display time, helping users anticipate dismissal. Configure progress bar direction using [`progressDirection`](https://ej2.syncfusion.com/react/documentation/api/toast/#progressDirection) to display from right-to-left (RTL, default) or left-to-right (LTR).

## Stacking order

Control the order toasts appear on screen using the [`newestOnTop`](https://ej2.syncfusion.com/react/documentation/api/toast/#newestontop) property. When enabled, new toasts appear above existing ones. When disabled (default), new toasts append below existing notifications, creating a growing stack.

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