---
layout: post
title: Underline Character in React Context Menu Item | Syncfusion
description: Learn here all about Underline a character in the item text in Syncfusion React Context menu component of Syncfusion Essential JS 2 and more.
control: Context Menu
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Underline Character in react Context Menu Item Text

To underline a specific character in a menu item's text, you can utilize the [`beforeItemRender`](https://ej2.syncfusion.com/react/documentation/api/context-menu/#beforeitemrender) event. This technique is commonly used to create  Shortcut keys by visually highlighting specific characters within menu items.

The underlining can be achieved by adding `<u>` tags around the target character and setting the modified text as innerHTML to the list item element during rendering.

When implementing this feature, the `beforeItemRender` event provides access to the menu item element and its associated data, enabling you to modify the display text before the item is rendered in the DOM. The event occurs for each menu item during the rendering process, giving you the opportunity to customize the appearance based on your specific requirements.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/getting-started-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/getting-started-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/context-menu/getting-started-cs5" %}
