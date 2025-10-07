---
layout: post
title: Resize in React Splitter component | Syncfusion
description: Learn here all about Resize in Syncfusion React Splitter component of Syncfusion Essential JS 2 and more.
control: Splitter 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Resizing panes in React Splitter component

By default, pane resizing is enabled in the React Splitter component. A gripper element is added to the separator to make resizing intuitive and user-friendly.

> The horizontal Splitter allows resizing in horizontal directions.  
> The vertical Splitter allows resizing in vertical directions.

During resizing, the adjacent panes automatically adjust their dimensions to accommodate the change.

## Minimum and Maximum size constraints

You can define minimum and maximum sizes for each pane. Resizing is restricted within these boundaries to maintain layout integrity.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/splitter/validation-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/splitter/validation-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/splitter/validation-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/splitter/validation-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/splitter/validation-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/splitter/validation-cs2" %}

## Disabling pane resizing

You can disable the resizing for the pane by setting `false` to the [resizable](https://ej2.syncfusion.com/react/documentation/api/splitter/panePropertiesModel/#resizable) property within paneSettings.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/splitter/prevent-resize-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/splitter/prevent-resize-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/splitter/prevent-resize-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/splitter/prevent-resize-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/splitter/prevent-resize-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/splitter/prevent-resize-cs2" %}

## Refreshing content during resize

You can refresh pane content dynamically during resizing by using the following events:

- [`resizeStart`](https://ej2.syncfusion.com/react/documentation/api/splitter/#resizestart)
- [`resizing`](https://ej2.syncfusion.com/react/documentation/api/splitter/#resizing)
- [`resizeStop`](https://ej2.syncfusion.com/react/documentation/api/splitter/#resizestop)

## Customizing Resize-gripper and Cursor

You can style the resize gripper icon and cursor using CSS to match your application's design.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/splitter/grip-customization-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/splitter/grip-customization-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/splitter/grip-customization-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/splitter/grip-customization-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/splitter/grip-customization-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/splitter/grip-customization-cs2" %}

## See Also

* [Collapsible panes](expand-collapse)