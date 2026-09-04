---
layout: post
title: How to add mnemonic UI in Menu items in React | Syncfusion
description: Underline a character in a Syncfusion React Menu item to act as a mnemonic access key, by inserting `<u>` tags in the `beforeItemRender` event.
control: Create mnemonic ui in menuitem 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to add mnemonic UI in Menu items in React

A particular character in a text can be underlined in the [`beforeItemRender`](https://ej2.syncfusion.com/react/documentation/api/menu/#beforeitemrender) event by adding `<u>` tag in between the text and assign the innerHTML to the `li` element.

In the following example, the first character in `File`, `Open`, and `Save` React menu items are underlined.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/menu/item-icons-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/menu/item-icons-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/menu/item-icons-cs1" %}
