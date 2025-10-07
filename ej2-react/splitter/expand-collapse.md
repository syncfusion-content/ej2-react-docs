---
layout: post
title: Expand collapse in React Splitter component | Syncfusion
description: Learn here all about Expand collapse in Syncfusion React Splitter component of Syncfusion Essential JS 2 and more.
control: Splitter 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Expand and collapse panes in React Splitter component

## Collapsible panes

The React Splitter component supports built-in expand and collapse functionality for its panes. By default, this behavior is disabled. To enable it, set the [collapsible](https://ej2.syncfusion.com/react/documentation/api/splitter/panePropertiesModel/#collapsible) property within `paneSettings`. This displays expand and collapse icons in the panes. You can dynamically expand and collapse the panes by clicking on the corresponding icons

The following example demonstrates how to enable collapsible behavior:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/splitter/expand-collapse-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/splitter/expand-collapse-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/splitter/expand-collapse-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/splitter/expand-collapse-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/splitter/expand-collapse-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/splitter/expand-collapse-cs2" %}

## Programmatically control the expand and collapse action

You can also control pane visibility programmatically using the Splitter’s public methods: [expand](https://ej2.syncfusion.com/react/documentation/api/splitter/#expand) and [collapse](https://ej2.syncfusion.com/react/documentation/api/splitter/#collapse). These methods allow you to dynamically toggle panes based on application logic.

Here’s an example of using these methods:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/splitter/expand-collapse-method-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/splitter/expand-collapse-method-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/splitter/expand-collapse-method-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/splitter/expand-collapse-method-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/splitter/expand-collapse-method-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/splitter/expand-collapse-method-cs2" %}

## Set initial collapsed state

To render a pane in a collapsed state on initial load, set the [collapsed](https://ej2.syncfusion.com/react/documentation/api/splitter/#collapsed) property to `true`. This is useful for customizing the default layout based on user preferences or screen size.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/splitter/collapsed-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/splitter/collapsed-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/splitter/collapsed-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/splitter/collapsed-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/splitter/collapsed-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/splitter/collapsed-cs2" %}

## See Also

* [Resizable split panes](resize)