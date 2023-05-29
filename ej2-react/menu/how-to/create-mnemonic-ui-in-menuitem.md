---
layout: post
title: Create mnemonic ui in menuitem in React Menu component | Syncfusion
description: Learn here all about Create mnemonic ui in menuitem in Syncfusion React Menu component of Syncfusion Essential JS 2 and more.
control: Create mnemonic ui in menuitem 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Create mnemonic ui in menuitem in React Menu component

A particular character in a text can be underlined in the [`beforeItemRender`](https://ej2.syncfusion.com/react/documentation/api/menu/#beforeitemrender) event by adding `<u>` tag in between the text and assign the innerHTML to the `li` element.

In the following example, the first character in `File`, `Open`, and `Save` menu items are underlined.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/menu/item-icons-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/menu/item-icons-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/menu/item-icons-cs1" %}
