---
layout: post
title: Pane sizing in React Splitter component | Syncfusion
description: Learn here all about Pane sizing in Syncfusion React Splitter component of Syncfusion Essential JS 2 and more.
control: Splitter 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Pane sizing in React Splitter component


The React Splitter component allows you to define pane sizes using pixel values, percentage values, or automatic sizing based on layout behavior.

## Set pane size in pixels

To assign fixed pixel values to panes, use the `size` property in `paneSettings`. This ensures consistent pane dimensions regardless of container size.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/splitter/pane-sizes-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/splitter/pane-sizes-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/splitter/pane-sizes-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/splitter/pane-sizes-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/splitter/pane-sizes-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/splitter/pane-sizes-cs2" %}

## Set pane size in percentage

You can also define pane sizes as percentages. This approach ensures responsive behavior across different screen sizes.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/splitter/pane-sizes-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/splitter/pane-sizes-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/splitter/pane-sizes-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/splitter/pane-sizes-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/splitter/pane-sizes-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/splitter/pane-sizes-cs4" %}

## Auto-size panes
When no explicit size is provided, panes automatically adjust based on available space. This behavior is powered by the default flex layout, allowing dynamic resizing when panes are added, removed, shown, or hidden.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/splitter/template-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/splitter/template-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/splitter/template-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/splitter/template-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/splitter/template-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/splitter/template-cs2" %}

## Fixed pane

You can configure panes with fixed sizes in both horizontal and vertical orientations. However, even when all panes are assigned fixed sizes, the Splitter treats the last pane as flexible to ensure layout adaptability. At least one pane must remain flexible to accommodate container changes.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/splitter/fixed-pane-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/splitter/fixed-pane-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/splitter/fixed-pane-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/splitter/fixed-pane-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/splitter/fixed-pane-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/splitter/fixed-pane-cs2" %}
