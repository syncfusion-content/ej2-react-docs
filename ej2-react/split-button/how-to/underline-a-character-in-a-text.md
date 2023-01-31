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

Underline a particular character in a text can be handled in [`beforeItemRender`](https://ej2.syncfusion.com/react/documentation/api/split-button#beforeitemrender)  event by adding `<u>` tag in between the text and given as innerHTML in `li` rendering.

In the following example, `C` is underlined in the text `Copy`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/split-button/underline-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/split-button/underline-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/split-button/underline-cs1" %}