---
layout: post
title: Show tooltip on disabled elements and disable tooltip in React Tooltip component | Syncfusion
description: Learn here all about Show tooltip on disabled elements and disable tooltip in Syncfusion React Tooltip component of Syncfusion Essential JS 2 and more.
control: Show tooltip on disabled elements and disable tooltip 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Show tooltip on disabled elements and disable tooltip in React Tooltip component

By default, Tooltips will not be displayed on disabled elements. However, it is possible to enable this behavior by following the steps below.
1. Add a disabled element like the `button` element into a div whose display style is set to `inline-block`.
2. Set the pointer event as `none` for the disabled element (button) through CSS.
3. Now, initialize the Tooltip for outer div element that holds the disabled button element.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/tooltip/disable-tooltip-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/tooltip/disable-tooltip-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tooltip/disable-tooltip-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tooltip/disable-tooltip-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tooltip/disable-tooltip-cs2" %}
