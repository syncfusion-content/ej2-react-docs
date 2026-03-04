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

The React Splitter component enables pane resizing by default. A gripper element is added to the separator to provide an intuitive pointer-based resize handle.

> The horizontal Splitter allows resizing in horizontal directions.  
> The vertical Splitter allows resizing in vertical directions.

During resizing, the adjacent panes automatically adjust their dimensions to accommodate the change.

## Minimum and Maximum size constraints

Define minimum and maximum sizes for each pane. Resizing is restricted within these boundaries to maintain layout integrity.

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

Set the [resizable](https://ej2.syncfusion.com/react/documentation/api/splitter/panePropertiesModel#resizable) property to `false` to disable resizing for that specific pane.

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

Use the following events to refresh pane content dynamically during resize:

- [`resizeStart`](https://ej2.syncfusion.com/react/documentation/api/splitter#resizestart)
- [`resizing`](https://ej2.syncfusion.com/react/documentation/api/splitter#resizing)
- [`resizeStop`](https://ej2.syncfusion.com/react/documentation/api/splitter#resizestop)

## Customizing Resize-gripper and Cursor

Style the resize gripper icon and cursor via CSS to match the application's design system. 

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