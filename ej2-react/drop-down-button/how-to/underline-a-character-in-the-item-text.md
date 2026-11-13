---
layout: post
title: Underline a char in items in React Dropdown Menu | Syncfusion
description: Underline a specific character in React Dropdown Menu item text using the beforeItemRender event to inject HTML u tags.
control: Underline a character in the item text 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to underline a char in items in React Dropdown Menu

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