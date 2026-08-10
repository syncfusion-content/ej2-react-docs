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

The [`tooltipText`](https://ej2.syncfusion.com/react/documentation/api/toolbar/item/#tooltiptext) property of the Toolbar item is used to set the HTML Tooltip to the commands that can be viewed as hint texts on mouse hover.

To change the [`tooltipText`](https://ej2.syncfusion.com/react/documentation/api/toolbar/item/#tooltiptext) to ej2-tooltip component:

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