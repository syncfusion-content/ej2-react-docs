---
layout: post
title: Underline a character in a text in React Split button component | Syncfusion
description: Learn here all about Underline a character in a text in Syncfusion React Split button component of Syncfusion Essential JS 2 and more.
control: Underline a character in a text 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Underline a character in a text in React Split button component

Emphasize keyboard shortcuts or specific characters in popup items by underlining them during rendering. Use the [`beforeItemRender`](https://ej2.syncfusion.com/react/documentation/api/split-button#beforeitemrender) event to inject HTML `<u>` tags around the target character, setting the content as innerHTML in the `li` element to display formatted text.

In the following example, the `C` character is underlined in the `Copy` item to indicate a keyboard shortcut.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/split-button/underline-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/split-button/underline-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/split-button/underline-cs1" %}