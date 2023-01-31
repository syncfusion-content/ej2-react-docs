---
layout: post
title: Underline a character in the item text in React Context menu component | Syncfusion
description: Learn here all about Underline a character in the item text in Syncfusion React Context menu component of Syncfusion Essential JS 2 and more.
control: Underline a character in the item text 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Underline a character in the item text in React Context menu component

To underline a particular character in a text, it can be handled in `beforeItemRender` event by adding `<u>` tag in between the text and given as innerHTML in `li` rendering.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/getting-started-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/getting-started-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/context-menu/getting-started-cs5" %}
