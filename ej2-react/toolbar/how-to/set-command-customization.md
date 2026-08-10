---
layout: post
title: How to set command customization in React Toolbar | Syncfusion
description: Configure Syncfusion React Toolbar command properties such as type, text, tooltipText, prefixIcon, and the click event handler.
control: Set command customization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to set command customization in React Toolbar

The [`htmlAttributes`](https://ej2.syncfusion.com/react/documentation/api/toolbar/item/#htmlattributes) property of the Toolbar item is used to set the HTML attributes ('ID', 'class', 'style' ,'role') for the commands.

When style attributes are added, if the same attributes were already present, they will be replaced. This is not so in the case of `class` attribute. Classes will be added to the element instead of replacing the existing ones.

Single or multiple CSS classes can be added to the Toolbar commands using the Toolbar item [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/toolbar/item/#cssclass) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/toolbar/toolbar-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/toolbar/toolbar-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toolbar-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-cs3" %}