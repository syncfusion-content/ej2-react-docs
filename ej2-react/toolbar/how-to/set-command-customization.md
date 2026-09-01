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

The [`htmlAttributes`](https://ej2.syncfusion.com/react/documentation/api/toolbar/item#htmlattributes) property of the Toolbar item (accepts an object of type `{ [key: string]: string }` with a default of `{}`) is used to set the HTML attributes (`id`, `class`, `style`, `role`) for the commands.

If the same attributes already exist, they are replaced when new ones are added. This is not the case for the `class` attribute. Classes are appended to the element rather than replacing existing ones.

## Add CSS classes

Single or multiple CSS classes can be added to the Toolbar commands using the Toolbar item's [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/toolbar/item#cssclass) property (a `string` with a default of `''`; multiple classes are separated by a space).

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