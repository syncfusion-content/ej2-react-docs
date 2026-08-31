---
layout: post
title: How to underline a character in React Context Menu | Syncfusion
description: Underline a single character in a React Context Menu item to indicate a keyboard shortcut, using the `beforeItemRender` event and `<u>` tags.
control: Context Menu
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to underline a character in a React Context Menu item

To underline a specific character in a menu item's text, use the [`beforeItemRender`](https://ej2.syncfusion.com/react/documentation/api/context-menu/index-default#beforeitemrender) event. This technique is commonly used to visually indicate keyboard shortcut characters within menu items.

The underlining is achieved by adding `<u>` tags around the target character and assigning the modified string to the list item's `innerHTML` during rendering. The handler typically checks `args.item.text` to scope the modification to a specific item.

## Example

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/getting-started-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/getting-started-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/getting-started-cs5" %}