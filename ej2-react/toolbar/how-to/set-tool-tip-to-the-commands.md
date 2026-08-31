---
layout: post
title: How to set a Tooltip on Toolbar commands | Syncfusion
description: Show a Syncfusion Tooltip on each Syncfusion React Toolbar command by attaching the Tooltip component to the command element id.
control: Set tool tip to the commands 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to set a Tooltip on Toolbar commands

The [`tooltipText`](https://ej2.syncfusion.com/react/documentation/api/toolbar/item#tooltiptext) property of the Toolbar item (a `string` with a default of `''`) is used to set an HTML Tooltip on the commands that can be viewed as hint text on hover. You can set it per `ItemDirective`.

The native HTML Tooltip is limited to plain text and basic browser styling. To replace the native Tooltip with the ej2 Tooltip component (which supports richer content and theming), follow these steps:

1. Initialize the Tooltip with the Toolbar target using the `target` option (e.g., `target: '#toolbar'`), which attaches the Tooltip to the command elements.

* Import the `Tooltip` module from `ej2-popups`,and initialize the Tooltip with the Toolbar target. Refer to the following code example:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/toolbar/toolbar-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/toolbar/toolbar-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toolbar-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-cs4" %}