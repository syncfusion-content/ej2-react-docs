---
layout: post
title: Underline a character in the item text in React Drop down button component | Syncfusion
description: Learn here all about Underline a character in the item text in Syncfusion React Drop down button component of Syncfusion Essential JS 2 and more.
control: Underline a character in the item text 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Underline a character in the item text in React Drop down button component

Highlight specific characters in dropdown items by adding underline formatting using the [`beforeItemRender`](https://ej2.syncfusion.com/react/documentation/api/drop-down-button/#beforeitemrender) event. Insert HTML `<u>` tags around the desired text and set it as the item's innerHTML to create underlined characters.

The following example demonstrates how to underline the character `C` in the text `Copy`:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/drop-down-button/default-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/drop-down-button/default-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/drop-down-button/default-cs1" %}