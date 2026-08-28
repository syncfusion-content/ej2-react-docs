---
layout: post
title: How to show tooltip on Tab header in React Tab | Syncfusion
description: Show a hover tooltip on each Syncfusion React Tab header by setting the showTooltip property to true.
control: Display tool tip on tab header 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to show tooltip on Tab header in React Tab

You can display a tooltip for each Tab header using the [`beforeRender`](https://ej2.syncfusion.com/react/documentation/api/tooltip#beforerender) event of the React Tooltip component. The tooltip appears as a hint text when the pointer hovers over a Tab item. Attach the Tooltip to the Tab header element (for example, `.e-tab .e-tab-header .e-toolbar-item`) within the `beforeRender` handler.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tab/tooltip-tab-header-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tab/tooltip-tab-header-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tooltip-tab-header-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/tooltip-tab-header-cs1" %}
